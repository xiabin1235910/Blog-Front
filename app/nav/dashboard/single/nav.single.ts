/**
 * Created by Ben on 10/9/2016.
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {BlogService} from "../../../service/blog.service";
import {Blog} from "../../../model/blog";
@Component({
    selector: 'nav-single',
    templateUrl: 'app/nav/dashboard/single/nav.single.html',
    providers: [BlogService]
})
export class NavSingle implements OnInit {
    blog: Blog = new Blog('hello world...');

    constructor(private blogService: BlogService,
                private route: ActivatedRoute){
    }

    ngOnInit() {

        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // transfer to number
            this.blogService.getBlogs(id).subscribe(
                (data) => {
                    this.blog.setBlog(data[0]);
                },
                (error)=> {
                    console.log(error)
                }
            );
        });


    }
}