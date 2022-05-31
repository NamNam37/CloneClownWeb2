import { Injectable } from '@angular/core';
import {Admins} from "../models/admins.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  private admins: Admins[] = [
  ];

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Admins[]> {
    return this.http.get<Admins[]>(environment.api + '/api/Admins');
  }

  public findByName(username: string): Observable<Admins[]> {
    return this.http.get<Admins[]>(environment.api + '/api/admins?name=' + username);
  }

  public findById(id: number): Observable<Admins> {
    return this.http.get<Admins>(environment.api + '/api/Admins/' + id);
  }

  public save(admin: Admins): Observable<Admins> {
    if (admin.id) {
      return this.http.put<Admins>(environment.api + '/api/Admins/' + admin.id, admin);

    } else {
      return this.http.post<Admins>(environment.api + '/api/Admins/', admin);
    }
  }
}
