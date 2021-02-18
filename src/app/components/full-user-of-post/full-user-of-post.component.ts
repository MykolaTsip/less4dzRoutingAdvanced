import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/User';
import {Post} from '../../models/Post';
import {PostService} from '../../servises/post.service';

@Component({
  selector: 'app-full-user-of-post',
  templateUrl: './full-user-of-post.component.html',
  styleUrls: ['./full-user-of-post.component.css']
})
export class FullUserOfPostComponent implements OnInit {

  user: User;

 posts: Post[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService, private router: Router) {

    activatedRoute.params
      .subscribe(value => {
        this.user = history.state.user;

        postService.postsOfUser(this.user.id)
          .subscribe(data => {
            this.posts = data;
          });
      });
  }

  ngOnInit(): void {
  }

}
