import { BusinessService } from 'src/app/services/business.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { Business } from 'src/app/models/business';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  basePath:string=environment.basePathUser;
  auth!: Boolean;
  actualBusiness!:any;


  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService,
    private businessService: BusinessService,
    private http:HttpClient,
    private router:Router,
    private snackBar: MatSnackBar,

    ){}
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }


  login(){
   
    
    this.http.get<User[]>(`${this.basePath}`)
    .subscribe(res=>{
      const user=res.find((a:User)=>{
          if(a.email === this.loginForm.value.email && a.password === this.loginForm.value.password){
          this.auth=true;
          this.userService.setActualUser(a);
          this.businessService.getBusinessByUserId(a.id).subscribe((data) => {
            this.actualBusiness=data;
            this.businessService.setActualBusiness(data);
          });
        }
        return this.auth
      });
      if(user){
        this.snackBar.open('Ingresaste', '', {
          duration: 3000,
        });
        this.loginForm.reset();
        this.router.navigate(['panel']);
        
      }else{
        this.snackBar.open('El usuario es Incorrecto', '', {
          duration: 3000,
        });
      }
    },err=>{
      this.snackBar.open('Ingresa tus credenciales', '', {
        duration: 3000,
      });
    })

  }

}
