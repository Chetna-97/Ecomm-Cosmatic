import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { images } from './images.model';
import { flatMap, first, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteapiService {
  public data:any = []
  public url ='assets/myproject.json'
  private product$: Observable<images[]>;
  // private baseUrl: string = "http://localhost:4200/product";
  constructor(private http: HttpClient,private _Activatedroute:ActivatedRoute) {
    }
    getProducts() : Observable<images[]> 
    {
        if (!this.product$) 
        {
            this.product$ = this.http.get<images[]>(this.url).pipe(shareReplay());
        }
         // if products cache exists return it
        return this.product$;
    }
    // Get Product by its ID
    getProductById(id: number) : Observable<images> 
    {
        return this.getProducts().pipe(flatMap(result => result),first(product => product.id == id));
    }

   
}