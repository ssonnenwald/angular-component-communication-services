import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Contact } from '../../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactDataService {
  private http: HttpClient = inject(HttpClient);
  private apiUrl = 'api/items'; // URL to in-memory web API

  public constructor() {}

  getContacts(): Observable<Contact[]> {
    return this.http
      .get<Contact[]>(this.apiUrl)
      .pipe(catchError(this.handleError<any>('getContacts', [])));
  }

  getContact(id: number): Observable<Contact> {
    const url = `${this.apiUrl}/${id}`;

    return this.http
      .get<Contact>(url)
      .pipe(catchError(this.handleError<any>(`getContact id=${id}`)));
  }

  addContact(contact: Contact): Observable<any> {
    return this.http
      .post<Contact>(this.apiUrl, contact)
      .pipe(catchError(this.handleError<any>('addContact')));
  }

  updateContact(contact: Contact): Observable<any> {
    return this.http
      .put(this.apiUrl, contact)
      .pipe(catchError(this.handleError<any>('updateContact')));
  }

  deleteContact(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;

    return this.http
      .delete<any>(url)
      .pipe(catchError(this.handleError<any>('deleteContact')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
