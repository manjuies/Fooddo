import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {  FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { CustomerComponent } from './component/customer/customer.component';
import { VendorComponent } from './component/vendor/vendor.component';
import { AdminComponent } from './component/admin/admin.component';
import { HomeComponent } from './component/home/home.component';
import { UserComponent } from './component/user/user.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AddItemComponent } from './component/add-item/add-item.component';
import {MatSelectModule} from '@angular/material/select';

import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './component/modal/modal.component';
import { SharedService} from './component/login/shared.service';
import { OrderlistComponent } from './component/orderlist/orderlist.component';

import { CategoryComponent } from './component/add-item/category/category.component';
import { ViewprofileComponent } from './component/viewprofile/viewprofile.component';
import { PlaceorderComponent } from './component/placeorder/placeorder.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
 import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ClientComponent } from './component/client/client.component';
import { OrderComponent } from './component/order/order.component';
import { ViewitemComponent } from './component/viewitem/viewitem.component';
import { EditviewprofileComponent } from './component/editviewprofile/editviewprofile.component';
import { EditmodalComponent } from './component/editmodal/editmodal.component';
import { VendordashboardComponent } from './component/vendordashboard/vendordashboard.component';
import { CustomerlistComponent } from './component/customerlist/customerlist.component';
import { VendorlistComponent } from './component/vendorlist/vendorlist.component';
import { AdmincardsComponent } from './component/admincards/admincards.component';
import { MyorderComponent } from './component/myorder/myorder.component';
import { HotelorderComponent } from './component/hotelorder/hotelorder.component';
import { EditcustomerComponent } from './component/editcustomer/editcustomer.component';
import { EdithotelComponent } from './component/edithotel/edithotel.component';
import { EditmenuComponent } from './component/editmenu/editmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent,
    VendorComponent,
    AdminComponent,
    HomeComponent,
    UserComponent,
    AddItemComponent,
    ModalComponent,
    OrderlistComponent,

    CategoryComponent,
    ViewprofileComponent,
    PlaceorderComponent,
    ClientComponent,
    OrderComponent,
    ViewitemComponent,
    EditviewprofileComponent,
    EditmodalComponent,
    VendordashboardComponent,
    CustomerlistComponent,
    VendorlistComponent,
    AdmincardsComponent,
    MyorderComponent,
    HotelorderComponent,
    EditcustomerComponent,
    EdithotelComponent,
    EditmenuComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatInputModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
MatTableModule 
  
  
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
