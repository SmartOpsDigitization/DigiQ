// import { Component, OnInit, Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import * as $ from 'jquery';
// import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
// import { Observable, of } from 'rxjs';
// import { map, startWith, switchMap, debounceTime, pairwise, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';
// import { NtnetdataService } from '../ntnetdata.service';
// import { Router } from '@angular/router';
// import { accountsetup, team, submitsmmprocessselection, accountteammapping, teamsaveaccount, getaccountname, getallaols, teamprocessmappingforSSM, processteammap, process, process1, submitSmmAccountSetup } from '../smm-datastructure'
// import { SmmService } from '../smm.service'
// import { element } from 'protractor';
// import { Validators } from '@angular/forms';
// import swal from 'sweetalert2';
// import { ProcessteammapComponent } from '../processteammap/processteammap.component';
// import { MatSnackBar } from '@angular/material';
// @Component({
//   selector: 'app-smm-process-selection',
//   templateUrl: './smm-process-selection.component.html',
//   styleUrls: ['./smm-process-selection.component.css']
// })
// export class SmmProcessSelectionComponent implements OnInit {
//   myControl = new FormControl();
//   model: any;
//   popup: boolean = false;
//   header: string = 'SMM Process Selection';
//   public hidden: boolean = false;
//   teams: team[];
//   public var1: String;
//   teamId: any;
//   aolnames: getallaols[]; //Adya
//   accountNamesForSelectedAol: getaccountname[] //Adya
//   getallaccountsobj: getaccountname[];
//   aolselected: string;
//   getaccountsforaolarray: accountteammapping[];
//   tempobj: accountteammapping = { teams: [] };
//   tempobj2: accountteammapping = { teams: [] };
//   tempobj3: accountteammapping = { teams: [] };
//   tempobj4 = new accountteammapping();
//   submitobject: submitSmmAccountSetup = { teams: [] };
//   tempteamsobj: teamprocessmappingforSSM[];
//   enteredEmail: string = '';
//   emailId = new FormControl();
//   emailFieldInput: Observable<any> = new Observable;
//   selectedTeam: any;
//   selectedProcess: any;
//   tmp2 = new process1();
//   tmp1 = new process1();
//   allprocess: process1;
//   saveTeamProcessMapping: processteammap = { process: [] };
//   popUp: false;
//   submitSmmProcessSelectionResponse: boolean = true;
//   accountData: any[];
//   aolTeamsArray: teamprocessmappingforSSM[];
//   teamProcessArray: process[];
//   canAddTeam: boolean = false;
//   addProcessToTeamBool: boolean = false;
//   addProcessToTeamId;
//   presentVal: any[] = [];
//   results: any[] = [];
//   chngeKey: any;
//   getAccountTeamMappingByAccountIdArray: accountteammapping = { teams: [] };
//   allProcessTeamMapping: processteammap;
//   deleteTeamProcessMapping: processteammap = { process: [] };
//   tmp = new process();
//   spocemail: string;
//   constructor(private http: HttpClient, private router: Router, public _smmservice: SmmService, private formBuilder: FormBuilder, public _snackBar: MatSnackBar) { }
//   myForm: FormGroup = this.formBuilder.group({ emailId: this.emailId });
//   ngOnInit() {
//     this._smmservice.getallteam().subscribe(data => this.teams = data)
//     this._smmservice.getallaols().subscribe(data => this.aolnames = data)
//     this._smmservice.getAllProcessTeamMapping().subscribe(data => {
//       this.allProcessTeamMapping = data;
//     });
//     this._smmservice.getallprocess().subscribe(data => {
//       this.allprocess = data;
//     });
//   }
//   onaolselect(aolselectedvar: string) {
//     this.aolselected = aolselectedvar;
//     this._smmservice.getaccountsforaol(this.aolselected).subscribe(data => {
//       this.getaccountsforaolarray = data
//     });
//   }
//   onaccountSelect(accountidvar: any) {
//     this.submitobject.accountId = accountidvar;
//     this.tempobj.accountId = accountidvar;
//     this._smmservice.getAccountTeamMappingByAccountId(accountidvar).
//       subscribe(data => {
//         this.getAccountTeamMappingByAccountIdArray = data;
//         this.aolTeamsArray = data[0].teams;
//         this.tempteamsobj = this.aolTeamsArray;
//         this.canAddTeam = true;
//       });
//   }

