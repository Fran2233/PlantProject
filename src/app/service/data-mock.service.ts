import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataMockService {
  private http = inject(HttpClient);
  private jsonUrl = 'assets/dataMock.json';
  constructor() { }

  getPlants(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
