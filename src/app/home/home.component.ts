import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imageSources:string[]=['assets/Images/carousel/car-1.jpg',
  'assets/Images/carousel/car-2.jpg',
  'assets/Images/carousel/car-3.jpg',
  'assets/Images/carousel/car-4.jpg',
  'assets/Images/carousel/car-5.jpg',
  'assets/Images/carousel/car-6.jpg',
  'assets/Images/carousel/car-7.jpg',
  'assets/Images/carousel/car-8.jpg',
  'assets/Images/carousel/car-9.jpg',
  'assets/Images/carousel/car-10.jpg',
  ]; 
  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectAdmin()
{
  this.router.navigateByUrl('/admin');
}    


}
