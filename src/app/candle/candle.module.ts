import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandleComponent } from './candle.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [CandleComponent],
  imports: [BrowserModule, CommonModule],
  bootstrap: [],
  entryComponents: [CandleComponent],
})
export class CandleModule implements DoBootstrap {
  constructor(private injector: Injector) {}
  ngDoBootstrap(appRef: ApplicationRef): void {
    const customElement = createCustomElement(CandleComponent, {
      injector: this.injector,
    });
    customElements.define('candle-component', customElement);
  }
}
