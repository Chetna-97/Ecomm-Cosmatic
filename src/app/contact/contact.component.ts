import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myloc:string="https://tse1.mm.bing.net/th?id=OIP.eSHch63QEHaGGTyk5P9ZOQHaD4&pid=Api&P=0&w=318&h=168";
  constructor() { }

  ngOnInit(): void {
  }

}
