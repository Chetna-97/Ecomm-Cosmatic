import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mylogo1:string="https://pbs.twimg.com/profile_images/1669199361/LOGO-NAILS.png";
  mylogo2:string="https://image.shutterstock.com/image-photo/beautiful-model-girl-shiny-brown-260nw-758805691.jpg";
  mylogo3:string="https://www.wallpapersin4k.org/wp-content/uploads/2017/04/Indian-Bridal-Makeup-Wallpapers-16.jpg";

  myimage1:string="https://th.bing.com/th/id/OIP.VfsYTFSK1S5gtcp2K5abAgHaH0?pid=Api&rs=1";
  myimage2:string="https://i.ytimg.com/vi/4ArmmMAOaNA/maxresdefault.jpg";
  myimage3:string="https://tse1.mm.bing.net/th?id=OIP.qmiMKlIOUasOE8LYxgVHcwHaHa&pid=Api&P=0&w=300&h=300";
  title = 'image-gallery';
  public data:any = []
  constructor(private http: HttpClient,private router:Router) {
   const url ='assets/myproject.json'
   this.http.get(url).subscribe((res)=>{
     this.data = res
   })
  }

  // constructor(private router:Router) { }
// goToPage(pageName:string):void{
//   this.router.navigate([`${pageName}`]);
// }
  ngOnInit(): void {
  }

}
