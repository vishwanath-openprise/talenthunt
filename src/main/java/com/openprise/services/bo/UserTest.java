package com.openprise.services.bo;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

import com.openprise.domain.Participant;
import com.openprise.domain.TestParticipant;

@Component
@Scope(value = "session",  proxyMode = ScopedProxyMode.TARGET_CLASS)
public class UserTest {
	
	private Participant user;

	private TestParticipant test;
	
	public void initialize(Participant u) {
		if(user == null) {
			user = u;
			if(u.getTests() != null && u.getTests().size() == 1) {
				test = u.getTests().get(0);
			}
		}
	}

	public TestParticipant getTest() {
		return test;
	}
}
