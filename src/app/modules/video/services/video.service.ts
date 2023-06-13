import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ApiResult } from '../models/api-result.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  search(query: string): Observable<ApiResult> {
    return this.http.get(environment.apiUrl+'search/video?q='+query).pipe(
      map(res => res as ApiResult)
    )
  }
}
