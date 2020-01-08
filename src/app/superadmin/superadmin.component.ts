import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
// import { flatten } from '@angular/router';


@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {
  header:string = "Super Admin";
  public paths: string = "Super Admin"; 
  navLinks: any[];
  public processview:boolean=true;
  public teamview:boolean=false;
  public questionview:boolean=false;
  public addquestionview:boolean=false;
  public addchecklistview:Boolean=false;
  public addqe:boolean = false;
  public processteammap:boolean=false;

 
  title = 'angular-material-tab-router';  
  activeLinkIndex = -1; 
  constructor(private router: Router) { 
    this.navLinks = [
      {
          label: 'Process',
          link: './process',
          index: 0 
      }, {
          label: 'Team',
          link: './team',
          index: 1
      }, {
          label: 'Question',
          link: './question',
          index: 2
      }, 
  ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }

  processbutton(){
    this.processview=true;
    this.teamview=false;
    this.questionview=false;
    this.addquestionview=false;
    this.addchecklistview=false;
    this.addqe = false;
    this.processteammap=false;
  }

  teambutton(){
    this.processview=false;
    this.teamview=true;
    this.questionview=false;
    this.addchecklistview=false;
    this.addquestionview=false;
    this.addqe = false;
    this.processteammap=false;
  }
  processteambutton(){
    this.processview=false;
    this.teamview=false;
    this.questionview=false;
    this.addchecklistview=false;
    this.addquestionview=false;
    this.addqe = false;
    this.processteammap=true;
    

  }

  questionbutton(){
    this.processview=false;
    this.teamview=false;
    this.questionview=true;
    this.addquestionview=false;
    this.addchecklistview=false;
    this.addqe = false;
    this.processteammap=false;
  }
  qebutton(){
    this.processview=false;
    this.teamview=false;
    this.questionview=false;
    this.addquestionview=false;
    this.addchecklistview=false;
    this.addqe = true;
    this.processteammap=false;

  }

  addquestionbutton(){
    this.processview=false;
    this.teamview=false;
    this.questionview=false;
    this.addquestionview=true;
    this.addchecklistview=false;
    this.addqe = false;
    this.processteammap=false;
  }

  addchecklistbutton(){
    this.processview=false;
    this.teamview=false;
    this.questionview=false;
    this.addquestionview=false;
    this.addchecklistview=true;
    this.addqe = false;
    
  }

}
