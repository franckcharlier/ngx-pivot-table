import { Component, OnInit } from '@angular/core';
import { MockDataService } from './mocks/mock-data.service';
import { PapaParseService } from 'ngx-papaparse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public mydata: any;
  public sub: boolean;
  public locale: string;

  constructor(private mockService: MockDataService, private papa: PapaParseService) { }

  ngOnInit(): void {
    this.getMockCsv();
  }

  public getMockCsv() {
    this.mockService.getMockCsv()
      .subscribe(res => {
        this.papa.parse(res._body, {
          header: true,
          complete: (results, file) => {
            this.mydata = results.data;
          }
        });
      });
  }
}
