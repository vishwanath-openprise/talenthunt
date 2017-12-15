package com.openprise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private CustomAuthenticationProvider authProvider;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers("/", "/home", "/resources/**", "/inline.bundle.js").permitAll()
				.antMatchers("/index.html").permitAll()
				.antMatchers("/register.html").permitAll()
				.antMatchers("/participant/register").permitAll()
				.antMatchers("/**.js").permitAll()
				.antMatchers("/*.*.js").permitAll()
				.antMatchers("/*.js").permitAll()
				.antMatchers("/**.css").permitAll()
				.antMatchers("/**.png").permitAll()
				.antMatchers("/**.jpg").permitAll()
				.antMatchers("/**.gif").permitAll()
				.antMatchers("/**.woff2").permitAll()
				.antMatchers("/icon**").permitAll()
				.antMatchers("/css**").permitAll()
				.antMatchers("/**.js.map").permitAll()
				.anyRequest().authenticated()
				.and().csrf().disable()
				.formLogin().loginPage("/login_old").defaultSuccessUrl("/dashboard", true).permitAll().and().logout().permitAll();
		 http.authorizeRequests().antMatchers("/").permitAll();
	}

//	@Override
//	public void configure(WebSecurity web) throws Exception {
//		web.ignoring().antMatchers("/resources/**","/resources/public/**", "/public/**", "/**.js", "/*.js", "/*.*.js", "/inline.bundle.js");
//	}

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(authProvider);
	}
}