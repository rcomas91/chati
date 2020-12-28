import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { VERSION } from 'src/environments/version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Chati';
  version=VERSION.version;
  hash=VERSION.hash;
  hashes: '${gitHash}';
  built: '${buildHash}';

  
  constructor()
  {
 
     
    
  }
}
