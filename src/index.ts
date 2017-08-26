import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';

export * from './counter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CounterModule
    };
  }
}
