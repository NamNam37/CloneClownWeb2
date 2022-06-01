import { Injectable } from '@angular/core';
import {Logs} from "../models/logs.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  private logs: Logs[] = [
  ];

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Logs[]> {
    return this.http.get<Logs[]>(environment.api + '/api/logs');
  }

  public findById(id: number): Observable<Logs> {
    return this.http.get<Logs>(environment.api + '/api/logs/' + id);
  }

  public save(log: Logs): Observable<Logs> {
    if (log.id) {
      return this.http.put<Logs>(environment.api + '/api/logs/' + log.id, log);

    } else {
      return this.http.post<Logs>(environment.api + '/api/logs/', log);
    }
  }

  public delete(index: number): void {
    this.http.delete<Logs>(environment.api + '/api/logs/' + index).subscribe();
  }
  public deleteAll(): void {
    this.http.delete<Logs>(environment.api + '/api/logs/' + 1 + "?removeAll=true").subscribe();
  }
}
