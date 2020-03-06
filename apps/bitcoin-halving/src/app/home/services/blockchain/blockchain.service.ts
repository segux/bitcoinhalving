import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  constructor(private httpClient: HttpClient) {}

  getStats() {
    return this.httpClient
      .get<any>('https://api.blockchair.com/bitcoin/stats')
      .pipe(
        tap(response => {
          console.log(response);
        })
      );
  }
}
