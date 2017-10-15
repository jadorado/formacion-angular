import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Concert } from './concert';
import { environment } from '../../environments/environment';

@Injectable()
export class ConcertsService {

  constructor(private http: HttpClient) { }

  getConcerts(): Observable<Concert[]> {

    return this.http.get<Concert[]>(`${environment.apiUrl}/concerts`);
  }
}
