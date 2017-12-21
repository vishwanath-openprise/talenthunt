package com.openprise;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import com.openprise.dao.ParticipantRepository;
import com.openprise.domain.Participant;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

	@Autowired
	private ParticipantRepository repository;

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {

		String name = authentication.getName();
		String password = authentication.getCredentials().toString();

		Participant p = repository.findByPasswordAndEmail(password, name);

		if (p != null) {
			// use the credentials
			// and authenticate against the third-party system
			return new UsernamePasswordAuthenticationToken(name, password, new ArrayList<>());
		} else {
			p = repository.findByPasswordAndMobile(password, name);
			if (p != null) {
				return new UsernamePasswordAuthenticationToken(name, password, new ArrayList<>());
			} else {
				return null;
			}
		}
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}

}
