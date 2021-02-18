import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../models/Post';
import {Comment} from '../../models/Comment';
import {CommentService} from '../../servises/comment.service';

@Component({
  selector: 'app-full-post-of-comment',
  templateUrl: './full-post-of-comment.component.html',
  styleUrls: ['./full-post-of-comment.component.css']
})
export class FullPostOfCommentComponent {

  post: Post;

  comments: Comment[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commentService: CommentService) {
  activatedRoute.params.subscribe(value => {
  this.post = router.getCurrentNavigation().extras.state.post;

  commentService.commentsByPostId(this.post.id)
    .subscribe(data => this.comments = data);
  });
  }

}


