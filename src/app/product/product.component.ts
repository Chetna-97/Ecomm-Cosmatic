import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { images } from '../images.model';
import { NoteapiService } from '../noteapi.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = 'image-gallery';
    public data:any = []
    selectedProduct : images;
    products$ : Observable<images[]>;
    products : images[] = [];
 constructor(private http: HttpClient,private router:Router,private _noteapiService:NoteapiService) {
  const url ='assets/myproject.json'
  this.http.get(url).subscribe((res)=>{
    this.data = res
  })
  // this.products$ = this._noteapiService.getProducts();
  // this.products$.subscribe(result => { 
  //     this.products = result; 
  // });

 }
 onSelect(product: images) : void 
    {
        this.selectedProduct = product;
       this.router.navigateByUrl("/detail/" + product.id);
    }

 ngOnInit(): void {
  // const url ='assets/myproject.json'
  // this.products$ = this._noteapiService.getProducts();
    }
    

}
