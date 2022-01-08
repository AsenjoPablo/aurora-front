
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'common-lang-list',
    templateUrl  : './lang-list.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LangListComponent
{
    gridData: string;

    /**
     * Constructor
     */
    constructor()
    {
    }

    ngOnInit(): void
    {
        console.log("pasa 01");
        this.gridData = "adios";


        setTimeout(() => { 
            console.log("pasa 03");
            this.gridData = "hola"; 
        }, 5000);
    }
}
