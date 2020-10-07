import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  myimage1:string="assets/images/manicure.jpg";
  myimage2:string="assets/images/manicure_img.jpg";
  myimage3:string="assets/images/manicureimg.jpg";
  myimage4:string="assets/images/marriage makover.jpg";
  myimage5:string="assets/images/hairfront.png";
  myimage6:string="assets/images/bridal_makeup.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
