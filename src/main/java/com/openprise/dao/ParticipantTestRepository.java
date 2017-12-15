package com.openprise.dao;

import java.util.Collection;

import org.springframework.data.repository.CrudRepository;

import com.openprise.domain.Test;
import com.openprise.domain.TestParticipant;

public interface ParticipantTestRepository  extends CrudRepository<TestParticipant, Integer> {
	
	Collection<TestParticipant> findByTest(Test test);

}
