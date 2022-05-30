import { Injectable } from '@angular/core';
import { Users } from "../models/users.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: Users[] = [
  ];

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Users[]> {
    return this.http.get<Users[]>(environment.api + '/api/users');
  }

  public findById(id: number): Observable<Users> {
    return this.http.get<Users>(environment.api + '/api/users/' + id);
  }

  public save(user: Users): Observable<Users> {
    if (user.id) {
      this.http.put<Users>(environment.api + '/api/users/' + user.id, user).subscribe()
      return this.http.put<Users>(environment.api + '/api/users/' + user.id, user);
    } else {
      return this.http.post<Users>(environment.api + '/api/users/', user);
    }
  }
  public delete(index: number): Observable<Users> {
    this.http.delete<Users>(environment.api + '/api/users/' + index).subscribe();
    return this.http.delete<Users>(environment.api + '/api/users/' + index);
  }
}
