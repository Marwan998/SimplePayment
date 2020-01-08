import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../model/account';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {

  private accountsUrl: string;
  private postUrl: string;

  constructor(private http: HttpClient) {
    this.accountsUrl = 'http://localhost:8080/payments-system/account';
    this.postUrl = 'http://localhost:8080/payments-system/account/add';
  }

  public getAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl);
  }

  public addAccount(account: Account) {
    return this.http.post<Account>(this.postUrl, account);
  }
  public get(accountId: string): Observable<Account> {
    return this.http.get<Account>(this.accountsUrl+"/"+accountId);
  }
}
