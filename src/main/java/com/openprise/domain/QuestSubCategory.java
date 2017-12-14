package com.openprise.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class QuestSubCategory {

	@Id
	private String name;

	@ManyToOne
	private QuestCategory category;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public QuestCategory getCategory() {
		return category;
	}

	public void setCategory(QuestCategory category) {
		this.category = category;
	}
}
