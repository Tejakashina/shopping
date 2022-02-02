import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading=false;
  error: string;
  message: any;
  

  constructor(
    private auth: RegisterService,
    private route:Router
    ) { }

  ngOnInit(): void {
  }
onSubmit(form:NgForm){
  this.isLoading=true;
  this.auth.onLogin(form.value).subscribe((res)=>{
    console.log(form.value);
    
    this.isLoading=false;
    if(!res.error){
      localStorage.setItem('userDetails',JSON.stringify(res))
      this.route.navigate(['/products'])
    }else{
      this.message=res.message;
      if(res.message.toLowerCase().trim()==='no user found'){
        this.route.navigate(['/register'])
      }
    }
  },err=>{
    this.error='something went wrong';
  })
}
}
