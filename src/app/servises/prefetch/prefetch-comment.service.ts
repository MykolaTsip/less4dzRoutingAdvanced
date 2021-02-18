import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {CommentService} from '../comment.service';

@Injectable({
  providedIn: 'root'
})
export class PrefetchCommentService implements Resolve<any>{

  constructor(private commentService: CommentService) { }

  resolve(): any{
  return this.commentService.comments();
  }
}
