package com.openprise.web.controller;

import javax.inject.Inject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.openprise.dao.ParticipantRepository;
import com.openprise.domain.Participant;
import com.openprise.services.ParticipantService;
import com.openprise.services.bo.UserTest;



@Controller    // This means that this class is a Controller
@RequestMapping(path="/init") // This means URL's start with /demo (after Application path)
public class MainController {
	@Autowired // This means to get the bean called userRepository
	           // Which is auto-generated by Spring, we will use it to handle the data
	private ParticipantRepository repository;

	@Autowired
	private ParticipantService service;
	
	@Inject
	private UserTest userTest;
	
	@GetMapping(path="/dashboard")
	public @ResponseBody Participant dashBoard(long id){
		Participant p = repository.findOne(id);
		userTest.initialize(p);
		Participant pClone = null;
		try {
			pClone = p.clone();
		} catch (CloneNotSupportedException e) {
			e.printStackTrace();
		}
		return pClone;
	}
	
}

//@Controller    // This means that this class is a Controller
//@RequestMapping(path="/demo") // This means URL's start with /demo (after Application path)
//public class MainController {
//	@Autowired // This means to get the bean called userRepository
//	           // Which is auto-generated by Spring, we will use it to handle the data
//	private UserRepository userRepository;
//
//	@Autowired
//	private UserService service;
//	
//	@GetMapping(path="/add") // Map ONLY GET Requests
//	public @ResponseBody String addNewUser (@RequestParam String name
//			, @RequestParam String email) {
//		// @ResponseBody means the returned String is the response, not a view name
//		// @RequestParam means it is a parameter from the GET or POST request
//
//		User n = new User();
//		n.setName(name);
//		n.setEmail(email);
//		service.saveSomething(n);
//		return "Saved";
//	}
//	
//	@GetMapping(path="/all")
//	public @ResponseBody Iterable<User> getAllUsers() {
//		// This returns a JSON or XML with the users
//		return userRepository.findAll();
//	}
//}