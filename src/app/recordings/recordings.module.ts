import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordingsComponent } from './recordings.component';
import { RecordingsRoutingModule } from './recordings-routing/recordings-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RecordingsRoutingModule
  ],
  declarations: [RecordingsComponent]
})
export class RecordingsModule { }
