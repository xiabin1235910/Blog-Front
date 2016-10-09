/**
 * Created by Ben on 8/22/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {dashboardRouting} from "./dashboard.routing";
import {NavDashboard} from "./nav.dashboard";
import {NavAboutUs} from "./content/nav.aboutus";
import {NavContent} from "./content/nav.content";
import {NavContact} from "./content/nav.contact";
import {Nav404} from "./content/nav.404";
import {NavSingle} from "./single/nav.single";

@NgModule({
    imports:      [ BrowserModule, dashboardRouting ],
    declarations: [ NavDashboard, NavContent, NavAboutUs, NavContact, Nav404, NavSingle ],
})
export class dashboardModule { }