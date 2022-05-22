import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostComponent} from "./components/post/post.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";

const routes: Routes = [


  {
    path: '', component: PostComponent, children: [
      {path: 'id', component: PostDetailsComponent}
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
