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

  public GetCount(): Observable<number> {
    return this.http.get<number>(environment.api + '/api/configs/dashboard/config-count');
  }

  public GetAvgBackup(): Observable<string> {
    return this.http.get(environment.api + '/api/configs/dashboard/average-last-backup', {responseType: 'text'});
  }

  public GetAvgConfigs(): Observable<number> {
    return this.http.get<number>(environment.api + '/api/configs/dashboard/avg-configs');
  }
  
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
  public delete(index: number): Observable<Configs> {
    this.http.delete<Configs>(environment.api + '/api/configs/' + index).subscribe();
    return this.http.delete<Configs>(environment.api + '/api/configs/' + index);
  }
}
