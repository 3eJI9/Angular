import {Component, OnInit} from '@angular/core';
import {IComment} from "../../interfaces";
import {CommentService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment: IComment;
  constructor( private activateRoute: ActivatedRoute, private router : Router, private commentService: CommentService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id})=>{
      const state = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as IComment;

      if(state) {
        this.comment = state
      }else {
        this.commentService.getById(id).subscribe(value => this.comment = value)

      }


    })
  }

}


