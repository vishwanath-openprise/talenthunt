package com.openprise.domain;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
public class Test {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

	private String name;
	private long duration;
	private Date validFrom;
	private Date validTo;
	private TEST_STATUS status;
	private boolean selfRegistration;
	@ManyToMany
	private List<Question> questions;
	
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

}
