import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'', loadComponent: () =>
      import('./layouts/auth-layout/auth-layout.component')
      .then((c)=> c.AuthLayoutComponent
    ),
      children: [
        {path: '', redirectTo: 'login', pathMatch: 'full'
        },
        {path: 'login', loadComponent: () =>
          import('./pages/login/login.component')
          .then((c) => c.LoginComponent),
        },
        {path: 'register', loadComponent: () =>
          import('./pages/register/register.component')
          .then((c) => c.RegisterComponent),
        },

      ]
    },
    {
      path:'user' , loadComponent: () =>
        import('./layouts/user-layout/user-layout.component')
      .then((c)=> c.UserLayoutComponent),
    }
];
