package com.openprise.web.controller;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.openprise.dao.ParticipantRepository;
import com.openprise.domain.Participant;
import com.openprise.services.ParticipantService;

@Controller // This means that this class is a Controller
@RequestMapping(path = "/participant") // This means URL's start with /demo (after Application path)
public class ParticipantController {
	@Autowired
	private ParticipantRepository repository;

	@Autowired
	private ParticipantService service;

	@PostMapping(path = "/register")
	public @ResponseBody String register(@RequestBody Participant participant) {
		repository.save(participant);
		return "Saved";
	}

	@GET
	@Path("/{id}")
	public @ResponseBody Participant getParticipant(@PathParam("id") long id) {
		return repository.findOne(id);
	}

}
