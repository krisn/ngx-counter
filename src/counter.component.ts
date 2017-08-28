import { Component, Input, Output, EventEmitter, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'counter',
  template: `
<div class="ct-wrap ct-anim"
  [class.blink]="blink"
  [class.border-top]="circuit === 0"
  [class.border-right]="circuit === 1"
  [class.border-bottom]="circuit === 2"
  [class.border-left]="circuit === 3"
  [class.small]="size == 'small'"
  [class.medium]="size == 'medium'"
  [class.big]="size == 'big'"
  [class.large]="size == 'large'"
  >
  <div class="ct-count"
    [class.ct-1x]="size == 'small'"
    [class.ct-2x]="size == 'medium'"
    [class.ct-3x]="size == 'big'"
    [class.ct-4x]="size == 'large'"
    [style.font-family]="font"
  >
    {{countValue}}
  </div>
</div>
  `,
  styles: [`
.ct-wrap {
  display: inline-block;
  background-color: #d6f0f9;
  color: blue;
  border-radius: 50%;
  border-style: solid;
  border-color: #d6f0f9;
  border-width: 5px;
  width: 50px;
  height: 50px;
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

.ct-anim {
  -webkit-transition: background-color 250ms, border-top-color 250ms, border-bottom-color 250ms, border-right-color 250ms, border-left-color 250ms;
  transition: background-color 250ms, border-top-color 250ms, border-bottom-color 250ms, border-right-color 250ms, border-left-color 250ms;
}

.blink {
  background-color: #c0d0f0;
}

.border-top {
  border-top-color: #0000e0;
}

.border-right {
  border-right-color: #0000e0;
}

.border-bottom {
  border-bottom-color: #0000e0;
}

.border-left {
  border-left-color: #0000e0;
}

.ct-count {
  font-family: Arial;
  position: relative;
  text-align: center;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
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
}
