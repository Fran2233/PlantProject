import { Route } from '@angular/router';

export const  routes: Route[] = [

    {
        path : 'home',
        loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent),
    },
    {
        path : '',
        redirectTo : '/home',
        pathMatch : 'full'
    },
    {
        path : '**',
        redirectTo : '/home',
    }
    
]
