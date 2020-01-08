import { Component, OnInit } from '@angular/core';
import {team} from '../smm-datastructure'
import { SmmService } from '../smm.service'
import { Team } from '../DataStructures';
import swal from 'sweetalert2';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public allteam =['RM/CM','INFRA','DM','SD','RM/CM','INFRA','DM','SD','RM/CM','INFRA','DM','SD'];
  public allprocess = ['A','B','C','D','E','F'];
  teams:team[];
  Teamupdate:team;
  header: string = "Teams";
  popup:boolean=false;
  popupupdate:boolean=false;
  teamname:string;
  teamss = new team();
  public confirmdelete:boolean=false;
  selectedteam: number;
  constructor(public _smmservice : SmmService) { }
  ngOnInit() {
    this._smmservice.getallteam().subscribe(data => this.teams = data)
  }
  openpopup(){
    swal({
      title: 'Team Name',
      input: 'text',
      showCancelButton: true,
      inputValidator: (team) => {
        if (!team) {
          return 'You need to enter Team!'
        }
      }
    }).then((submitText) => {
      if(submitText.value) {
        this.onsubmit(submitText.value);
      }
    });
  }
  onsubmit(teamAdded : string){
    this.teamss.teamName=teamAdded;
    this._smmservice.addteam(this.teamss);
    this.popup=false;
    this.teamname="";
    swal('Team Added Succesfully').then(function() {location.reload()});
  }
  Deleteemployee(){
    this._smmservice.deleteteam(this.selectedteam);
    this.ngOnInit();
    this.confirmdelete=false;
    swal('Team Deleted Succesfully').then(function() {location.reload()});
  }
  onselectdelete(teamid: number) {
    this.selectedteam = teamid;
    swal({
      title: "Are you sure?",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true
    })
      .then((willDelete) => {

        if (willDelete.value) {
          this.Deleteemployee();
          // swal("Deleted Successfully");
          // location.reload();
        } 
      });

  }
  onselect(Teamid : number): void{
    this.selectedteam = Teamid;
    this.confirmdelete=true;
  }





  modifyteamname : string;
  modifyteamid:number;



  onselectmodify(teamname:string,teamid:number){
    this.modifyteamname = teamname;
    this.modifyteamid = teamid;
    swal({
      title: 'Team Name',
      input : 'text',
      inputValue: teamname,
      showCancelButton: true,
      inputValidator: (team) => {
        if (!team) {
          return 'You need to enter team!'
        }
      }
    }).then((submitText) => {
      if(submitText.value) {
        this.onupdate(submitText.value);
      }
    });
  }
  onupdate(modify : string){
    this.teamss.teamId=this.modifyteamid;
    //this.teamss.teamName=this.modifyteamname;
    this.teamss.teamName=modify;
    this._smmservice.modifyteam(this.teamss);
    this.popupupdate=false;
    swal('Update Successfully').then(function() {location.reload()});
  }
}