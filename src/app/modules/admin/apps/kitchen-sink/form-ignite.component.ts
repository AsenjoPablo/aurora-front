import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'au-kitchen-sink-form-ignite',
    templateUrl  : './form-ignite.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FormIgniteComponent
{
    public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango'];

    /**
     * Constructor
     */
    constructor()
    {
    }
}
