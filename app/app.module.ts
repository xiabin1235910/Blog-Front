/**
 * Created by Ben on 8/22/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import {routing, appRoutingProviders} from "./app.routing";
import {dashboardModule} from "./nav/dashboard/dashboard.module";
import {NavFooter} from "./nav/nav.footer";
import {NavSponsor} from "./nav/nav.sponsor";
import {NavSection} from "./nav/nav.section";
import {NavHeader} from "./nav/nav.header";

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, dashboardModule, routing ],
    declarations: [ AppComponent, NavHeader, NavSection, NavSponsor, NavFooter ],
    providers: [ appRoutingProviders ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }