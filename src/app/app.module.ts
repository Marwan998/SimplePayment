import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountService } from './service/account-service.service';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PaymentService } from './service/payment-service.service';


@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountFormComponent,
    PaymentListComponent,
    PaymentFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AccountService,PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
