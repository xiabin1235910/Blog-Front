/**
 * Created by Ben on 8/23/2016.
 */
import { Routes, RouterModule } from '@angular/router';

const blogRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(blogRoutes);