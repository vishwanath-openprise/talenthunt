package com.openprise.dao;

import org.springframework.data.repository.CrudRepository;

import com.openprise.domain.ParticipantQuestion;
import com.openprise.domain.TestParticipant;


public interface ParticipantQuestionRepository extends CrudRepository<ParticipantQuestion, Integer> {
	
	ParticipantQuestion findByTestParticipantAndQuestionOrder(TestParticipant testParticipant, int order);
	
	ParticipantQuestion findByTestParticipantAndQuestionOrderGreaterThanAndAnsweredNot(TestParticipant testParticipant, int order, boolean answered);
	
	ParticipantQuestion findByTestParticipantAndQuestionOrderLessThanAndAnsweredNot(TestParticipant testParticipant, int order, boolean answered);

}
