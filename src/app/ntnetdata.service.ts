import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NtnetdataService {

  public static flag = 0;
  public static authorised1: Array<string> = ['miralk01','nitind03','harimang'];
  public static ntnetuserid:string;
  constructor(private http: HttpClient) { }
}
