import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PostService} from '../post.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrefetchPostService implements Resolve<any>{

  constructor(private postService: PostService) { }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
return this.postService.posts();
  }
}
