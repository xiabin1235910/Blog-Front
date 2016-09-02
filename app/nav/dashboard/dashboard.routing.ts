/**
 * Created by Ben on 8/24/2016.
 */
import {Routes, RouterModule} from '@angular/router';
import {NavDashboard} from "./nav.dashboard";
import {NavContent} from "./content/nav.content";
import {NavAboutUs} from "./content/nav.aboutus";
import {NavContact} from "./content/nav.contact";
import {Nav404} from "./content/nav.404";

const dashboardRoutes:Routes = [
    {
        path: 'dashboard',
        component: NavDashboard,
        children: [
            {
                path: 'content',
                component: NavContent
            },
            {
                path: 'aboutus',
                component: NavAboutUs
            },
            {
                path: 'contact',
                component: NavContact
            },
            {
                path: '404',
                component: Nav404
            },
            {
                path: '',
                component: NavContent
            }
        ]
    }
];

export const dashboardRouting = RouterModule.forChild(dashboardRoutes);