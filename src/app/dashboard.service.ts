import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamDashoardData, AccountDashboardData, LineDashboardData, Snapshot, LineDetail, Level, Pillar, KpiPillar, Report, Account, KPI, DataSource, ResponseMessage } from './DataStructures';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private _urlHost: string = "http://lokeshsa05:8080";
  private _urllocalHostData = "http://localhost:8080/showall"
  private _urlLineDetails: string = this._urlHost + "/api/accountms/lines/details";
  private _urlAccountDetails: string = this._urlHost + "/api/accountms/accounts/details";
  private _urlAddLine: string = this._urlHost + "/api/accountms/add/line";
  private _urlDeleteLine: string = this._urlHost + "/api/accountms/delete/line/";
  private _urlModifyLine: string = this._urlHost + "/api/accountms/update/line";
  private _url: string = "http://lokeshsa05:8082/api/reportms/1";
  private _urlTeam: string = "http://lokeshsa05:8082/api/reportms/team/";
  private _urlAccount: string = "http://lokeshsa05:8082/api/reportms/account/";
  private _urlLine: string = "http://lokeshsa05:8082/api/reportms/line/";
  private _urlADM: string = "http://lokeshsa05:8082/api/reportms/adm";
  private _urlTeamNames: string = "http://lokeshsa05:8080/api/accountms/teams/names";
  private _urlAccountNames: string = "http://lokeshsa05:8080/api/accountms/accounts/names";
  private _urlLineNames: string = "http://lokeshsa05:8080/api/accountms/lines/names";
  private _urlPillarNames: string = "http://lokeshsa05:8082/api/reportms/getAllPillars";
  private _urlAddPillar: string = "http://lokeshsa05:8082/api/reportms/savePillar";
  private _urlAddExpression: string = "http://lokeshsa05:8084/api/kpims/add";
  private _urlTestExpression: string = "http://jarora02:8082/api/kpims/expression/test";
  private _urlUpdateExpression: string = "http://lokeshsa05:8084/api/kpims/update";
  private _urlGetExpression: string = "http://lokeshsa05:8084/api/kpims/getAllExpressions";
  private _urlGetExpressionForLevel: string = "http://lokeshsa05:8084/api/kpims/pillar/";
  private _urlExpressionNames: string = "http://lokeshsa05:8084/api/kpims/operations";
  private _urlGetAttributes: string = "http://lokeshsa05:8084/api/kpims/attributes";
  private _urlGetAllLevels: string = "http://lokeshsa05:8082/api/reportms/getAllLevels";
  private _urlGetAllReports: string = "http://lokeshsa05:8082/api/reportms/getAllReports";
  private _urlDeletePillar: string = "http://lokeshsa05:8082/api/reportms/deletePillar/";
  private _urlDeleteKpi: string = "http://lokeshsa05:8084/api/kpims/delete/";
  private _urlModifyPillar: string = "http://lokeshsa05:8082/api/reportms/updatePillar";
  private _urlGetLatestAttributes: string = "http://lokeshsa05:8082/api/reportms/getLatestAttributes";
  private _urlGetKPIDetails: string = "http://localhost:8084/api/kpims/getKpiData";
  constructor(private http: HttpClient) {
  }
  public getTableData() {
    return this.http.get<TeamDashoardData[]>(this._url, httpOptions);
  }
  public getTeamNamesByFilter(lineName: string, accountName: string, teamName: string) {
    if (lineName && accountName) {
      return this.http.get<string[]>(this._urlTeamNames + "/" + lineName + "/" + accountName, httpOptions);
    }
    else if (lineName) {
      return this.http.get<string[]>(this._urlTeamNames + "/line/" + lineName, httpOptions);
    }
    else if (accountName) {
      return this.http.get<string[]>(this._urlTeamNames + "/account/" + accountName, httpOptions);
    }
    else {
      return this.http.get<string[]>(this._urlTeamNames, httpOptions);
    }
  }
  public getTeamData(teamName: string) {
    return this.http.get<TeamDashoardData>(this._urlTeam + teamName, httpOptions);
  }
  public getAccountDashboardData(accountName: string) {
    return this.http.get<AccountDashboardData>(this._urlAccount + accountName, httpOptions).toPromise();
  }
  public getAccountDataX() {
    return this.http.get<AccountDashboardData[]>(this._urlAccount);
  }
  public getLineData() {
    return this.http.get<LineDashboardData[]>(this._urlLine);
  }
  public getADMData() {
    return this.http.get<Snapshot[]>(this._urlADM, httpOptions);
  }
  public getAllTeamNames() {
    return this.http.get<string[]>(this._urlTeamNames, httpOptions);
  }
  public getAllAccountNames() {
    return this.http.get<string[]>(this._urlAccountNames, httpOptions).toPromise();
  }
  public getAllLineNames() {
    return this.http.get<string[]>(this._urlLineNames, httpOptions).toPromise();
  }
  public getLineDashboardData(lineName: string) {
    return this.http.get<LineDashboardData>(this._urlLine + lineName, httpOptions).toPromise();
  }
  public getAllLinesDetails() {
    return this.http.get<LineDetail[]>(this._urlLineDetails, httpOptions).toPromise();
  }
  public getAllPillarDetails() {
    return this.http.get<Pillar[]>(this._urlPillarNames, httpOptions).toPromise();
  }
  public getAllLevels() {
    return this.http.get<Level[]>(this._urlGetAllLevels, httpOptions).toPromise();
  }
  public getAllReports() {
    return this.http.get<Report[]>(this._urlGetAllReports, httpOptions).toPromise();
  }
  public getAllAccountsDetails() {
    return this.http.get<Account[]>(this._urlAccountDetails, httpOptions);
  }
  public getRelatedAttributes(datasource: DataSource) {
    this._urlGetAttributes = this._urlGetAttributes + "/" + datasource;
    return this.http.get<KPI[]>(this._urlGetAttributes, httpOptions).toPromise();
  }
  public addLine(line: LineDetail) {
    return this.http.post<ResponseMessage>(this._urlAddLine, line, httpOptions).toPromise();
  }
  public addCategory(pillar: Pillar) {
    return this.http.post<ResponseMessage>(this._urlAddPillar, pillar, httpOptions).toPromise();
  }
  public addExpression(kpiPillar: KpiPillar) {
    return this.http.post<ResponseMessage>(this._urlAddExpression, kpiPillar, httpOptions).toPromise();
  }
  public updateExpression(kpiPillar: KpiPillar) {
    return this.http.post<ResponseMessage>(this._urlUpdateExpression, kpiPillar, httpOptions).toPromise();
  }
  public getAllExpressions() {
    return this.http.get<KPI[]>(this._urlGetExpression, httpOptions).toPromise();
  }
  public getAllExpressionsForLevel(pillarId) {
    return this.http.get<KPI[]>(this._urlGetExpressionForLevel + pillarId, httpOptions).toPromise();
  }
  public deleteLine(lineName: string) {
    return this.http.delete<ResponseMessage>(this._urlDeleteLine + lineName, httpOptions).toPromise();
  }
  public deleteKpi(expressionId: number) {
    return this.http.delete<ResponseMessage>(this._urlDeleteKpi + expressionId, httpOptions).toPromise();
  }
  public deletePillar(pillarId: number) {
    return this.http.delete<ResponseMessage>(this._urlDeletePillar + pillarId, httpOptions).toPromise();
  }
  public modifyLine(line: LineDetail) {
    return this.http.post<ResponseMessage>(this._urlModifyLine, line, httpOptions).toPromise();
  }
  public updateCategory(pillar: Pillar) {
    return this.http.post<ResponseMessage>(this._urlModifyPillar, pillar, httpOptions).toPromise();
  }
}