import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { RoutingModule } from '../../routing/routing.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RoutingModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule {}
