import {Injectable} from '@angular/core';
import {IPost} from "../interfaces";
import {Observable} from "rxjs";
import {urls} from "../constants";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts)
  }
}
