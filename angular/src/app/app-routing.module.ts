import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { TopscoreComponent } from './topscore/topscore.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: TopscoreComponent },
  { path: 'details', component: DetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
