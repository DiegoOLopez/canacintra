import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Inyectar el Router
  const token = localStorage.getItem('token'); // Verifica si hay token
  const userType = localStorage.getItem('tipo'); // Obtén el tipo de usuario

  if (!token) {
    router.navigate(['/login']); // Redirigir si no hay token
    return false;
  }

  const requestedRoute = route.url[0].path;

  // Lógica de control de acceso
  if (userType === 'admin') {
    if (requestedRoute === 'homeadmin') {
      return true; // Permitir acceso a Homeadmin
    } else {
      router.navigate(['/homeadmin']); // Redirigir si intenta acceder a otras páginas
      return false;
    }
  } else if (userType === 'inversor' || userType === 'emprendedor') {
    if (requestedRoute === 'HomeInversor' || requestedRoute === 'Homenegocio') {
      return true; // Permitir acceso a HomeInversor y Homenegocio
    } else {
      router.navigate(['/HomeInversor']); // Redirigir si intenta acceder a Homeadmin
      return false;
    }
  }

  router.navigate(['/login']); // Redirigir si no coincide con ningún tipo
  return false;
};
