import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcertsComponent } from './concerts.component';
import { ConcertsRoutingModule } from './concerts-routing/concerts-routing.module';
import { ConcertsService } from './concerts.service';
import { ConcertsListComponent } from './concerts-list/concerts-list.component';
import { SharedModule } from '../shared/shared.module';
import { ConcertsFormComponent } from './concerts-form/concerts-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ConcertsRoutingModule,
    SharedModule
  ],
  declarations: [ConcertsComponent, ConcertsListComponent, ConcertsFormComponent],
  providers: [ConcertsService]
})
export class ConcertsModule {
}
