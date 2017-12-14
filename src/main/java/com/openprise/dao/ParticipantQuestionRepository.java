package com.openprise.dao;

import org.springframework.data.repository.CrudRepository;

import com.openprise.domain.ParticipantQuestion;
import com.openprise.domain.Question;

public interface ParticipantQuestionRepository extends CrudRepository<ParticipantQuestion, Long> {

}
