import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RoutingModule } from './routing/routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,

    // Routes
    RoutingModule,

    // App modules
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
