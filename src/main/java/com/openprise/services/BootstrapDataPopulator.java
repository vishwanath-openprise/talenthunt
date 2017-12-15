package com.openprise.services;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.openprise.dao.ParticipantRepository;
import com.openprise.dao.ParticipantTestRepository;
import com.openprise.dao.TestRepository;
import com.openprise.domain.Participant;
import com.openprise.domain.TEST_STATUS;
import com.openprise.domain.Test;
import com.openprise.domain.TestParticipant;

@Service
@Transactional
public class BootstrapDataPopulator implements InitializingBean {

	@Autowired
	private TestService testService;
	
	@Autowired
	private TestRepository testRepository;
	
	@Autowired
	private ParticipantRepository participantRepository;
	
	@Autowired
	private ParticipantService participantService;
	
	@Autowired
	private ParticipantTestService participantTestService;
	
	@Autowired
	private ParticipantTestRepository participantTestRepository;
	

	
	@Override
	public void afterPropertiesSet() throws Exception {

		Calendar c = Calendar.getInstance();
		c.set(2017, Calendar.DECEMBER, 31);
		Date endDate = c.getTime();
		
		List<Test> testsForAdmin = new ArrayList();

    		//Create Tests
    		Test test = new Test();
    		test.setName("Sample Test");
    		test.setDescription("An example test.");
    		test.setSelfRegistration(false);
    		test.setStatus(TEST_STATUS.REGISTRATION);
    		test.setValidFrom(new Date());
    		test.setValidTo(endDate);
    		testRepository.save(test);
    		testsForAdmin.add(test);
    		
    		test = new Test();
    		test.setName("Aptitude");
    		test.setDescription("An aptitude test.");
    		test.setSelfRegistration(false);
    		test.setStatus(TEST_STATUS.REGISTRATION);
    		test.setValidFrom(new Date());
    		test.setValidTo(endDate);
    		testRepository.save(test);
    		testsForAdmin.add(test);

    		test = new Test();
    		test.setName("Technical");
    		test.setDescription("Java based technical test.");
    		test.setSelfRegistration(false);
    		test.setStatus(TEST_STATUS.REGISTRATION);
    		test.setValidFrom(new Date());
    		test.setValidTo(endDate);
    		testRepository.save(test);
    		testsForAdmin.add(test);
    		
    		test = new Test();
    		test.setName("Sample Technical");
    		test.setDescription("Java based technical test.");
    		test.setSelfRegistration(false);
    		test.setStatus(TEST_STATUS.COMPLETED);
    		test.setValidFrom(new Date());
    		test.setValidTo(endDate);
    		testRepository.save(test);
    		testsForAdmin.add(test);

    		
    		test = new Test();
    		test.setName("Technical Draft");
    		test.setDescription("Java based technical test.");
    		test.setSelfRegistration(false);
    		test.setStatus(TEST_STATUS.INACTIVE);
    		test.setValidFrom(new Date());
    		test.setValidTo(endDate);
    		testRepository.save(test);
    		testsForAdmin.add(test);
    		
    		// Create participants
    		Participant p = new Participant();
    		p.setEmail("vishwanath.palavajala@openprisetech.com");
    		p.setMobile("999");
    		p.setName("admin");
    		p.setNumberOfFailureLogins(0);
    		p.setNumberOfSuccessfulLogins(0);
    		p.setPassword("Welcome123");
    		participantRepository.save(p);
    		
    		for(Test t: testsForAdmin) {
    			TestParticipant tp = participantTestService.register(t.getId(), p.getId());
    			//TODO
    			tp.setStatus(t.getStatus());
    			participantTestRepository.save(tp);
    		}
    		
    
	}

}
