import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcertsComponent } from './concerts.component';
import { ConcertsRoutingModule } from './concerts-routing/concerts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ConcertsRoutingModule,
  ],
  declarations: [ConcertsComponent]
})
export class ConcertsModule {
}