//   trackByItems(index, item): number {
//     return item;
//   }
//   onTeamSubmit() {
//     this._snackBar.open("TEAM ADDED SUCCESSFULLY")._dismissAfter(8000);
//     var tempTeam = new teamsaveaccount();
//     tempTeam.teamId = this.selectedTeam.teamId;
//     this.tempobj3.teams.length = 0;
//     this.tempobj3.teams.push(tempTeam);
//     this.tempobj3.accountId = this.tempobj.accountId;
//     this._smmservice.submitsmmprocessselection2(this.tempobj3).subscribe(
//       (data) => {
//         this.submitSmmProcessSelectionResponse = data;
//       });
//     this.onaolselect(this.aolselected);
//     this.onaccountSelect(this.tempobj.accountId);
//     this.popup = false;
//   }
//   teamChecked(e: Event, teamName: string) {
//     const checkbox = e.target as HTMLInputElement;
//     if (checkbox.checked) {
//       document.getElementById("txtReason" + teamName).style.visibility = "hidden";
//       document.getElementById("txtSPOC" + teamName).style.visibility = "visible";
//     } else {
//       document.getElementById("txtReason" + teamName).style.visibility = "visible";
//       document.getElementById("txtSPOC" + teamName).style.visibility = "hidden";
//     }
//   }
//   onSubmit() {
//     this._smmservice.submitsmmprocessselection(this.submitobject);
//     location.reload();
//   }
//   addProcessToTeam(teamId: number) {
//     this.addProcessToTeamId = teamId
//     this.addProcessToTeamBool = true;
//   }
//   closeAddProcessToTeam() {
//     this.addProcessToTeamBool = false;
//   }
//   onProcessSelect() {
//     this.tmp2.processId = this.selectedProcess;
//     this.saveTeamProcessMapping.teamId = this.selectedTeam.teamId;
//     this.saveTeamProcessMapping.process.push(this.tmp2);
//     this._smmservice.saveTeamProcessMapping(this.saveTeamProcessMapping);
//   }
//   mapTeamProcess(processId) {
//     this.tmp1.processId = processId;
//   }
//   mapTeamProcessSubmit(processId) {
//     this.saveTeamProcessMapping.teamId = this.addProcessToTeamId;
//     this.saveTeamProcessMapping.process.push(this.tmp1);
//     this._smmservice.saveTeamProcessMapping(this.saveTeamProcessMapping);
//     this.addProcessToTeamBool = false;
//     this.onaolselect(this.aolselected);
//     this.onaccountSelect(this.tempobj.accountId);
//   }
//   saveEntry(teamid: number, e: Event, textValue: string) {
//     var mytempteam = new teamprocessmappingforSSM();
//     mytempteam.teamId = teamid;
//     mytempteam.reason = textValue;
//     this.submitobject.teams.push(mytempteam);
//   }
//   errorMessage: string;
//   keyup($e, event: string) {
//     let presentKey = $e.target.value;
//     if (event && event.trim().length >= 3 && this.chngeKey !== presentKey) {
//       this.emailFieldInput = of(event);
//       this.emailFieldInput.pipe(
//         distinctUntilKeyChanged('value'),
//         debounceTime(200),
//         switchMap(query => this._smmservice.getEmails(query))
//       ).subscribe(results => {
//         this.presentVal = [...results];
//       });
//       this.chngeKey = presentKey;
//     }
//   }
//   saveemail(teamid: number, email: string) {
//     var mytempteam = new teamprocessmappingforSSM();
//     mytempteam.teamId = teamid;
//     mytempteam.spoc = email;
//     this.submitobject.teams.push(mytempteam);
//   }
//   openpopup() {
//     this.popup = true;
//   }
//   closepopup() {
//     this.popup = false;
//   }
//   onselectdelete(teamId, processId) {
//     this.deleteTeamProcessMapping.teamId = teamId;
//     this.tmp.processId = processId;
//     this.deleteTeamProcessMapping.process.push(this.tmp);
//     this._smmservice.deleteTeamProcessMapping(this.deleteTeamProcessMapping);
//     this.onaolselect(this.aolselected);
//     this.onaccountSelect(this.tempobj.accountId);
//   }
//   openpopupforteamprocess(teamId) {
//     this.popup = true;
//   }
// }

