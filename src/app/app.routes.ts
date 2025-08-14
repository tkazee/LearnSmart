import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', 
        loadChildren:()=> import('./components/home/home.component').then(m => m.HomeComponent)
     },

    {
        path:'*', redirectTo: '/home'
    },

];
