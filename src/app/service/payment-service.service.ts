import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from '../model/payment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PaymentService {
  private paymentUrl: string;
  private addPaymentUrl: string;

    constructor(private http: HttpClient) {
      this.paymentUrl = 'http://localhost:8080/payments-system/payment';
      this.addPaymentUrl = 'http://localhost:8080/payments-system/payment/add';
    }

    public getAll(): Observable<Payment[]> {
      return this.http.get<Payment[]>(this.paymentUrl);
    }

    public addPayment(payment: Payment) {
      return this.http.post<Payment>(this.addPaymentUrl, payment);
    }

    public get(paymentId: string): Observable<Payment> {
      return this.http.get<Payment>(this.paymentUrl+"/"+paymentId);
    }
}
