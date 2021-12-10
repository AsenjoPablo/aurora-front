import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { IBaseChipEventArgs } from 'igniteui-angular';

@Component({
    selector     : 'au-kitchen-sink-form-ignite',
    templateUrl  : './form-ignite.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FormIgniteComponent
{
    public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango'];
    public chipList = [
        {
           text: 'Country',
           id: '1',
           icon: 'place'
        },
        {
            text: 'City',
            id: '2',
            icon: 'location_city'
        },
        {
            text: 'Town',
            id: '3',
            icon: 'store'
        },
        {
            text: 'First Name',
            id: '4',
            icon: 'person_pin'
        }
    ];

    /**
     * Constructor
     */
    constructor(
        public changeDetectionRef: ChangeDetectorRef
    )
    {
    }

    chipRemoved(event: IBaseChipEventArgs): void
    {
        this.chipList = this.chipList.filter(item => item.id !== event.owner.id);
        this.changeDetectionRef.detectChanges();
    }
}
