import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// ES6 Modules or TypeScript




import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

//Servicios
import { ChatComponent } from 'src/app/components/chat/chat.component';
import{RouterModule, Routes } from '@angular/router';
import{HttpClientModule, HttpClient} from '@angular/common/http';



const routes:Routes=[
  {path:'',redirectTo:'/chat',pathMatch:'full'},
  { path: 'chat', component: ChatComponent }


]
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    
  ],
  exports: [
  ],
 
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  
     ],
     
  providers: [
   ],
   
  bootstrap: [AppComponent]
})
export class AppModule { }

