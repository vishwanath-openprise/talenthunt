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
  
  ngOnInit():void {  }

  openSnackBar(message):void {
    this.snackBar.open(message, "Close", {
      duration: 8000,
    });
  }

  onSubmit(data):void {
    if(!data.userName || !data.password){
      this.openSnackBar("Mobile/Email or password is missing.");
      return;
    }
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.post('/talenthunt/login_old',
        'username=' + data.userName + '&password=' + data.password,
        {headers: headers})
        .subscribe(
          result => {
            this.http.get('/talenthunt/main/isUserLoggedIn').subscribe(
              data => { if(data)  this.router.navigate(['dashboard']); else   this.openSnackBar("Mobile/Email or password is incorrect.");},
              error => { this.openSnackBar("Unable to connect to out server, please try again later."); }
            );
          },
          error =>{
            this.openSnackBar("Unable to connect to out server, please try again later.");
          }
      );
  }

}
