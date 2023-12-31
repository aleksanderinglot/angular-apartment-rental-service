import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { ApartmentItemComponent } from './apartment-item/apartment-item.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { ApartmentRentComponent } from './apartment-rent/apartment-rent.component';
import { ApartmentRentEditComponent } from './apartment-rent-edit/apartment-rent-edit.component';
import { ApartmentFormComponent } from './apartment-form/apartment-form.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    ApartmentListComponent,
    ApartmentItemComponent,
    ApartmentDetailsComponent,
    ApartmentRentComponent,
    ApartmentRentEditComponent,
    ApartmentFormComponent,
    UserReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
