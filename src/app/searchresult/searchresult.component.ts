import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-searchresult',
    templateUrl: './searchresult.component.html',
    styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() { }


}
