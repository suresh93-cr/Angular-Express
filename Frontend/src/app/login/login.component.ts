import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';

@Component({

selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginForm = new FormGroup({
Email: new FormControl('',[Validators.required,Validators.email]),
password: new FormControl('',[Validators.required,Validators.minLength(5)]),
});
loginUser()
{
console.warn(this.loginForm.value)
}

get Email()
{
return this.loginForm.get('Email')
}

get password ()
{
return this.loginForm.get('password')
}
}
