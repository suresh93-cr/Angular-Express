import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: ApiserviceService, private router: ActivatedRoute) { }

  errormsg: any;
  successmsg:any;
  getparamid: any;

  ngOnInit(): void {

    this.getparamid = this.router.snapshot.paramMap.get('id');

  }

  createData: any;

  signupForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl('', [Validators.required,]),
    phonenumber: new FormControl('', [Validators.required,]),
    // Password: new FormControl('',[Validators.required,Validators.minLength(5)]),
    // ConfirmPassword: new FormControl('',[Validators.required,Validators.minLength(5)]),

  });
  signupUser() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.service.createData(this.signupForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.signupForm.reset();
        this.successmsg = res.message;
      });
    }
    else
    {
      this.errormsg = 'Please Fill the Form All Field Is Required !';
    }
  }

  get firstname() {
    return this.signupForm.get('firstname')
  }

  get lastname() {

    return this.signupForm.get('lastname')
  }
  get email() {
    return this.signupForm.get('email')
  }
  get dob() {
    return this.signupForm.get('dob')
  }
  get phonenumber() {
    return this.signupForm.get('phonenumber')
  }
  // get ConfirmPassword ()
  // // {
  // // return this.signupForm.get('ConfirmPassword')
  // // }
}
