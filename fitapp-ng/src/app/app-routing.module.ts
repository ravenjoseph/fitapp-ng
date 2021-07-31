import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MealPlansComponent } from './meal-plans/meal-plans.component';
import { MembershipComponent } from './membership/membership.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WorkoutProgramsComponent } from './workout-programs/workout-programs.component';

const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'memberships-plans',
    component: MembershipComponent
  },
  {
    path: 'workout-programs',
    component: WorkoutProgramsComponent
  },
  {
    path: 'meal-plans',
    component: MealPlansComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
