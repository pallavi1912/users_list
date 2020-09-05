import { Component, OnInit } from '@angular/core';
import {UsersServiceService} from '../users-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  constructor(private usersService:UsersServiceService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.usersService.usersList().subscribe(
      data=>{
        console.log("data in component", data);
        this.users = data;
      }
    )
  }

}

