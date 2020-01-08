import { Component, OnInit } from '@angular/core';
import { SmmService } from '../smm.service';
import {Router} from '@angular/router';
import { processteammap,process, team,process1 } from '../smm-datastructure';
@Component({
  selector: 'app-processteammap',
  templateUrl: './processteammap.component.html',
  styleUrls: ['./processteammap.component.css']
})
export class ProcessteammapComponent implements OnInit {
  constructor(public _smmservice : SmmService,private router: Router) { }
  allProcessTeamMapping:processteammap;
  deleteTeamProcessMapping : processteammap = { process: [] };
  tmp =new process();
  tmp2=new process1();
  header: string = "processteammap";
  allprocess : process1;
  popup:boolean=false;
  saveTeamProcessMapping : processteammap= { process: [] };
  selectedProcess:any;
  ngOnInit() {  
   
    this._smmservice.getAllProcessTeamMapping().subscribe(data => {
      this.allProcessTeamMapping = data;
    });
    this._smmservice.getallprocess().subscribe(data => {
      this.allprocess = data;
    });
  }
  expand()
  {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") 
        {
          content.style.display = "none";
        } 
        else 
        {
          content.style.display = "block";
        }
        });
    }
  }
  onselectdelete(teamId,processId)
  {
    this.deleteTeamProcessMapping.teamId=teamId;
    this.tmp.processId=processId;
    this.deleteTeamProcessMapping.process.push(this.tmp);
    this._smmservice.deleteTeamProcessMapping(this.deleteTeamProcessMapping);
    location.reload();
  }
  openpopup(teamId){
    this.popup=true;
    this.saveTeamProcessMapping.teamId=teamId;
  }
  closepopup(){
    this.popup=false;
  }
  onProcessSelect()
  {
    this.tmp2.processId=this.selectedProcess;
    this.saveTeamProcessMapping.process.push(this.tmp2);
  }
  onSaveTeamProcessMapping()
  {
    this._smmservice.saveTeamProcessMapping(this.saveTeamProcessMapping);
    location.reload();
  }
}