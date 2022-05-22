import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {CommentService} from "../modules/comment/services";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentService
  ]
})
export class CommentModule { }
