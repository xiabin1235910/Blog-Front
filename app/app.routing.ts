/**
 * Created by Ben on 8/23/2016.
 */
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const blogRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders  = RouterModule.forRoot(blogRoutes);