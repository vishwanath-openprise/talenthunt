package com.openprise.dao;

import org.springframework.data.repository.CrudRepository;

import com.openprise.domain.TestParticipant;

public interface ParticipantTestRepository  extends CrudRepository<TestParticipant, Long> {

}
