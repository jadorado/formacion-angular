import { LayoutComponent } from '../layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '', component: LayoutComponent, data: { title: 'MusikApp' }, children:
    [
      { path: '', pathMatch: 'full', redirectTo: '/concerts' },
      { path: 'concerts', loadChildren: 'app/concerts/concerts.module#ConcertsModule' },
      { path: 'groups', loadChildren: 'app/groups/groups.module#GroupsModule' },
      { path: 'recordings', loadChildren: 'app/recordings/recordings.module#RecordingsModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule {
}
