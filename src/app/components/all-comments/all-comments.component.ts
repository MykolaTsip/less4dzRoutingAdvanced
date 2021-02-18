import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: Comment[];

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.data
      .subscribe(value => this.comments = value.comments);
  }

  ngOnInit(): void {
  }

}
