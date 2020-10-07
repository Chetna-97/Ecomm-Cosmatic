import { Component, OnInit } from '@angular/core';
import { NoteapiService } from './noteapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myProject';
  constructor(private serObj:NoteapiService){}
ngOnInit()
{
  

}
}
