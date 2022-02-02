import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
isLoading=false;
  message: any;
  error: string;
  constructor(private auth: RegisterService) { }

  ngOnInit(): void {
  }
onSubmit(form:NgForm){
  this.isLoading=true;
  this.auth.onRegister(form.value).subscribe((res)=>{
    console.log(form.value);
    
    this.isLoading=false;
    this.message=res.message;
    form.reset();
  },err=>{
    this.isLoading=false;
    this.error="something went wrong";
    
  })

}
}
