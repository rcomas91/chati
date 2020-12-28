package com.jummit.chatless.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.info.BuildProperties;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = { "*" })
@RestController
@RequestMapping("/api")
public class PrimerController {

	@Autowired
	BuildProperties buildProperties;

	@GetMapping("/index")
	public String index() {
		String mensaje = "Q bola sere esta es : api.chatless.com/v1 ";
		return mensaje;

	}
}
