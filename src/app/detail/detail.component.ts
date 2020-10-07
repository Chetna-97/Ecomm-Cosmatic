import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import{ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { images } from '../images.model';
import { NoteapiService } from '../noteapi.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() product : images;
  public data:any = []
  constructor(private http: HttpClient,private route:Router,
    private _Activatedroute:ActivatedRoute,private _noteapiService:NoteapiService) {
   }
  ngOnInit() {
    var id= + this._Activatedroute.snapshot.paramMap.get("id");
    console.log(id);
    this.data=this._noteapiService.getProductById(id).subscribe(result => this.product = result);
  }
}
