import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInterceptor } from './http/log.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true }
  ]
})
export class CoreModule {
}
