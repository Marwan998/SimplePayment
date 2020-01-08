import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';

const routes: Routes = [
  { path: 'payments-system/account', component: AccountListComponent },
  { path: 'payments-system/account/add', component: AccountFormComponent },
  { path: 'payments-system/payment', component: PaymentListComponent },
  { path: 'payments-system/payment/add', component: PaymentFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
