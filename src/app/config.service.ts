import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamDashoardData, AccountDashboardData, LineDashboardData, Snapshot, LineDetail, Account, ResponseMessage, Pillar, ConfigTeam, TeamConfigDetails } from './DataStructures';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _url: string = "http://lokeshsa05:8081";
  private _urlAddDataSource: string = this._url + "/api/datasourcems/add/datasource";
  private _urlGetAllDataSourceForTeam = this._url + "/api/datasourcems/details/id/";
  private _urlUpdateDataSource = this._url + "/api/datasourcems/update/datasource";
  private _urlDeleteDataSource = this._url + "/api/datasourcems/delete/datasource/id/";
  private _urlAllDatsourceAllTeams = this._url + "/api/datasourcems/configured/datasources"
  public _urlAllPillarDetails: string = "";
  constructor(private http: HttpClient) {
  }
  public getAllPillarDetails() {
    return this.http.get<Pillar[]>(this._urlAllPillarDetails, httpOptions).toPromise();
  }
  public getAllConfigDataSourceForTeam(teamId: number) {
    return this.http.get<ConfigTeam[]>(this._urlGetAllDataSourceForTeam + teamId, httpOptions).toPromise();
  }
  public addDataSource(configTeam: ConfigTeam) {
    return this.http.post<ResponseMessage>(this._urlAddDataSource, configTeam, httpOptions).toPromise();
  }
  public updateDataSource(configTeam: ConfigTeam) {
    return this.http.post<ResponseMessage>(this._urlUpdateDataSource, configTeam, httpOptions).toPromise();
  }
  public deleteDataSource(teamid: number, pillarId: number, datasource: string) {
    return this.http.delete<ResponseMessage>(this._urlDeleteDataSource + teamid + "/" + pillarId + "/" + datasource, httpOptions).toPromise();
  }
  public getAllDatasourcesAllTeams() {
    return this.http.get<TeamConfigDetails[]>(this._urlAllDatsourceAllTeams, httpOptions).toPromise();
  }
}