import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RecordingsModule } from './recordings/recordings.module';
import { GroupsModule } from './groups/groups.module';
import { ConcertsModule } from './concerts/concerts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // App modules
    LayoutModule,
    ConcertsModule,
    GroupsModule,
    RecordingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
