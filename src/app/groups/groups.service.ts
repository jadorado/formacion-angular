import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Group } from './group';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class GroupsService {

  constructor(private http: HttpClient) { }

  getGroups(): Observable<Group[]> {

    return this.http.get<Group[]>(`${environment.apiUrl}/groups`)
               .map(groups => groups.map(group => new Group(group)));
  }
}
