import { User } from './../../models/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router) 
    {this.reactiveForm(); }

  ngOnInit(): void {}

  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      usaername: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  saveUser(): void {
    const user: User = {
      id: 0,
      name: this.myForm.get('name')!.value,
      lastname: this.myForm.get('lastname')!.value,
      dni: this.myForm.get('dni')!.value,
      phone: this.myForm.get('phone')!.value,
      username: this.myForm.get('phone')!.value,
      password: this.myForm.get('phone')!.value,
    };
    this.userService.addUsers(user).subscribe({
      next: (data) => {
        this.snackBar.open('Usuario registrado con exito!', '', {
          duration: 3000,
        });
        this.router.navigate(['home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
