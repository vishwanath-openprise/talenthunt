package com.openprise.domain;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
public class Question {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String questionAsString;
	@ManyToMany
	private List<QuestCategory> category;
	@ManyToMany
	private List<QuestSubCategory> subCategory;
	private DIFFICULTY_LEVEL level = DIFFICULTY_LEVEL.BEGINNER;

	@OneToMany
	private List<Choice> options;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getQuestionAsString() {
		return questionAsString;
	}

	public void setQuestionAsString(String questionAsString) {
		this.questionAsString = questionAsString;
	}

	public List<QuestCategory> getCategory() {
		return category;
	}

	public void setCategory(List<QuestCategory> category) {
		this.category = category;
	}

	public List<QuestSubCategory> getSubCategory() {
		return subCategory;
	}

	public void setSubCategory(List<QuestSubCategory> subCategory) {
		this.subCategory = subCategory;
	}

	public DIFFICULTY_LEVEL getLevel() {
		return level;
	}

	public void setLevel(DIFFICULTY_LEVEL level) {
		this.level = level;
	}

	public List<Choice> getOptions() {
		return options;
	}

	public void setOptions(List<Choice> options) {
		this.options = options;
	}

}
