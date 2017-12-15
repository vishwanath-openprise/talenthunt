package com.openprise.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Test {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

	private String name;
	private String description = "Test description here!";
	private long duration = 30;
	private Date validFrom = new Date();
	private Date validTo;
	private TEST_STATUS status = TEST_STATUS.PLANNED;
	private boolean selfRegistration = true;
	@ManyToMany
	private List<Question> questions = new ArrayList<Question>();
	private transient int noOfQuestions = 10; 
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getDuration() {
		return duration;
	}
	public void setDuration(long duration) {
		this.duration = duration;
	}
	public Date getValidFrom() {
		return validFrom;
	}
	public void setValidFrom(Date validFrom) {
		this.validFrom = validFrom;
	}
	public Date getValidTo() {
		return validTo;
	}
	public void setValidTo(Date validTo) {
		this.validTo = validTo;
	}
	public TEST_STATUS getStatus() {
		return status;
	}
	public void setStatus(TEST_STATUS status) {
		this.status = status;
	}
	public boolean isSelfRegistration() {
		return selfRegistration;
	}
	public void setSelfRegistration(boolean selfRegistration) {
		this.selfRegistration = selfRegistration;
	}
	public List<Question> getQuestions() {
		return questions;
	}
	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}
	public int getNoOfQuestions() {
		return noOfQuestions;
	}
	public void setNoOfQuestions(int noOfQuestions) {
		this.noOfQuestions = noOfQuestions;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

}
