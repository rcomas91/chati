import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


//Sockjs
import {Client, Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import sweetalert2 from 'sweetalert2';
import { Mensaje } from 'src/app/components/chat/mensaje';

// CommonJS
const Swal = require('sweetalert2')

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})



export class ChatComponent implements OnInit {
  clienteId :string;
  conectado:boolean=false;
  private client:Client;
  mensaje:Mensaje=new Mensaje();
  mensajes:Mensaje[]=[];
  escribiendo:string;
 

  constructor(private sanitizer: DomSanitizer) {
    this.clienteId='id-' + new Date().getUTCMilliseconds()+ '-' + Math.random().toString(36).substr(2);

      console.log(this.clienteId);
    
  }
     
        
  

  ngOnInit() {

    this.client = new Client();
    this.client.webSocketFactory = () => {
      return new SockJS("http://localhost:8080/wss");
    }

    this.client.onConnect = (frame) => {
      console.log('Conectados: ' + this.client.connected + ' : ' + frame);
      this.conectado = true;

      this.client.subscribe('/chat/mensaje', e => {
        let mensaje: Mensaje = JSON.parse(e.body) as Mensaje;
        mensaje.fecha = new Date(mensaje.fecha);
      
       


        if (!this.mensaje.color && mensaje.tipo == 'NUEVO_USUARIO' &&
          this.mensaje.username == mensaje.username) {
          this.mensaje.color = mensaje.color;
        }

        this.mensajes.push(mensaje);
        console.log(mensaje);
      });

      this.client.subscribe('/chat/escribiendo', e => {
        this.escribiendo = e.body;
        setTimeout(() => this.escribiendo = '', 3000)

      });
       console.log(this.clienteId);
       this.client.subscribe('/chat/historial/' + this.clienteId, e => {
         const historial = JSON.parse(e.body) as Mensaje[];
         this.mensajes = historial.map(m => {
           m.fecha = new Date(m.fecha);
           return m;
         }).reverse();
       });

       this.client.publish({ destination: '/app/historial', body: this.clienteId });


    

      this.mensaje.tipo = 'NUEVO_USUARIO';
      this.client.publish({ destination: '/app/mensaje', body: JSON.stringify(this.mensaje) });
    }

    this.client.onDisconnect = (frame) => {
      console.log('Desconectados: ' + !this.client.connected + ' : ' + frame);
      this.conectado = false;
      this.mensaje = new Mensaje();
      this.mensajes = [];
    }
}
    

   
  conectar(): void {
    this.client.activate();
  }

  desconectar(): void {
    this.client.deactivate();
  }

  
  enviarMensaje(): void {
    this.mensaje.tipo = 'MENSAJE';
    this.client.publish({ destination: '/app/mensaje', body: JSON.stringify(this.mensaje) });
    this.mensaje.texto = '';
  }

  escribiendoEvento(): void {
    this.client.publish({ destination: '/app/escribiendo', body: this.mensaje.username });
  }
   


  }

