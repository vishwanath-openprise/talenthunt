package com.openprise.services;

import java.util.Date;

import javax.inject.Inject;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.openprise.dao.ParticipantQuestionRepository;
import com.openprise.dao.ParticipantTestRepository;
import com.openprise.domain.ParticipantQuestion;
import com.openprise.domain.TEST_STATUS;
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

	@Inject
	private UserTest test;

	public ParticipantQuestion beginTest(long participantTestId) {
		TestParticipant testParticipant = participantTestRepository.findOne(participantTestId);
		testParticipant.setStatus(TEST_STATUS.IN_PROGRESS);
		testParticipant.setStartDate(new Date());
		testParticipant.setLastUpdated(new Date());
		testParticipant.setQuestionIndex(0);
		participantTestRepository.save(testParticipant);
		//test.setTest(testParticipant);
		return getNextQuestion();
	}

	public ParticipantQuestion resumeTest(long participantTestId) {
		TestParticipant testParticipant = participantTestRepository.findOne(participantTestId);
		testParticipant.setStatus(TEST_STATUS.IN_PROGRESS);
		testParticipant.setLastUpdated(new Date());
		participantTestRepository.save(testParticipant);
		//test.setTest(testParticipant);
		return getNextQuestion();
	}

	public void endTest() {
		TestParticipant testParticipant = test.getTest();
		testParticipant.setStatus(TEST_STATUS.COMPLETED);
		testParticipant.setEndDate(new Date());
		testParticipant.setLastUpdated(new Date());
		participantTestRepository.save(testParticipant);
	}

	public ParticipantQuestion submitAnAnswer(int questionIndex, int optionIndex) {
		TestParticipant testParticipant = test.getTest();
		ParticipantQuestion question = testParticipant.getQuestions().get(testParticipant.getQuestionIndex());
		question.setAnswered(true);
		question.setAnsweredOpt(question.getQuestion().getOptions().get(optionIndex));
		participantQuestionRepository.save(question);
		return getNextQuestion();
	}

	public ParticipantQuestion getNextQuestion() {
		TestParticipant testParticipant = test.getTest();
		ParticipantQuestion question = null;
		if (testParticipant.getQuestions().size() < testParticipant.getQuestionIndex()) {
			testParticipant.setQuestionIndex(testParticipant.getQuestionIndex() + 1);
			question = testParticipant.getQuestions().get(testParticipant.getQuestionIndex());
			participantTestRepository.save(testParticipant);
		}
		return question;
	}
	
	public ParticipantQuestion getNextPendingQuestion(int index) {
		TestParticipant testParticipant = test.getTest();
		ParticipantQuestion question = null;
		int counter = 0;
		for(ParticipantQuestion q : testParticipant.getQuestions()) {
			counter++;
			if(counter < index || !q.isAnswered()) {
				question = q;
				break;
			}
		}
		return question;
	}

	public ParticipantQuestion getPrevPendingQuestion(int index) {
		TestParticipant testParticipant = test.getTest();
		ParticipantQuestion question = null;
		int counter = 0;
		for(ParticipantQuestion q : testParticipant.getQuestions()) {
			counter++;
			if(counter < index && !q.isAnswered()) {
				question = q;
				break;
			}
		}
		return question;
	}

	public ParticipantQuestion getQuestionAt(int index) {
		TestParticipant testParticipant = test.getTest();
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
