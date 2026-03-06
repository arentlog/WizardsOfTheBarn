import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScryfallService {
  private baseUrl = 'https://api.scryfall.com';
	private cachedCommanders?: any;

  constructor(private http: HttpClient) {}

  // Get all commanders
  getCommanders(): Observable<any> {
		if (this.cachedCommanders) {
      return of(this.cachedCommanders);
    }

		// Only gets 175 cards of the 3000+
    const url = `${this.baseUrl}/cards/search?q=${encodeURIComponent('is:commander')}`;
    return this.http.get<any>(url).pipe(
      tap(result => this.cachedCommanders = result)
    );
  }

	autocomplete(query: string) {
  	const url = `${this.baseUrl}/cards/autocomplete?q=${encodeURIComponent(query)}`;
  	return this.http.get<any>(url);
	}
}