import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-pivot-table',
  template: '<div #ngxpivottable></div>'
})
export class NgxPivotTableComponent implements OnInit, OnChanges {
  @Input() public data: any;
  @Input() public useSubtotal: boolean;
  @Input() public useLocale: string;

  @ViewChild('ngxpivottable') ngxpivottable: ElementRef;
  private isPivotInit: boolean;
  private pivotConfig: any;

  ngOnInit(): void {
    this.isPivotInit = true;
    this.pivotConfig = {};
    this.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data || changes.useSubtotal || changes.useLocale) {
      this.render();
    }
  }

  private render() {
    if (this.isPivotInit) {
      const data = this.data ? this.data : [];

      this.pivotConfig.dataClass = this.useSubtotal ? $.pivotUtilities.SubtotalPivotData : undefined;
      this.pivotConfig.renderers = this.useSubtotal ? $.pivotUtilities.subtotal_renderers : undefined;

      $(this.ngxpivottable.nativeElement).pivotUI(data, this.pivotConfig, true, this.useLocale);
    }
  }
}
