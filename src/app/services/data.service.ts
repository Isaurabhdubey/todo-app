import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../apiModels/user.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getPosts(): Observable<User[]> {
    // API request logic
    return this.http.get<User[]>('/api/userDetails').pipe(
      catchError((error) => {
        // Handle the error and optionally log it
        console.error('API Error:', error);
        return throwError('Something went wrong. Please try again later.');
      })
    );
  }

  createPost(newPost: User): Observable<User> {
    // API request logic
    return this.http.post<User>(`${this.apiUrl}userDetails`, newPost, {}).pipe(
      catchError((error) => {
        // Handle the error and optionally log it
        console.error('API Error:', error);
        return throwError('Something went wrong. Please try again later.');
      })
    );
  }
}
