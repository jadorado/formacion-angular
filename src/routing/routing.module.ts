import { LayoutComponent } from '../app/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConcertsComponent } from '../app/concerts/concerts.component';
import { GroupsComponent } from '../app/groups/groups.component';
import { RecordingsComponent } from '../app/recordings/recordings.component';

const ROUTES = [
  {
    path: '', component: LayoutComponent, data: { title: 'MusikApp' }, children:
    [
      { path: '', pathMatch: 'full', redirectTo: '/concerts' },
      { path: 'concerts', component: ConcertsComponent },
      { path: 'groups', component: GroupsComponent },
      { path: 'recordings', component: RecordingsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule {
}

