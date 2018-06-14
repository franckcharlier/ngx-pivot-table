import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-pivot-table',
  template: '<div #mypivottable></div>',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../node_modules/pivottable/dist/pivot.min.css',
    '../../../node_modules/subtotal/dist/subtotal.min.css']
})
export class NgxPivotTableComponent implements OnInit, OnChanges {
  @Input() public data: any;
  @Input() public useSubtotal: boolean;
  @Input() public useLocale: string;

  @ViewChild('mypivottable') mypivottable: ElementRef;
  private isPivotInit: boolean;
  private pivotConfig: any;

  ngOnInit(): void {
    System.import('script-loader!pivottable/dist/pivot.min.js').then(() => {
      System.import('script-loader!pivottable/dist/pivot.fr.min.js').then(() => { });

      System.import('script-loader!subtotal/dist/subtotal.min.js').then(() => {
        this.isPivotInit = true;
        this.pivotConfig = {};
        this.render();
      });
    });
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

      $(this.mypivottable.nativeElement).pivotUI(data, this.pivotConfig, true, this.useLocale);
    }
  }
}
