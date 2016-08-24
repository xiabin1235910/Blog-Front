/**
 * Created by Ben on 8/22/2016.
 */
import { Component, AfterContentInit } from '@angular/core';
import {NavFooter} from "./nav/nav.footer";
import {NavHeader} from "./nav/nav.header";
import {NavSection} from "./nav/nav.section";
import {NavSponsor} from "./nav/nav.sponsor";
declare var jQuery:any;

@Component({
    selector: 'my-blog',
    template: `
        <nav-header></nav-header>
        <nav-section></nav-section>
        <!--<nav-dashborad></nav-dashborad>-->
        <router-outlet></router-outlet>
        <nav-sponsor></nav-sponsor>
        <nav-footer></nav-footer>
    `,
    directives: [NavHeader, NavSection, NavSponsor, NavFooter]
})
export class AppComponent implements AfterContentInit{

    ngAfterContentInit() {
        let createTag = function() {
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'plugins/js/app.js';
            document.body.appendChild(script);
        };
        console.log("create_teg...................")
        createTag();
    }
    
}