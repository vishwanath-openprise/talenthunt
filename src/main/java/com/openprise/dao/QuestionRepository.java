package com.openprise.dao;

import org.springframework.data.repository.CrudRepository;

import com.openprise.domain.Question;

public interface QuestionRepository  extends CrudRepository<Question, Integer> {

}
