import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account, ResponseMessage } from './DataStructures';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //private _url:string="http://disoni12:8080";
  private _url:string="http://lokeshsa05:8080";

  private _urlLineNames:string=this._url+"/api/accountms/lines/names";
  private _urlAccountDetails:string=this._url+"/api/accountms/accounts/details";
  private _urlAddAccount:string=this._url+"/api/accountms/add/account";
  private _urlUpdateAccount:string=this._url+"/api/accountms/update/account";
  private _urlDeleteAccount:string=this._url+"/api/accountms/delete/account/";

  constructor(private http: HttpClient) { }

  public getAllLineNames()
  {
    return this.http.get<string[]>(this._urlLineNames,httpOptions).toPromise();
  }
  public getAllAccountDetails()
  {
    return this.http.get<Account[]>(this._urlAccountDetails,httpOptions).toPromise();
  }
  public addAccount(account:Account)
  {
    return this.http.post<ResponseMessage>(this._urlAddAccount,account,httpOptions).toPromise();
  }
  public updateAccount(account:Account)
  {
    return this.http.post<ResponseMessage>(this._urlUpdateAccount,account,httpOptions).toPromise();
  }
  public deleteAccount(accountName:string)
  {
    return this.http.delete<ResponseMessage>(this._urlDeleteAccount+accountName,httpOptions).toPromise();
  }

}
