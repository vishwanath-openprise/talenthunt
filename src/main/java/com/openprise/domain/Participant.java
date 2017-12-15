package com.openprise.domain;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Participant {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String name;

    private String email;
    
    private String mobile;
    
    private String password;
    
    private int numberOfSuccessfulLogins = 0;
    
    private int numberOfFailureLogins = 0;
    
    @OneToMany
    private List<TestParticipant> tests;

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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getNumberOfSuccessfulLogins() {
		return numberOfSuccessfulLogins;
	}

	public void setNumberOfSuccessfulLogins(int numberOfSuccessfulLogins) {
		this.numberOfSuccessfulLogins = numberOfSuccessfulLogins;
	}

	public int getNumberOfFailureLogins() {
		return numberOfFailureLogins;
	}

	public void setNumberOfFailureLogins(int numberOfFailureLogins) {
		this.numberOfFailureLogins = numberOfFailureLogins;
	}

	public List<TestParticipant> getTests() {
		return tests;
	}

	public void setTests(List<TestParticipant> tests) {
		this.tests = tests;
	}
	
	@Override
	public Participant clone() throws CloneNotSupportedException {
		
		Participant p = new Participant();
		p.id = this.id;
		p.email = this.email;
		p.mobile = this.mobile;
		p.name = this.name;
		p.numberOfFailureLogins = this.numberOfFailureLogins;
		p.numberOfSuccessfulLogins = this.numberOfSuccessfulLogins;
		
		return p;
	}

}
