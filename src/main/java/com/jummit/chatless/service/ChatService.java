package com.jummit.chatless.service;

import java.util.List;

import model.Mensaje;


public interface ChatService {

	public List<Mensaje> obtenerUltimos10Mensajes();
	public Mensaje guardar(Mensaje mensaje);
}
