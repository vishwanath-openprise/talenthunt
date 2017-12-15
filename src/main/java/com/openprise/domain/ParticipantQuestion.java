package com.openprise.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class ParticipantQuestion {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@ManyToOne
	private TestParticipant testParticipant;
	@ManyToOne
	private Question question;
	@ManyToOne
	private Choice answeredOpt;
	@ManyToOne
	private Choice correctOpt;
	
	private int answeredIndex;
	
	private int correctIndex;
	
	private boolean answered = false;
	private boolean evaluated = false;
	private boolean valid = false;
	private int questionOrder;
	
	public ParticipantQuestion() {
		super();
		answered = false;
		evaluated = false;
		valid = false;
		questionOrder = 0;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public TestParticipant getTestParticipant() {
		return testParticipant;
	}
	public void setTestParticipant(TestParticipant testParticipant) {
		this.testParticipant = testParticipant;
	}
	public Question getQuestion() {
		return question;
	}
	public void setQuestion(Question question) {
		this.question = question;
	}
	public Choice getAnsweredOpt() {
		return answeredOpt;
	}
	public void setAnsweredOpt(Choice answeredOpt) {
		this.answeredOpt = answeredOpt;
	}
	public Choice getCorrectOpt() {
		return correctOpt;
	}
	public void setCorrectOpt(Choice correctOpt) {
		this.correctOpt = correctOpt;
	}
	public boolean isAnswered() {
		return answered;
	}
	public void setAnswered(boolean answered) {
		this.answered = answered;
	}
	public boolean isEvaluated() {
		return evaluated;
	}
	public void setEvaluated(boolean evaluated) {
		this.evaluated = evaluated;
	}
	public boolean isValid() {
		return valid;
	}
	public void setValid(boolean valid) {
		this.valid = valid;
	}

	public int getQuestionOrder() {
		return questionOrder;
	}

	public void setQuestionOrder(int questionOrder) {
		this.questionOrder = questionOrder;
	}

	public int getAnsweredIndex() {
		return answeredIndex;
	}

	public void setAnsweredIndex(int answeredIndex) {
		this.answeredIndex = answeredIndex;
	}

	public int getCorrectIndex() {
		return correctIndex;
	}

	public void setCorrectIndex(int correctIndex) {
		this.correctIndex = correctIndex;
	}

}
