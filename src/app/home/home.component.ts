import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../service/dataService'
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [DataService]
})


export class HomeComponent implements OnInit {



    ngOnInit() {
        //  this.getDataCIK("0000861838");
        // this.value = "000";
    }

    stateCtrl: FormControl;
    value: any;

    autoCompleteNames: any;

    constructor(public router: Router, public dataService: DataService) {
        this.stateCtrl = new FormControl();

        this.value = this.stateCtrl.valueChanges
            .startWith(null)
            .map(name => this.getDataCIK(name));
    }


    getDataCIK(key: string) {
        var item = [];
        this.dataService.getCIKandName(key)
            .subscribe(
            data => {
                data._body != "" ? item.push(data._body) : null;
            },
            err => {
                console.log("error data");
            }
            ,
            () => {

            }
            );
        return item ? item : null;

    }


}
