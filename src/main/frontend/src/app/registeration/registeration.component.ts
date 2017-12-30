import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['../login/login.component.css'],
  animations: [moveIn()]
})
export class RegisterationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
