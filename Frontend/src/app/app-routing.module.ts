import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { LogoComponent } from './logo/logo.component'
import { ServicesComponent } from './services/services.component'
import { TechnologyComponent } from './technology/technology.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
  {
    path: 'logo',
    component: LogoComponent

  },
  {
    path: 'services',
    component: ServicesComponent

  },
  {
    path: 'technology',
    component: TechnologyComponent

  },
  {
    path: 'technology',
    component: TechnologyComponent

  },
  {
    path: 'contact',
    component: ContactComponent

  },

  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'signup',
    component: SignupComponent

  },
  {
    path: 'signup/:id',
    component: SignupComponent

  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
