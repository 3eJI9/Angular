import {Injectable} from '@angular/core';
import {IUser} from "../interfaces";
import {Observable} from "rxjs";
import {urls} from "../constants";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users)
  }
}
