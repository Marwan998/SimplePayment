import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../service/account-service.service';
import { Account } from '../model/account';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  account: Account;

  constructor(private route: ActivatedRoute,
      private router: Router,
        private accountService: AccountService) {
          this.account = new Account();
         }

  onSubmit() {
           this.accountService.addAccount(this.account).subscribe(result => this.gotoAccountList(),({error}) => {this.account = error; alert(error)});
         }

  gotoAccountList() {
           this.router.navigate(['/payments-system/account']);
         }

  ngOnInit() {
  }

}
