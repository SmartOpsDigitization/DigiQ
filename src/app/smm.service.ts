import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getaccountname, checkedlist, checklistdata, team, processupdate, questionadd, ResponseMessage, process1, accountsetup, teams, question, submitQueAns, submitsmmprocessselection, accountteammapping, email, getteamname, getallaols, processteammap, displayScores, getUserWithNtnet, viewChecklistResponses, submitSmmAccountSetup } from './smm-datastructure';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class SmmService {
  private _urlgetallteam: string = "http://nitind03:8082/api/reportms/getAllTeams";
  private _urlteamdelete: string = "http://nitind03:8082/api/reportms/deleteTeam/"
  private _urlupdateteam: string = "http://nitind03:8082/api/reportms/updateTeam"
  private _urladdteam: string = "http://nitind03:8082/api/reportms/saveTeam"
  private _urlgetallaccountname: string = "http://nitind03:8082/api/reportms/getAllAccounts";
  private _urlgetaccountsforaol: string = "http://nitind03:8082/api/reportms/getAccountsForAOL/";
  private _urlaccountdelete: string = "http://nitind03:8082/api/reportms/deleteAccount/"
  private _urladdaccount: string = "http://nitind03:8082/api/reportms/saveAccount"
  private _urlupdateaccount: string = " http://nitind03:8082/api/reportms/updateAccount";
  private _urlgetprocesses: string = "http://nitind03:8082/api/reportms/getAllProcess"
  private _urlupdateprocces: string = "http://nitind03:8082/api/reportms/updateProcess"
  private _urldeleteprocess: string = "http://nitind03:8082/api/reportms/deleteProcess/"
  private _urladdprocess: string = "http://nitind03:8082/api/reportms/addProcess";
  private _urldeletquestionanswerset = "http://nitind03:8082/api/reportms/deleteQuestionAnswerSet/";
  private _urlupdatequestionanswerset = "http://nitind03:8082/api/reportms/updateQuestionAnswerSet";
  private _urlsavequestionanswerset = "http://nitind03:8082/api/reportms/saveQuestionAnswerSet";
  private _urldeletechecklistdata = "http://nitind03:8082/api/reportms/deleteCheckListData/";
  private _urlupdatechecklistdata = "http://nitind03:8082/api/reportms/updateCheckListData";
  private _urlsavechecklistdata = "http://nitind03:8082/api/reportms/saveCheckListData";
  private _urlgetallchecklistdata = "http://nitind03:8082/api/reportms/getAllCheckListData";
  private _urlgetcheckedlistbasedonprocess = "http://nitind03:8082/api/reportms/getCheckListById/"
  private _urlgetallcheckedlist = "http://nitind03:8082/api/reportms/getAllCheckLists/"
  private _urlntnetchecklist = "http://nitind03:8082/api/reportms/getCheckListBySPOCNtnet/";//hm879b
  private _urlgetteamsforaccountsetup = ""
  private _urlsubmitquestionanswer = "http://nitind03:8082/api/reportms/saveUpdateChecklistResponseWithFile/"
  private _urlsubmitsmmprocessselection = "http://nitind03:8082/api/reportms/saveAccountTeamMappings/"
  private _urlgetAccountTeamMappingByAOLurl = "http://nitind03:8082/api/reportms/getAccountTeamMappingsByAccountId/"
  private _urlgetScoresForAccounts = "http://nitind03:8082/api/reportms/getScoresForAccounts"
  private _urlgetEmails: string = "http://nitind03:8082/api/reportms/getEmail/";
  private _urlgetAllProcessTeamMapping = "http://nitind03:8082/api/reportms/getAllTeamProcessMapping"
  private _urldeleteTeamProcessMapping = "http://nitind03:8082/api/reportms/deleteTeamProcessMapping"
  private _urlsaveTeamProcessMapping = "http://nitind03:8082/api/reportms/saveUpdateTeamProcessMapping/"
  private _urlgetUserWithNtnet = "http://nitind03:8082/api/reportms/users/"
  private _urlgetallaols: string = "http://nitind03:8082/api/reportms/getAllAOLs/";
  private _urlviewChecklistResponses = "http://nitind03:8082/api/reportms/getChecklistResponseSetForAccount/";
  private _urlgetChecklistBySPOCNtnet = "http://nitind03:8082/api/reportms/getCheckListBySPOCNtnet/";
  private _urldownloadFileForSubmittedResponses = "http://nitind03:8082/api/reportms/downloadChecklistResponseDocument/";
  private _urlAccountTeamProcessMappingdelete ="http://nitind03:8082/api/reportms/deleteAccountTeamProcessMapping/";
  private _urlcheckprocessmappedornot = "http://nitind03:8082/api/reportms/isProcessExistForTeam/";
  private _urldeleteTeamFromAccountFromAolPage="http://nitind03:8082/api/reportms/deleteAccountTeamMapping/";
  private _urlSaveAccountTeamProcessMapping="http://nitind03:8082/api/reportms/saveAccountTeamProcessMapping/";
  private _urlSaveSpocForAccountTeamMapping="http://nitind03:8082/api/reportms/saveSpocForAccountTeamMapping/";
  constructor(private http: HttpClient) { }
  public savequestionanswer(queansobj) {
    return this.http.post<questionadd>(this._urlsavequestionanswerset, queansobj, httpOptions).toPromise();
  }
  public updatequestionanswer(questionanswerobj) {
    return this.http.post<questionadd>(this._urlupdatequestionanswerset, questionanswerobj, httpOptions).toPromise();
  }
  public deletequestionanswer(questionid) {
    return this.http.post<ResponseMessage>(this._urldeletquestionanswerset + questionid, httpOptions).toPromise();
  }
  public getcheckedlistusingntnet(ntnet: string) {
    return this.http.get<checklistdata[]>(this._urlntnetchecklist + ntnet, httpOptions);
  }
  public getcheckedlistbasedonprocess(pid: number) {
    return this.http.get<checklistdata[]>(this._urlgetcheckedlistbasedonprocess + pid, httpOptions);
  }
  public getchecklistdata() {
    return this.http.get<checkedlist[]>(this._urlgetallcheckedlist, httpOptions);
  }
  public savechecklist(checkedlistobj) {
    return this.http.post<checkedlist>(this._urlsavechecklistdata, checkedlistobj, httpOptions).toPromise();
  }
  public deletechecklist(idm: number) {
    return this.http.post<ResponseMessage>(this._urldeletechecklistdata + idm, httpOptions).toPromise();
  }
  public updatechecklist(checkedlistobj) {
    return this.http.post<checkedlist>(this._urlupdatechecklistdata, checkedlistobj, httpOptions).toPromise();
  }
  public getallaccountname() {
    return this.http.get<getaccountname[]>(this._urlgetallaccountname, httpOptions);
  }
  public getallaols() {
    return this.http.get<getallaols[]>(this._urlgetallaols, httpOptions);
  }
  public getaccountsforaol(aolname: string) {
    return this.http.get<getaccountname[]>(this._urlgetaccountsforaol + aolname, httpOptions);
  }
  public deleteaccount(accountid: number) {
    return this.http.post<ResponseMessage>(this._urlaccountdelete + accountid, httpOptions).toPromise();
  }
  public addaccount(Account: getaccountname) {
    return this.http.post<getaccountname>(this._urladdaccount, Account, httpOptions).toPromise();
  }
  public updateaccount(Account: getaccountname) {
    return this.http.post<getaccountname>(this._urlupdateaccount, Account, httpOptions).toPromise();
  }
  public getallteam() {

    return this.http.get<team[]>(this._urlgetallteam, httpOptions);
  }
  public deleteteam(teamid: number) {
    return this.http.post<ResponseMessage>(this._urlteamdelete + teamid, httpOptions).toPromise();
  }
  public modifyteam(Team: team) {
    return this.http.post<ResponseMessage>(this._urlupdateteam, Team, httpOptions).toPromise();
  }
  public addteam(Team: team) {
    return this.http.post<team>(this._urladdteam, Team, httpOptions).toPromise();
  }
  public getallprocess() {
    return this.http.get<process1>(this._urlgetprocesses, httpOptions);
  }
  public deleteprocess(process1: number) {
    return this.http.post<ResponseMessage>(this._urldeleteprocess + process1, httpOptions).toPromise();
  }
  public updateprocess(processclass: process1) {
    return this.http.post<processupdate>(this._urlupdateprocces, processclass, httpOptions).toPromise();
  }
  public addprocess(processclass: process1) {
    return this.http.post<process1>(this._urladdprocess, processclass, httpOptions).toPromise();
  }
  public submitquestionanswer(submitquestionanswerobject: submitQueAns[]) {
    return this.http.post<submitQueAns[]>(this._urlsubmitquestionanswer, submitquestionanswerobject, httpOptions).toPromise();
  }
  public submitsmmprocessselection(submitsmmprocessselectionobject: submitSmmAccountSetup) {
    return this.http.post<Response>(this._urlsubmitsmmprocessselection, JSON.stringify(submitsmmprocessselectionobject), httpOptions).toPromise();
  }
  public submitsmmprocessselection2(submitsmmprocessselectionobject: accountteammapping): Observable<any> {
    return this.http.post<Response>(this._urlsubmitsmmprocessselection, JSON.stringify(submitsmmprocessselectionobject), httpOptions);
  }
  public checkAnyProcessMappedOrNot(checkprocessmappedornotobject: accountteammapping): Observable<any> {
    return this.http.post<Response>(this._urlcheckprocessmappedornot, JSON.stringify(checkprocessmappedornotobject), httpOptions);
  }
  public getAccountTeamMappingByAccountId(acctid: number): Observable<any> {
    return this.http.get<accountteammapping[]>(this._urlgetAccountTeamMappingByAOLurl + acctid, httpOptions);
  }
  public getAllProcessTeamMapping() {
    return this.http.get<processteammap>(this._urlgetAllProcessTeamMapping, httpOptions);
  }
  public getScoresForAccounts() {
    return this.http.get<displayScores[]>(this._urlgetScoresForAccounts, httpOptions);
  }
  public getEmails(email: string): Observable<any> {
    return this.http.get<email[]>(this._urlgetEmails + email, httpOptions);
  }
  public deleteTeamProcessMapping(obj: processteammap) {
    return this.http.post<processteammap>(this._urldeleteTeamProcessMapping, obj, httpOptions).toPromise();
  }
  public saveTeamProcessMapping(object: processteammap) {
    return this.http.post<processteammap[]>(this._urlsaveTeamProcessMapping, object, httpOptions).toPromise();
  }
  public getUserWithNtnet(ntnet: string) {
    return this.http.get<getUserWithNtnet>(this._urlgetUserWithNtnet + ntnet, httpOptions);
  }
  public viewChecklistResponses(accountId: number) {
    return this.http.get<viewChecklistResponses>(this._urlviewChecklistResponses + accountId, httpOptions);
  }
  public getChecklistBySPOCNtnet(ntnet: string) {
    return this.http.get<checklistdata[]>(this._urlgetChecklistBySPOCNtnet + ntnet, httpOptions);
  }
  public downloadFileForSubmittedResponses(responseId) {
   
    return this.http.get(this._urldownloadFileForSubmittedResponses + responseId, {responseType: 'blob'as 'json', headers: {'Content-Type': 'application/json',}});
  }
  public deleteAccountTeamProcessMapping(accountTeamMappingId: number){
        return this.http.post<ResponseMessage>(this._urlAccountTeamProcessMappingdelete + accountTeamMappingId, httpOptions).toPromise();
      } 

    public deleteTeamFromAccountonAolPage(teamId,accountId){
          return this.http.post<ResponseMessage>(this._urldeleteTeamFromAccountFromAolPage + accountId + "/" + teamId, httpOptions).toPromise();

    }
    public saveAccountTeamProcessMapping(accountId,teamId,processId){
      return this.http.post<ResponseMessage>(this._urlSaveAccountTeamProcessMapping+accountId+ "/" +teamId+ "/" +processId,httpOptions).toPromise();
    }
    public saveSpocForAccountTeamMapping(submitsmmprocessselectionobject: submitSmmAccountSetup) {
      return this.http.post<Response>(this._urlSaveSpocForAccountTeamMapping, JSON.stringify(submitsmmprocessselectionobject), httpOptions).toPromise();
    }
}