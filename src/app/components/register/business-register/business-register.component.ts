import { BusinessService } from './../../../services/business.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Business } from 'src/app/models/business';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-business-register',
  templateUrl: './business-register.component.html',
  styleUrls: ['./business-register.component.css']
})
export class BusinessRegisterComponent implements OnInit {

  myForm!: FormGroup;
  userActual!:User;
  hide = true;

  constructor( 
    private fb: FormBuilder,
    private userService: UserService,
    private businessService: BusinessService,
    private snackBar: MatSnackBar,
    private router: Router
    ) { 
    
  }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
    });
  }
  
  saveBusiness():void{
    this.userActual=this.userService.getActualUser();
    const business: Business={
      id:0,
      name:this.myForm.get('name')!.value,
      email:this.userActual.email,
      phone:this.userActual.phone,
      description:this.userActual.phone,
      brand:this.userActual.phone,
      main_img:this.userActual.phone,
      userId:19,
    };

    const uploadImageData = new FormData();
    uploadImageData.append('name', business.name);
    uploadImageData.append('email', business.email);
    uploadImageData.append('phone', business.phone);
    uploadImageData.append('description', business.description);
    uploadImageData.append('brand', business.brand);
    uploadImageData.append('main_img', business.main_img);
    uploadImageData.append('userId', business.userId);


    this.businessService.addBusiness(uploadImageData).subscribe({
      next: (data) => {
        this.snackBar.open('Empieza a vender!', '', {
          duration: 3000,
        });
        this.router.navigate(['/panel/']);
      },
      error: (err) => {
        console.log(err);
      },
    });


  }


}
