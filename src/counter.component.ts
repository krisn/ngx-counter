import { Component, Input, Output, EventEmitter, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-counter',
  template: `
<div class="ct-wrap ct-anim"
  [class.blink]="blink"
  [class.small]="size == 'small'"
  [class.medium]="size == 'medium'"
  [class.big]="size == 'big'"
  [class.large]="size == 'large'"
  [class.xl]="size == 'xl'"
  [style.color]="color"
  [style.background-color]="bgcolor"
  [style.border-top-color]="circuit === 0 ? getColor() : bgcolor"
  [style.border-right-color]="circuit === 1 ? getColor() : bgcolor"
  [style.border-bottom-color]="circuit === 2 ? getColor() : bgcolor"
  [style.border-left-color]="circuit === 3 ? getColor() : bgcolor"
  >
  <div class="ct-count"
    [class.ct-1x]="size == 'small'"
    [class.ct-2x]="size == 'medium'"
    [class.ct-3x]="size == 'big'"
    [class.ct-4x]="size == 'large'"
    [class.ct-5x]="size == 'xl'"
    [style.font-family]="font"
  >
    {{countValue}}
  </div>
</div>
  `,
  styles: [`
.ct-wrap {
  display: inline-block;
  /*background-color: #d6f0f9;*/
  color: blue;
  border-radius: 50%;
  border-style: solid;
  border-color: #d6f0f9;
}

.small {
  border-width: 3px;
  width: 40px;
  height: 40px;
}

.medium {
  border-width: 5px;
  width: 50px;
  height: 50px;
}

.big {
  border-width: 7px;
  width: 60px;
  height: 60px;
}

.large {
  border-width: 9px;
  width: 70px;
  height: 70px;
}

.xl {
  border-width: 10px;
  width: 80px;
  height: 80px;
}

.ct-anim {
  -webkit-transition: background-color 250ms, border-top-color 250ms, border-bottom-color 250ms, border-right-color 250ms, border-left-color 250ms;
  transition: background-color 250ms, border-top-color 250ms, border-bottom-color 250ms, border-right-color 250ms, border-left-color 250ms;
}

.blink {
  background-color: #fcfcfc !important;
}

.ct-count {
  font-family: monospace;
  position: relative;
  text-align: center;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.ct-5x {
  font-size: 48px;
  font-weight: bold;
}

.ct-4x {
  font-size: 40px;
  font-weight: bold;
}

.ct-3x {
  font-size: 32px;
  font-weight: bold;
}

.ct-2x {
  font-size: 24px;
  font-weight: bold;
}

.ct-1x {
  font-size: 16px;
  font-weight: bold;
}
  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterComponent),
      multi: true
    }
  ]
})
export class CounterComponent implements ControlValueAccessor, OnInit {

  @Output() change = new EventEmitter<number>();
  @Input() font: string = 'monospace';
  @Input() theme: string;
  @Input() color: string = 'blue';
  @Input() bgcolor: string = '#d6f0f9';
  @Input() size: string = 'medium';
  @Input() speed: number = 1000;
  @Input() limit: number;
  private _countValue = 0;
  @Input() set countValue(val) {
    this._countValue = val;
    this.propagateChange(this._countValue);
  }
  get countValue() {
    return this._countValue;
  }

  blink: boolean;
  circuit: number;
  private timer: any;

  constructor() {}

  ngOnInit() {
    this.blink = false;
    this.circuit = -1;
    this.limit = this.limit !== undefined ? this.limit : this.countValue + 10;

    switch (this.theme) {
      case 'red':
        this.color = 'red';
        this.bgcolor = '#fff0f0';
        break;
      case 'green':
        this.color = 'green';
        this.bgcolor = '#e0fff0';
        break;
      case 'gray':
        this.color = 'gray';
        this.bgcolor = '#f0f0f0';
        break;
      default:
        break;
    }

    this.timer = setInterval(() => {
      if (this.countValue >= this.limit) {
        this.blink = false;
        this.circuit = -1;
        clearInterval(this.timer);
        return;
      }
      this.circuit++;
      if (this.circuit > 3) { this.circuit = 0; }
      this.blink = this.circuit === 1 || this.circuit === 3 ? !this.blink : this.blink;
      if (this.circuit === 0) {
        this.countValue++;
        this.change.emit(this.countValue);
      }
    }, this.speed / 4);
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.countValue = value;
    }
  }

  private propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  getColor() {
    return this.color;
  }
}
