import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pillar,Account, ResponseMessage, Team } from './DataStructures';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  
  //private _url:string="http://disoni12:8080";
  private _url:string="http://lokeshsa05:8080";
  private _urlTeamDetails:string=this._url+"/api/accountms/teams/details";
  private _urlLineNames:string=this._url+"/api/accountms/lines/names";
  private _urlAccountNames:string=this._url+"/api/accountms/accounts/names";
  private _urlAddTeam:string=this._url+"/api/accountms/add/team";
  private _urlUpdateTeam:string=this._url+"/api/accountms/update/team";
  private _urlDeleteTeam:string=this._url+"/api/accountms/delete/team/";
  private _urlTeamNames:string=this._url+"/api/accountms/teams/names";
  private _urlAllPillarDetails:string=this._url+"";
  private _urlTeamIdDetail:string=this._url+"/api/accountms/teams/details/id/";
  private _urlAllAccountNamesForLine=this._url+"/api/accountms/accounts/names/"
  constructor(private http: HttpClient) { }

  public getAllAccountNamesForLine(lineName:string )
  {
    return this.http.get<string[]>(this._urlAllAccountNamesForLine+lineName,httpOptions).toPromise();
  }
  public getAllTeamNames()
  {
    return this.http.get<string[]>(this._urlTeamNames,httpOptions).toPromise();
  }

  public getAllTeamDetails()
  {
    return this.http.get<Team[]>(this._urlTeamDetails,httpOptions).toPromise();
  }
  public getAllLineNames()
  {
    return this.http.get<string[]>(this._urlLineNames,httpOptions).toPromise();
  }
  public getAllAccountNames()
  {
    return this.http.get<string[]>(this._urlAccountNames,httpOptions).toPromise();
  }
  public addTeam(team:Team)
  {
    return this.http.post<ResponseMessage>(this._urlAddTeam,team,httpOptions).toPromise();
  }
  public updateTeam(team:Team)
  {
    return this.http.post<ResponseMessage>(this._urlUpdateTeam,team,httpOptions).toPromise();
  }
  public deleteTeam(teamName:string)
  {
    return this.http.delete<ResponseMessage>(this._urlDeleteTeam+teamName,httpOptions).toPromise();
  }

  public getTeamDetail(teamId:number)
  {
    return this.http.get<Team>(this._urlTeamIdDetail+String(teamId),httpOptions).toPromise();   
  }


  

  
  public getAllPillarDetails()
  {
    return this.http.get<Pillar[]>(this._urlAllPillarDetails,httpOptions).toPromise();
  }
  



}
