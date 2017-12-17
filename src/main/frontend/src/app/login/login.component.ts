import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName;
  public password;

  constructor(private http: Http, private router: Router, private snackBar: MatSnackBar) {  }
  
  ngOnInit():void {

  }

  openSnackBar() {
    this.snackBar.open("Invalid credentials.", "Close", {
      duration: 8000,
    });
  }

  onSubmit() {
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.post('/talenthunt/login_old',
        'username=' + this.userName + '&password=' + this.password,
        {headers: headers})
        .subscribe(
          result => {
            this.openSnackBar();
          	console.log("result",result)
          },
        error =>{
          if(error.status == 404){
            this.router.navigate(['dashboard']);
          }
        }
      );
  }

}
