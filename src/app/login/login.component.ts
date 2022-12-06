import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

loginForm = new FormGroup ( 
  {
  username: new FormControl('', [Validators.required]),
  password: new FormControl('',[Validators.required])
  });
  constructor(private router : Router) {
    
  }

  onSubmit() {
    if(!this.loginForm.valid) {
      return ; 
    }
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
    if(this.loginForm.value.username == 'admin' && this.loginForm.value.password =='admin') {
      sessionStorage.setItem('IS_LOGIN', '1')
      this.router.navigate([''])
    }
  }

}
