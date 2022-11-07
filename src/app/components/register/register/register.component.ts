import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm!: FormGroup;

  hide = true;
  constructor( 
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
    ) { 
    this.reactiveForm();
  }

  ngOnInit(): void {
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      phone: ['', [Validators.required]],
    });
  }
  
  saveUser():void{
    const user: User={
      id:0,
      email: this.myForm.get('email')!.value,
      password:this.myForm.get('password')!.value, 
      phone:this.myForm.get('phone')!.value,      
    };
    this.userService.addUser(user).subscribe({
      next: (data) => {
        this.userService.setActualUser(user);
        this.snackBar.open('Ya falta poco', '', {
          duration: 3000,
        });
        this.router.navigate(['/register-businesss']);
      },
      error: (err) => {
        console.log(err);
      },
    });


  }
}
