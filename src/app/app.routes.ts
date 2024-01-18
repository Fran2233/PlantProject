import { Route } from '@angular/router';

export const  routes: Route[] = [

    {
        path : '',
        children : [
            {path: 'home', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent)},
            {
                path : '**',
                redirectTo : 'home'
            },
        ]
    }
    
]
