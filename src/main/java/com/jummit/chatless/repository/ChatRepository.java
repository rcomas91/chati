package com.jummit.chatless.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import model.Mensaje;


public interface ChatRepository extends MongoRepository<Mensaje, String>{
	
    public List<Mensaje> findFirst10ByOrderByFechaDesc();
}
