import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: User[];

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.data
      .subscribe(value => this.users = value.users);
  }

  ngOnInit(): void {
  }

}
