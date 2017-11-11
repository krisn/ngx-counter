# ngx-counter

Customizable counter component for Angular 2+

[![npm version](https://badge.fury.io/js/ngx-counter.svg)](https://badge.fury.io/js/ngx-counter)
[![license](https://img.shields.io/npm/l/ngx-counter.svg)](https://www.npmjs.com/package/ngx-counter)

## Installation

[![NPM](https://nodei.co/npm/ngx-counter.png?downloads=true&stars=true)](https://nodei.co/npm/ngx-counter/)

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
<ngx-counter></ngx-counter>
```

## Model binding

```html
<ngx-counter [(ngModel)]="myCountValue"></ngx-counter>
```

## Parameters

Parameter | Type | Default | Description 
--- | --- | --- | ---
**countValue** | *number* | `0` | Count value that will be incremented
**limit** | *number* | `countValue + 10` | Limit where counting will stop 
**speed** | *number* | `1000` | Speed of the counter in milli-seconds
**change** | *event* | `noop` | The callback function for each count change
**size** | *string* | `medium` | Size of the counter display 'small', 'medium', 'big', 'large', 'xl' 
**font** | *string* | `monospace` | Font family to use
**theme** | *string* | `blue` | Color theme 'blue', 'red', 'green', 'gray'
**color** | *string* | `blue` | Main color for the number and the border (if no theme specified)
**bgcolor** | *string* | `#d6f0f9` | Background color to use (if no theme specified)


## Examples

```html
<ngx-counter [(ngModel)]="counterStart" [limit]=10 size="small" theme="red"></ngx-counter>
<ngx-counter [countValue]=1 [limit]=10 font="cursive" theme="green"></ngx-counter>
<ngx-counter [countValue]=0 [speed]=1000 size="big" (change)="counterChanged($event)"></ngx-counter>
<ngx-counter [countValue]=-1 [limit]=counterFinish size="large" font="Arial" theme="gray"></ngx-counter>
<ngx-counter countValue=-2 limit=10 size="xl" color="gold" bgcolor="#F5F5DC"></ngx-counter>
```

[![ngx-counter](https://user-images.githubusercontent.com/351126/29777124-3bbe137a-8c4e-11e7-9918-71f2fbb1ac6a.png)](https://github.com/krisn/ngx-counter)

## License

MIT © [Kris Nyunt](mailto:kris.nyunt@gmail.com)
