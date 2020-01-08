import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account';
import { AccountService } from '../service/account-service.service';


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getAll().subscribe(data => {
     this.accounts = data;
    });
  }

  onClick(e) {
    this.accountService.get(e.target.id).subscribe(data => {
      //Modal creation to display account details
       var modal = document.createElement("div");
       modal.classList.add("modal");
       modal.id="myModal";

       var content = document.createElement("div");
       content.classList.add("modal-content");

       var close = document.createElement("span");
       close.classList.add("close");
       close.innerHTML="&times;";
       close.onclick= function(){
         modal.style.display= "none";
       };

       //Filling modal content
       content.innerHTML = content.innerHTML+'<h1 style="text-align:center">Account Details</h1>';
       content.innerHTML = content.innerHTML+'<p style="font-weight:bold">Account Description:</p>';
       content.innerHTML = content.innerHTML+'<p>'+data.accountDescription+'</p>';
       content.innerHTML = content.innerHTML+'<p style="font-weight:bold">Account Holder Name:</p>';
       content.innerHTML = content.innerHTML+'<p>'+data.accountHolderName+'</p>';
       content.innerHTML = content.innerHTML+'<p style="font-weight:bold">Account Holder Phone Number:</p>';
       content.innerHTML = content.innerHTML+'<p>'+data.accountHolderPhoneNumber+'</p>';
       content.innerHTML = content.innerHTML+'<p style="font-weight:bold">Account Number:</p>';
       content.innerHTML = content.innerHTML+'<p>'+data.accountNumber+'</p>';
       //End of modal content

       //Appending modal to page
       modal.appendChild(content);
       content.insertBefore(close,content.firstChild);
       document.body.appendChild(modal);
   });
  }
}