// =================================================================================================================================================

// SAI WORKING CODE 12-18====================================================
// =======================================================================================================================================

import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith, switchMap, debounceTime, pairwise, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';
import { NtnetdataService } from '../ntnetdata.service';
import { Router } from '@angular/router';
import { accountsetup, team, submitsmmprocessselection, accountteammapping, teamsaveaccount, getaccountname, getallaols, teamprocessmappingforSSM, processteammap, process, process1, submitSmmAccountSetup } from '../smm-datastructure'
import { SmmService } from '../smm.service'
import { element } from 'protractor';
import { Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { ProcessteammapComponent } from '../processteammap/processteammap.component';
import { MatSnackBar } from '@angular/material';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'; 
@Component({
  selector: 'app-smm-process-selection',
  templateUrl: './smm-process-selection.component.html',
  styleUrls: ['./smm-process-selection.component.css']
})
export class SmmProcessSelectionComponent implements OnInit {
  myControl = new FormControl();
  model: any;
  popup: boolean = false;
  header: string = 'SMM Process Selection';
  public hidden: boolean = false;
  teams: team[];
  public var1: String;
  teamId: any;
  aolnames: getallaols[]; //Adya
  accountNamesForSelectedAol: getaccountname[] //Adya
  getallaccountsobj: getaccountname[];
  aolselected: string;
  getaccountsforaolarray: accountteammapping[];
  tempobj: accountteammapping = { teams: [] };
  tempobj2: accountteammapping = { teams: [] };
  tempobj3: accountteammapping = { teams: [] };
  tempobj4 = new accountteammapping();
  submitobject: submitSmmAccountSetup = { teams: [] };
  tempteamsobj: teamprocessmappingforSSM[];
  enteredEmail: string = '';
  emailId = new FormControl();
  emailFieldInput: Observable<any> = new Observable;
  selectedTeam: any;
  selectedProcess: any;
  tmp2 = new process1();
  tmp1 = new process1();
  allprocess: process1;
  saveTeamProcessMapping: processteammap = { process: [] };
  popUp: false;
  submitSmmProcessSelectionResponse: boolean = true;
  accountData: any[];
  aolTeamsArray: teamprocessmappingforSSM[];
  teamProcessArray: process[];
  canAddTeam: boolean = false;
  addProcessToTeamBool: boolean = false;
  addProcessToTeamId;
  presentVal: any[] = [];
  results: any[] = [];
  chngeKey: any;
  getAccountTeamMappingByAccountIdArray: accountteammapping = { teams: [] };
  allProcessTeamMapping: processteammap;
  deleteTeamProcessMapping: processteammap = { process: [] };
  tmp = new process();
  display='none';
  spocemail: string;
  accounIdForDelete:number;
  teamIdForDelete:number;
  disableFlag:boolean=false;
  accountId:number;

  constructor(private http: HttpClient,
    private router: Router,
    public _smmservice: SmmService,
    private formBuilder: FormBuilder,
    public _snackBar: MatSnackBar,
    private modalService: NgbModal) { }

  myForm: FormGroup = this.formBuilder.group({ emailId: this.emailId });
  ngOnInit() {
    this._smmservice.getallteam().subscribe(data => this.teams = data)
    this._smmservice.getallaols().subscribe(data => this.aolnames = data)
    this._smmservice.getAllProcessTeamMapping().subscribe(data => {
      this.allProcessTeamMapping = data;
    });
    this._smmservice.getallprocess().subscribe(data => {
      this.allprocess = data;
    });
  }
  onaolselect(aolselectedvar: string) {
    this.aolselected = aolselectedvar;
    this._smmservice.getaccountsforaol(this.aolselected).subscribe(data => {
      this.getaccountsforaolarray = data
    });
  }
  onaccountSelect(accountidvar: any) {
    this.submitobject.accountId = accountidvar;
    this.accounIdForDelete=accountidvar;
    this.tempobj.accountId = accountidvar;
    this.accountId=accountidvar;
    this._smmservice.getAccountTeamMappingByAccountId(accountidvar).
      subscribe(data => {
        this.getAccountTeamMappingByAccountIdArray = data;
        console.log("Fulldata",this.getAccountTeamMappingByAccountIdArray);
        this.aolTeamsArray = data[0].teams;
        this.tempteamsobj = this.aolTeamsArray;
        console.log("only teams ",this.tempteamsobj);
        // debugger;
        // if(this.tempteamsobj.length>0 &&(this.tempteamsobj[0].spoc !== null && this.tempteamsobj[0].spoc !== "")){
        //   this.disableFlag=true;        
        // }
        // else
        // {
        //   this.disableFlag=false;
        // }
        this.canAddTeam = true;
      });
  }

  trackByItems(index, item): number {
    return item;
  }
  // onTeamSubmit() {
  //   var tempTeam = new teamsaveaccount();

    
  //   const selectedTeam: team = this.teams.find(i=> i.teamName===this.selectedTeam);

  //   tempTeam.teamId = selectedTeam && selectedTeam.teamId;
  //   this.tempobj3.teams.length = 0;
  //   this.tempobj3.teams.push(tempTeam);
  //   this.tempobj3.accountId = this.tempobj.accountId;
  //   this._smmservice.submitsmmprocessselection2(this.tempobj3).subscribe(
  //     (data) => {
  //       // debugger
  //       this._snackBar.open("TEAM ADDED SUCCESSFULLY")._dismissAfter(8000);
  //       this._smmservice.getAccountTeamMappingByAccountId(this.submitobject.accountId).
  //       subscribe(data => {
  //         this.getAccountTeamMappingByAccountIdArray = data;
  //         this.aolTeamsArray = data[0].teams;
  //         this.tempteamsobj = this.aolTeamsArray;
  //         this.canAddTeam = true;
  //       });
  //       debugger;
  //       this.submitSmmProcessSelectionResponse = data;
  //       if(this.submitSmmProcessSelectionResponse){
  //        // @ViewChild(ModalDirective) modal: NgbModal;
  //         //document.getElementById("myModal1").style.display="none";
  //         // document.getElementById("myModal1").setAttribute('style','display:none, backdrop:static');

  //         if (this.selectedProcess) {
  //           this.closeModal();
  //             // alert('dismiss modal1');
  //         }
  //       } else {
  //         this.closeModal();
  //       }


  //     });
  //   this.onaolselect(this.aolselected);
  //   this.onaccountSelect(this.tempobj.accountId);
  //   this.popup = false;
  // }



  onTeamSelect()
  {
    
    var tempTeam = new teamsaveaccount();

    
    const selectedTeam: team = this.teams.find(i=> i.teamName===this.selectedTeam);

    tempTeam.teamId = selectedTeam && selectedTeam.teamId;
    this.tempobj3.teams.length = 0;
    this.tempobj3.teams.push(tempTeam);
    this.tempobj3.accountId = this.tempobj.accountId;

    this._smmservice.checkAnyProcessMappedOrNot(this.tempobj3).subscribe(
      (data) => {
        
        this.submitSmmProcessSelectionResponse = data;
      });
      this.onaolselect(this.aolselected);
      this.onaccountSelect(this.tempobj.accountId);
  }
  onTeamSubmit() {

    this._smmservice.submitsmmprocessselection2(this.tempobj3).subscribe(
      (data) => {
        // debugger
        this._snackBar.open("TEAM ADDED SUCCESSFULLY")._dismissAfter(8000);
       
           
      });
      this._smmservice.getAccountTeamMappingByAccountId(this.submitobject.accountId).
        subscribe(data => {
          this.getAccountTeamMappingByAccountIdArray = data;
          this.aolTeamsArray = data[0].teams;
          this.tempteamsobj = this.aolTeamsArray;
          this.canAddTeam = true;
        });
    this.onaolselect(this.aolselected);
    this.onaccountSelect(this.tempobj.accountId);
 
  }

  // closeModal() {
  //   const closeModalBtnDOM = document.getElementById('closeModalBtn');
  //   if(closeModalBtnDOM) {
  //     closeModalBtnDOM.click();
  //   }
  // }


  // teamChecked(e: Event, teamName: string) {
  //   const checkbox = e.target as HTMLInputElement;
  //   if (checkbox.checked) {
  //     document.getElementById("txtReason" + teamName).style.visibility = "hidden";
  //     document.getElementById("txtSPOC" + teamName).style.visibility = "visible";
  //   } else {
  //     document.getElementById("txtReason" + teamName).style.visibility = "visible";
  //     document.getElementById("txtSPOC" + teamName).style.visibility = "hidden";
  //   }
  // }

 
  deleteTeamFromAccount(teamId)
  {
    this.teamIdForDelete=teamId;
    // alert("teamId"+this.teamIdForDelete);
    // alert("accountId"+this.accounIdForDelete);
    this._smmservice.deleteTeamFromAccountonAolPage(this.teamIdForDelete,this.accounIdForDelete);
    
    this.onaolselect(this.aolselected);
    this.onaccountSelect(this.tempobj.accountId);
    //this._snackBar.open("TEAM DELETED SUCCESSFULLY")._dismissAfter(8000);
  }


  onSubmit() {
    // this._smmservice.submitsmmprocessselection(this.submitobject);
    this._smmservice.saveSpocForAccountTeamMapping(this.submitobject);
    // console.log(this.submitobject);
    swal('Setup Saved Succesfully').then(function () { location.reload() });
  }
  addProcessToTeam(teamId: number) {
    
    this.addProcessToTeamId = teamId
    this.addProcessToTeamBool = true;
  }
  closeAddProcessToTeam() {
    this.addProcessToTeamBool = false;
  }
  onProcessSelect() {
   
    this.tmp2.processId = this.selectedProcess;
    // this.saveTeamProcessMapping.teamId = this.selectedTeam.teamId;
    const selectedTeam: team = this.teams.find(i=> i.teamName===this.selectedTeam);
    this.saveTeamProcessMapping.teamId = selectedTeam.teamId;
    this.saveTeamProcessMapping.process.push(this.tmp2);
    this._smmservice.saveTeamProcessMapping(this.saveTeamProcessMapping);
  }
  mapTeamProcess(processId) {
    this.tmp1.processId = processId;
  }
  mapTeamProcessSubmit() {
    // this.saveTeamProcessMapping.accountId=this.accountId;
    // this.saveTeamProcessMapping.teamId = this.addProcessToTeamId;
    // this.saveTeamProcessMapping.process.push(this.tmp1);
    //this._smmservice.saveTeamProcessMapping(this.saveTeamProcessMapping);
    this._smmservice.saveAccountTeamProcessMapping(this.accountId,this.addProcessToTeamId,this.tmp1.processId)
    console.log("only teams after adding process",this.tempteamsobj);
    this.addProcessToTeamBool = false;
    this.onaolselect(this.aolselected);
    this.onaccountSelect(this.tempobj.accountId);
  }
  // saveEntry(teamid: number, e: Event, textValue: string) {
  //   var mytempteam = new teamprocessmappingforSSM();
  //   mytempteam.teamId = teamid;
  //   mytempteam.reason = textValue;
  //   this.submitobject.teams.push(mytempteam);
  // }
  errorMessage: string;
  keyup($e, event: string) {
    let presentKey = $e.target.value;
    if (event && event.trim().length >= 3 && this.chngeKey !== presentKey) {
      this.emailFieldInput = of(event);
      this.emailFieldInput.pipe(
        distinctUntilKeyChanged('value'),
        debounceTime(200),
        switchMap(query => this._smmservice.getEmails(query))
      ).subscribe(results => {
        this.presentVal = [...results];
      });
      this.chngeKey = presentKey;
    }
  }
  saveemail(teamid: number, email: string) {
    var mytempteam = new teamprocessmappingforSSM();
    mytempteam.teamId = teamid;
    mytempteam.spoc = email;
    this.submitobject.teams.push(mytempteam);
  }
  openpopup() {
    this.popup = true;
  }
  closepopup() {
    this.popup = false;
  }

  resetDataForModal() {
    this.selectedTeam = '';
    this.selectedProcess = '';
    
    
  }

  onselectdelete(accountTeamMappingId) {
    this._smmservice.deleteAccountTeamProcessMapping(accountTeamMappingId);
    this.onaolselect(this.aolselected);
    this.onaccountSelect(this.tempobj.accountId);
  }
  openpopupforteamprocess(teamId) {
    this.popup = true;
  }
}