import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentComponent} from "./components/comment/comment.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";

const routes: Routes = [

  {
    path: '', component: CommentComponent, children: [
      {path: 'id', component: CommentDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
