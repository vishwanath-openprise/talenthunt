package com.openprise.dao;

import org.springframework.data.repository.CrudRepository;

import com.openprise.domain.Participant;

public interface ParticipantRepository  extends CrudRepository<Participant, Integer> {

	Participant findByMobileAndPassword(String mobile, String password);
	Participant findByMobile(String mobile);
}
