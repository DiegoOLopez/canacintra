import {RouterModule,  Routes } from '@angular/router';
//import { NgModule,importProvidersFrom } from '@angular/core';
//import { provideHttpClient, withInterceptors } from '@angular/common/http'; // Asegúrate de tenerlo importado
//import { bootstrapApplication } from '@angular/platform-browser';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './pages/index/index.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeInversorComponent } from './pages/home-inversor/home-inversor.component';

import { HomeNegocioComponent } from './pages/home-negocio/home-negocio.component';

import { RegisterComponent } from './pages/register/register.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { NavbarsesionComponent } from './pages/navbarsesion/navbarsesion.component';

import { authGuard } from './auth.guard';

// AuthGuard sirve para reservar un sitio si no esta autenticado

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
        path: 'HomeInversor', component: HomeInversorComponent, canActivate: [authGuard]
    },
    {
       path: 'Homenegocio', component: HomeNegocioComponent, canActivate: [authGuard]
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'contacto', component: ContactoComponent
    },
    {
        path: 'formulario', component: FormularioComponent
    },
    {
        path: 'homeadmin', component: HomeAdminComponent, canActivate: [authGuard]
    },
    {
        path: 'recuperar', component: RecuperarComponent
    },
    {
        path: 'navbarsesion', component: NavbarsesionComponent
    }
];

/**

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}

bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(RouterModule.forRoot(routes)),
      provideHttpClient()
    ]
  }).catch((err: unknown) => console.error(err));
   */