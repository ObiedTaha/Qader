import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { VolunterComponent } from './components/volunter/volunter.component';
import { NewVolunComponent } from './components/new-volun/new-volun.component';
import { QuestionComponent } from './components/question/question.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'volunter', component: VolunterComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'new-volun', component: NewVolunComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'user', component: UserComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
