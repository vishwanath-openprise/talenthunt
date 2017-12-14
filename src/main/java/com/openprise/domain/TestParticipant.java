package com.openprise.domain;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class TestParticipant {

	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
	
	@ManyToOne
	private Test test;
	@ManyToOne
	private Participant participant;
	private Date startDate;
	private Date endDate;
	private TEST_STATUS status;
	@OneToMany
	private List<ParticipantQuestion> questions;
	private int questionIndex;
	private Date lastUpdated;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Test getTest() {
		return test;
	}
	public void setTest(Test test) {
		this.test = test;
	}
	public Participant getParticipant() {
		return participant;
	}
	public void setParticipant(Participant participant) {
		this.participant = participant;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public TEST_STATUS getStatus() {
		return status;
	}
	public void setStatus(TEST_STATUS status) {
		this.status = status;
	}
	public List<ParticipantQuestion> getQuestions() {
		return questions;
	}
	public void setQuestions(List<ParticipantQuestion> questions) {
		this.questions = questions;
	}
	public int getQuestionIndex() {
		return questionIndex;
	}
	public void setQuestionIndex(int questionIndex) {
		this.questionIndex = questionIndex;
	}
	public Date getLastUpdated() {
		return lastUpdated;
	}
	public void setLastUpdated(Date lastUpdated) {
		this.lastUpdated = lastUpdated;
	}
}
