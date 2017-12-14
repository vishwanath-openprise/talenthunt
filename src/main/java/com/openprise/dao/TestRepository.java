package com.openprise.dao;

import org.springframework.data.repository.CrudRepository;

import com.openprise.domain.Test;

public interface TestRepository  extends CrudRepository<Test, Long> {

}
