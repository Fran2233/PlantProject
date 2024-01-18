import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataMockService {
  private jsonUrl = 'assets/dataMock.json';
  constructor(private http: HttpClient) { }

  getPlants(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
