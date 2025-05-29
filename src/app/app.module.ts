import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationComponent } from './components/location/location.component';
import { AimsComponent } from './components/aims/aims.component';
import { PlatformComponent } from './components/platform/platform.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VolunterComponent } from './components/volunter/volunter.component';
import { NewVolunComponent } from './components/new-volun/new-volun.component';
import { QuestionComponent } from './components/question/question.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    FooterComponent,
    LocationComponent,
    AimsComponent,
    PlatformComponent,
    VolunterComponent,
    NewVolunComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
