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

## License

MIT © [Kris Nyunt](mailto:kris.nyunt@gmail.com)
