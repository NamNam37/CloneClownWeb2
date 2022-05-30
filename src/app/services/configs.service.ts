import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Configs } from '../models/configs.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {

  private configs: Configs[] = [
  ];

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Configs[]> {
    return this.http.get<Configs[]>(environment.api + '/api/configs');
  }

  public findById(id: number): Observable<Configs> {
    return this.http.get<Configs>(environment.api + '/api/configs/' + id);
  }

  public findByName(configName: string): Observable<Configs[]> {
    return this.http.get<Configs[]>(environment.api + '/api/configs?name=' + configName);
  }

  public save(log: Configs): Observable<Configs> {
    if (log.id) {
      return this.http.put<Configs>(environment.api + '/api/configs/' + log.id, log);

    } else {
      return this.http.post<Configs>(environment.api + '/api/configs/', log);
    }
  }
}
