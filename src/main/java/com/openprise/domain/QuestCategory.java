package com.openprise.domain;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class QuestCategory {

	@Id
	private String name;
	@OneToMany
	private List<QuestSubCategory> subCategories;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<QuestSubCategory> getSubCategories() {
		return subCategories;
	}
	public void setSubCategories(List<QuestSubCategory> subCategories) {
		this.subCategories = subCategories;
	}
	
}
