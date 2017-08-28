# ngx-counter
Customizable counter component module for Angular 2+

## Installation

To install this library, run:

```bash
$ npm install ngx-counter --save
```

## Usage

And then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { CounterModule } from 'ngx-counter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the library as an import
    CounterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use its component in your Angular application:

```xml
<!-- You can now use the library component in app.component.html -->
<h1>
  {{title}}
</h1>
<counter></counter>
```

# Two way binding

```html
<counter [(ngModel)]="myCountValue"></counter>
```

# Params

### countValue

> type: *number*

> default: 0

```html
<counter countValue=10></counter>
<counter [countValue]="myCountValue"></counter>
```

### limit

> type: *number*

> default: countValue + 10

```html
<counter countValue=0 limit=10></counter>
<counter [countValue]="myCountValue" [limit]="myCounterLimit"></counter>
```

### speed

> type: *number*

> default: 1000 (1 second)

```html
<counter countValue=0 limit=10 speed=500></counter>
<counter [speed]="myCounterSpeed"></counter>
```

### change

> type: *event*

> default: noop

```html
<counter (change)="onCountChange($event)"></counter>
```

### size

> type: *string*

> default: medium

```html
<counter size="small"></counter>
<counter size="big"></counter>
```

## License

MIT © [Kris Nyunt](mailto:kris.nyunt@gmail.com)
