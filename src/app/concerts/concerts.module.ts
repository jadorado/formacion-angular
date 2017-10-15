import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcertsComponent } from './concerts.component';
import { ConcertsRoutingModule } from './concerts-routing/concerts-routing.module';
import { ConcertsService } from './concerts.service';
import { ConcertsListComponent } from './concerts-list/concerts-list.component';

@NgModule({
  imports: [
    CommonModule,
    ConcertsRoutingModule,
  ],
  declarations: [ConcertsComponent, ConcertsListComponent],
  providers: [ConcertsService]
})
export class ConcertsModule {
}
