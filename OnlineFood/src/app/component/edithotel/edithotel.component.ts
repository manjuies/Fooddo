import { Component, OnInit } from '@angular/core';
import { SharedService } from '../login/shared.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ModalService } from '../modal/modal.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edithotel',
  templateUrl: './edithotel.component.html',
  styleUrls: ['./edithotel.component.scss']
})
export class EdithotelComponent implements OnInit {
  addForm:FormGroup
  profileDetail: any;
  getdetail = [];
  currentemployee = [];
  constructor(private sharedService:SharedService,
    private fb:FormBuilder,
    private modalService:ModalService,
   private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.createForm();
    this.getCurrentUser();
  }
  createForm(){
    this.addForm = this.fb.group({
      restaurant:['',Validators.required],
    
      url:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
       pin:['',Validators.required],
       contact:['',Validators.required],
    type:['',Validators.required],
      opentime:['',Validators.required],
      closetime:['',Validators.required],
      status:['',Validators.required],
      isActive:['',Validators.required]
      
    })
  }
  getCurrentUser(){
    this.sharedService.currentData.subscribe(data => {
      this.profileDetail = data;
      console.log(this.profileDetail);
      this.modalService.getHotel().subscribe(data =>{
      this.getdetail=data;
    
      for(let i = 0 ; i<this.getdetail.length;i++ ){
        if(this.getdetail[i]._id== this.profileDetail){
          this.currentemployee[0]=this.getdetail[i];
        }
      }
      console.log(this.currentemployee);
      })
    
  })
}

Save(){
  this.addForm.value._id= this.currentemployee[0]._id;
//  this.addForm.value.isActive="true";
  this.modalService.updateHotel(this.addForm.value).subscribe(data=>{
    this.snackBar.open('Updated', 'Successfully', {
      duration: 2000,
    });
    console.log(data);
  },
 err=>console.log(err)) ; 
console.log(this.addForm.value);
}
}


