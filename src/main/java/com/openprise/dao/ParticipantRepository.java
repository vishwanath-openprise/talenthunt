package com.openprise.dao;

import org.springframework.data.repository.CrudRepository;

import com.openprise.domain.Participant;

public interface ParticipantRepository  extends CrudRepository<Participant, Integer> {

	Participant findByPasswordAndEmailOrMobile(String password, String mobile, String email);
	Participant findByMobile(String mobile);
}
