package com.openprise.dao;

import org.springframework.data.repository.CrudRepository;

import com.openprise.domain.Participant;

public interface ParticipantRepository  extends CrudRepository<Participant, Integer> {

	Participant findByPasswordAndMobile(String password, String mobile);
	Participant findByPasswordAndEmail(String password, String email);
	Participant findByMobile(String mobile);
}
