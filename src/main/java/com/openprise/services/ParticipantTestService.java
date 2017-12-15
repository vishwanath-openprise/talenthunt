package com.openprise.services;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import javax.inject.Inject;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.openprise.dao.ParticipantQuestionRepository;
import com.openprise.dao.ParticipantRepository;
import com.openprise.dao.ParticipantTestRepository;
import com.openprise.dao.TestRepository;
import com.openprise.domain.Choice;
import com.openprise.domain.Participant;
import com.openprise.domain.ParticipantQuestion;
import com.openprise.domain.Question;
import com.openprise.domain.TEST_STATUS;
import com.openprise.domain.Test;
import com.openprise.domain.TestParticipant;
import com.openprise.services.bo.UserTest;

@Service
@Transactional
public class ParticipantTestService {

	@Autowired
	private SessionFactory sessionFactory;

	@Autowired
	private ParticipantTestRepository participantTestRepository;

	@Autowired
	private ParticipantQuestionRepository participantQuestionRepository;

	@Autowired
	private TestRepository testRepository;
	
	@Autowired
	private ParticipantRepository participantRepository;

	@Inject
	private UserTest userTest;

	public TestParticipant register(int testId, int participantId) {
		TestParticipant tp = null;
		Test test = testRepository.findOne(testId);
		Participant p = participantRepository.findOne(participantId);
		if (test != null) {
			tp = new TestParticipant();
			tp.setParticipant(p);
			tp.setTest(test);

			List<Question> qs = new ArrayList<Question>();
			Collections.copy(qs, test.getQuestions());
			Collections.shuffle(qs);

			int order = 1;
			for (Question question : qs) {
				ParticipantQuestion pq = new ParticipantQuestion();
				pq.setQuestionOrder(order);
				pq.setQuestion(question);
				tp.getQuestions().add(pq);
				order++;
			}

			participantTestRepository.save(tp);
		}
		return tp;
	}
	
	public TestParticipant registerForCurrentParticipant(int testId) {
		return register(testId, userTest.getUser().getId());
	}

	public void evaludateTestParticipants(int testId) {
		Test test = testRepository.findOne(testId);
		if (TEST_STATUS.COMPLETED.equals(test.getStatus())) {
			Collection<TestParticipant> tps = participantTestRepository.findByTest(test);
			for (TestParticipant tp : tps) {
				Collection<ParticipantQuestion> qs = tp.getQuestions();
				for (ParticipantQuestion q : qs) {
					if (q.isAnswered() && !q.isEvaluated()) {
						tp.setAnswered(tp.getAnswered() + 1);
						tp.setTotal(tp.getTotal() + 1);
						int correctIndex = 0;
						for (Choice c : q.getQuestion().getOptions()) {
							if (c.isValid()) {
								q.setCorrectOpt(c);
								q.setCorrectIndex(correctIndex);
								break;
							}
						}
						if (q.getAnsweredIndex() == q.getCorrectIndex()) {
							q.setValid(true);
							tp.setCorrect(tp.getCorrect() + 1);
						}
					}
				}
				tp.setSkipped(tp.getTotal() - tp.getAnswered());
				participantTestRepository.save(tp);
				participantQuestionRepository.save(qs);
			}
		}
	}

	public ParticipantQuestion beginTest(int participantTestId) {
		TestParticipant testParticipant = participantTestRepository.findOne(participantTestId);
		testParticipant.setStatus(TEST_STATUS.IN_PROGRESS);
		testParticipant.setStartDate(new Date());
		testParticipant.setLastUpdated(new Date());
		testParticipant.setQuestionIndex(0);
		participantTestRepository.save(testParticipant);
		userTest.setTest(testParticipant);
		return getNextQuestion();
	}

	public ParticipantQuestion resumeTest(int participantTestId) {
		TestParticipant testParticipant = participantTestRepository.findOne(participantTestId);
		testParticipant.setStatus(TEST_STATUS.IN_PROGRESS);
		testParticipant.setLastUpdated(new Date());
		participantTestRepository.save(testParticipant);
		userTest.setTest(testParticipant);
		return getNextQuestion();
	}

	public void endTest() {
		TestParticipant testParticipant = userTest.getTest();
		testParticipant.setStatus(TEST_STATUS.COMPLETED);
		testParticipant.setEndDate(new Date());
		testParticipant.setLastUpdated(new Date());
		userTest.setTest(null);
		participantTestRepository.save(testParticipant);
	}

	public ParticipantQuestion submitAnAnswer(int questionIndex, int optionIndex) {
		TestParticipant testParticipant = userTest.getTest();
		ParticipantQuestion question = testParticipant.getQuestions().get(testParticipant.getQuestionIndex());
		question.setAnswered(true);
		question.setAnsweredOpt(question.getQuestion().getOptions().get(optionIndex));
		question.setAnsweredIndex(optionIndex);
		participantQuestionRepository.save(question);
		participantTestRepository.save(testParticipant);
		return getNextQuestion();
	}

	public ParticipantQuestion skipAnAnswer(int questionIndex) {
		TestParticipant testParticipant = userTest.getTest();
		ParticipantQuestion question = testParticipant.getQuestions().get(testParticipant.getQuestionIndex());
		question.setAnswered(false);
		participantQuestionRepository.save(question);
		participantTestRepository.save(testParticipant);
		return getNextQuestion();
	}

	
	public ParticipantQuestion getNextQuestion() {
		TestParticipant testParticipant = userTest.getTest();
		ParticipantQuestion pq = participantQuestionRepository.findByTestParticipantAndQuestionOrder(testParticipant,
				testParticipant.getQuestionIndex() + 1);
		testParticipant.setQuestionIndex(pq.getQuestionOrder());
		return pq;
	}

	public ParticipantQuestion getPrevQuestion() {
		TestParticipant testParticipant = userTest.getTest();
		ParticipantQuestion pq = participantQuestionRepository.findByTestParticipantAndQuestionOrder(testParticipant,
				testParticipant.getQuestionIndex() - 1);
		testParticipant.setQuestionIndex(pq.getQuestionOrder());
		return pq;
	}

	public ParticipantQuestion getNextPendingQuestion(int index) {
		TestParticipant testParticipant = userTest.getTest();
		ParticipantQuestion pq = participantQuestionRepository
				.findByTestParticipantAndQuestionOrderGreaterThanAndAnsweredNot(testParticipant,
						testParticipant.getQuestionIndex(), true);
		return pq;

	}

	public ParticipantQuestion getPrevPendingQuestion(int index) {
		TestParticipant testParticipant = userTest.getTest();
		ParticipantQuestion pq = participantQuestionRepository
				.findByTestParticipantAndQuestionOrderLessThanAndAnsweredNot(testParticipant,
						testParticipant.getQuestionIndex(), true);
		return pq;

	}

	public ParticipantQuestion getQuestionAt(int index) {
		TestParticipant testParticipant = userTest.getTest();
		ParticipantQuestion question = null;
		if (testParticipant.getQuestions().size() < testParticipant.getQuestionIndex()
				&& testParticipant.getQuestionIndex() > 0) {
			testParticipant.setQuestionIndex(testParticipant.getQuestionIndex() - 1);
			question = testParticipant.getQuestions().get(testParticipant.getQuestionIndex());
			participantTestRepository.save(testParticipant);
		}
		return question;
	}
}
