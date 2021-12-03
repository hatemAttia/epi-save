import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private homeServ: HomeService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.pattern(
            '^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]{0,10})*@[A-Za-z0-9]+(\\.[A-Za-z0-9]{0,10})*(\\.[A-Za-z]{0,5})$'
          ),
          Validators.required,
        ]),
      ],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login(){
    this.homeServ.loginAdmin(this.loginForm.value).subscribe((res:any) =>{
      this.router.navigate(["admin"]);
      localStorage.setItem("admin", JSON.stringify(res.admin));
    },err=>{
    })
  }
}
