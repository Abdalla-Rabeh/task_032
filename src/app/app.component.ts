import { Component } from '@angular/core';
import {FormControl} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-app';
  fullName = new FormControl()
  fristName : string = "Abdallah"
  result(){
    
    console.log(this.fullName)
  }
  
}
