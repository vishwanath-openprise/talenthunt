package com.openprise.web.controller;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.openprise.dao.TestRepository;
import com.openprise.domain.Choice;
import com.openprise.domain.Question;
import com.openprise.domain.Test;
import com.openprise.services.QuestionService;
import com.openprise.services.TestService;

@Controller    // This means that this class is a Controller
@RequestMapping(path="/testmanagement") // This means URL's start with /demo (after Application path)
//@Path("/test")
public class TestManagementController {
	@Autowired // This means to get the bean called userRepository
	           // Which is auto-generated by Spring, we will use it to handle the data
	private TestRepository repository;

	@Autowired
	private TestService service;
	
	@PostMapping(path="/add") // Map ONLY GET Requests
	public @ResponseBody String addNewTest (@RequestBody Test test) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request
		repository.save(test);
		return "Saved";
	}
	
	@GetMapping(path="/all")
	public @ResponseBody Iterable<Test> getAllTests() {
		Iterable<Test> tests = repository.findAll();
		tests.forEach(it -> {
			it.setNoOfQuestions(it.getQuestions().size());
			it.setQuestions(null);
		});
		return tests;
	}
	
	@GET
	@Path("/test/{id}")
	public @ResponseBody Test getTest(@PathParam("id") int id) {
		return repository.findOne(id);
	}
	
	@POST
	@Path("/{id}/addQuestion")
	public @ResponseBody Question addQuestion(@PathParam("id") int id, @RequestBody Question question) {
		return service.addQuestion(id, question);
	}
	
	@POST
	@Path("/{qid}/addChoice")
	public @ResponseBody Question addChoice(@PathParam("id") int id, @RequestBody Choice choice) {
		return service.addOption(id, choice);
	}
	
	@POST
	@Path("/{qid}/addChoices")
	public @ResponseBody Question addChoice(@PathParam("id") int id, @RequestBody Choice[] choices) {
		return service.addOptions(id, choices);
	}
	

	@DELETE
	@Path("/{id}/{qId}")
	public @ResponseBody String deleteQuestion(@PathParam("id") int id, @PathParam("qId") int qId) {
		service.removeQuestion(id, qId);
		return "DONE";
	}

	
}
