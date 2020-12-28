package com.jummit.chatless.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jummit.chatless.repository.ChatRepository;

import model.Mensaje;


@Service
public class ChatServiceImpl implements ChatService{
	
	@Autowired
	private ChatRepository chatDao;

	@Override
	public List<Mensaje> obtenerUltimos10Mensajes() {
		return chatDao.findFirst10ByOrderByFechaDesc();
	}

	@Override
	public Mensaje guardar(Mensaje mensaje) {
		return chatDao.save(mensaje);
	}

}
