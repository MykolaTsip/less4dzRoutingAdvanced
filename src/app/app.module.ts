import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { UserComponent } from './components/present-components/user/user.component';
import { PostComponent } from './components/present-components/post/post.component';
import { CommentComponent } from './components/present-components/comment/comment.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import {PrefetchUserService} from './servises/prefetch/prefetch-user.service';
import {PrefetchPostService} from './servises/prefetch/prefetch-post.service';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import {PrefetchCommentService} from './servises/prefetch/prefetch-comment.service';
import {FullUserOfPostComponent} from './components/full-user-of-post/full-user-of-post.component';
import {FullPostOfCommentComponent} from './components/full-post-of-comment/full-post-of-comment.component';
import {CanActivateService} from './servises/activate/can-activate.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent,
    FullUserOfPostComponent,
    FullPostOfCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users', component: AllUsersComponent, resolve: {users: PrefetchUserService}, canActivate: [CanActivateService],
        children: [
          {
            path: ':id', component: FullUserOfPostComponent
          }
        ]
      },
      {
        path: 'posts', component: AllPostsComponent, resolve: {posts: PrefetchPostService}, canActivate: [CanActivateService],
        children: [
          {
            path: ':id', component: FullPostOfCommentComponent
          }
        ]
      },
      {
        path: 'comments', component: AllCommentsComponent, resolve: {comments: PrefetchCommentService}
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
