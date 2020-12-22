import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupComponent } from './pages/setup/setup.component';
import { NewActivityComponent } from './pages/new-activity/new-activity.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/setup' },
  { path: 'new', component: NewActivityComponent},
  { path: 'main', pathMatch: 'full', redirectTo: '/main/myActivity' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
