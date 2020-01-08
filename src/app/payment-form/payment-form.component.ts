import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../service/payment-service.service';
import { Payment } from '../model/payment';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {

  payment: Payment;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentService: PaymentService) {
    this.payment = new Payment();
  }

  onSubmit() {
    this.paymentService.addPayment(this.payment).subscribe(result => this.gotoPaymentList(),({error}) => {this.payment = error; alert(error)});
  }

  gotoPaymentList() {
    this.router.navigate(['/payments-system/payment']);
  }
}
