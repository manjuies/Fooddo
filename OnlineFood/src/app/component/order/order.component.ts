import { Component, OnInit } from '@angular/core';
import { Order_P } from '../placeorder/order';
import { SharedService } from '../login/shared.service';
import { OrderService } from '../placeorder/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private sharedService:SharedService,
    private orderService:OrderService,
    private route:ActivatedRoute,
    private snackBar:MatSnackBar) { }
  Porderobj:Order_P =new Order_P();
  CurrentUser:any ={};
  CurrentProduct:any ={};
  CurrentOrder:any={};
  OrderList:any ={};
  OrderId:any ={};
  ngOnInit(): void {
  
    this.getCurrentUser();
 
    this.getProduct();
    this.getOrder();
  }
  getCurrentUser(){
    this.sharedService.currentData.subscribe(data => {
      this.CurrentUser =data}
    );
  }
getProduct(){
  this.sharedService.Pdata.subscribe(data => {
    this.CurrentProduct =data;
 
  });
}
getOrder(){
  this.sharedService.orderProduct.subscribe(data=>{
    this.CurrentOrder =data;
  });
}

    Order(){
      this.Porderobj.name = this.CurrentUser.name;
      this.Porderobj.OrderId=this.CurrentOrder._id;
      this.Porderobj.UserId= this.CurrentUser._id;
      this.Porderobj.restroId = this.CurrentProduct.restroId;
      this.Porderobj.ProductId = this.CurrentProduct._id;
      this.Porderobj.Productname = this.CurrentProduct.name;
      this.Porderobj.quantity= this.CurrentOrder.quantity;
      this.Porderobj.Total= this.CurrentOrder.quantity * this.CurrentOrder.FinalAmt;
      this.orderService.createPorder(this.Porderobj).subscribe(data =>{
       this.OrderList =data;
        console.log(data);
        this.snackBar.open(' Order Placed','Successfully', {
          duration: 2000,
        });
    })
   
    
  }

}
