import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PapaParseService } from 'ngx-papaparse';

@Injectable()
export class MockDataService {

  constructor(private http: Http) { }

  public getMockCsv(): Observable<any> {
    return this.http.get('assets/MOCK_DATA.csv');
  }
}
