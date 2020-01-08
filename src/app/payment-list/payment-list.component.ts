import { Component, OnInit } from '@angular/core';
import { Payment } from '../model/payment';
import { PaymentService } from '../service/payment-service.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  payments: Payment[];

    constructor(private paymentService: PaymentService) {
    }

    ngOnInit() {
      this.paymentService.getAll().subscribe(data => {
        this.payments = data;
      });
    }

    onClick(e) {
       this.paymentService.get(e.target.id).subscribe(data => {
         // Model creation to display payment details
         var modal = document.createElement("div");
         modal.classList.add("modal");
         modal.id="myModal";

         var content = document.createElement("div");
         content.classList.add("modal-content");
         
         var close = document.createElement("span");
         close.classList.add("close");
         close.innerHTML="&times;";
         close.onclick= function(){  //Adding functionality to the close button
           modal.style.display= "none";
         };

         // Filling modal content
         content.innerHTML = content.innerHTML+'<h1 style="text-align:center">Payment Details</h1>';
         content.innerHTML = content.innerHTML+'<p style="font-weight:bold">Payment Description:</p>';
         content.innerHTML = content.innerHTML+'<p>'+data.paymentDescription+'</p>';
         content.innerHTML = content.innerHTML+'<p style="font-weight:bold">Source Account Number:</p>';
         content.innerHTML = content.innerHTML+'<p>'+data.sourceAccountNumber+'</p>';
         content.innerHTML = content.innerHTML+'<p style="font-weight:bold">Destination Account Number:</p>';
         content.innerHTML = content.innerHTML+'<p>'+data.destinationAccountNumber+'</p>';
         content.innerHTML = content.innerHTML+'<p style="font-weight:bold">Amount:</p>';
         content.innerHTML = content.innerHTML+'<p>'+data.amount+'</p>';
         content.innerHTML = content.innerHTML+'<p style="font-weight:bold">Currency Code:</p>';
         content.innerHTML = content.innerHTML+'<p>'+data.currencyCode+'</p>';
         //End of modal content

         //Appending modal to page
         modal.appendChild(content);
         content.insertBefore(close,content.firstChild);
         document.body.appendChild(modal);
     });
    }
}
