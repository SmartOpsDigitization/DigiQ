import { Component, OnInit } from '@angular/core';
import {displayScores, getUserWithNtnet} from '../smm-datastructure'
import { SmmService } from '../smm.service';
import { Router } from '@angular/router';
declare const getntNet: any;
var ntnetvalue:string;



@Component({
  selector: 'app-ssmhome',
  templateUrl: './ssmhome.component.html',
  styleUrls: ['./ssmhome.component.css']
})




export class SsmhomeComponent implements OnInit {
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

  constructor(private router: Router,public _smmservice : SmmService) { }
  header: string = "SmartOps - Service Maturity Model";
  ntnetAttributes : getUserWithNtnet;
  public buttonvar:boolean=true;
  public buttonvar1:boolean=true;
  public buttonvar2:boolean=true;
  role:string;
  ngOnInit() {

    ntnetvalue=getntNet();
 
    this._smmservice.getUserWithNtnet(ntnetvalue).subscribe(data => {
      this.ntnetAttributes = data;
  
  this.role=checkContent(this.ntnetAttributes);
  if(this.role==="spoc")
  {

    this.buttonvar=false;
    this.buttonvar1=false;
    
  }
    else{
      this.buttonvar2=false;
    }
  


console.log('ntnetattributes: ', this.ntnetAttributes); 
});

function checkContent(content : getUserWithNtnet) : string {
if(content.role==="SPOC")
{
  return "spoc";
}

else{
  return "superadminOrAol"
}
}




}




}
