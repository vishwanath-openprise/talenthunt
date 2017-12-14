package com.openprise.dao;

import org.springframework.data.repository.CrudRepository;

import com.openprise.domain.ParticipantQuestion;

public interface ParticipantQuestionRepository extends CrudRepository<ParticipantQuestion, Long> {
	
	ParticipantQuestion findByTestParticipantAndOrder(long testParticipantId, int order);
	
	ParticipantQuestion findByTestParticipantAndOrderGreaterThanAndAnsweredNot(long testParticipantId, int order);
	
	ParticipantQuestion findByTestParticipantAndOrderLessThanAndAnsweredNot(long testParticipantId, int order);

}
