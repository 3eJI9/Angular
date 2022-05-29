import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from './components/comments/comments.component';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';
import {CommentResolveResolver} from "./services";
import {MyGuardGuard} from "./guards";

const routes: Routes = [
  {
    path: '', component: CommentsComponent,canActivate:[MyGuardGuard],  children: [
      {path: ':id', component: CommentDetailsComponent, resolve: {data :CommentResolveResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
