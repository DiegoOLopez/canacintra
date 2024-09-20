import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './pages/index/index.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeInversorComponent } from './pages/home-inversor/home-inversor.component';

import { HomeNegocioComponent } from './pages/home-negocio/home-negocio.component';

import { RegisterComponent } from './pages/register/register.component';


export const routes: Routes = [
    {
        path: '', component: AppComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'index', component: IndexComponent
    },
    {
        path: 'navbar', component: NavbarComponent
    },
    {
        path: 'footer', component: FooterComponent
    },
    {
        path: 'HomeInversor', component: HomeInversorComponent
    },
    {
       path: 'homenegocio', component: HomeNegocioComponent
    },
    {
        path: 'register', component: RegisterComponent
    }
];
