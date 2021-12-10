
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DefaultSortingStrategy, IgxGridComponent, IgxSelectComponent, SortingDirection } from 'igniteui-angular';

/* eslint-disable @typescript-eslint/naming-convention */
enum TYPE {
    SINGLE = 'single',
    MULTI  = 'multiple'
}

@Component({
    selector     : 'au-kitchen-sink-form-ignite',
    templateUrl  : './grid-ignite.component.html',
    encapsulation: ViewEncapsulation.None
})
export class GridIgniteComponent implements OnInit
{
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    @ViewChild(IgxSelectComponent)
    public igxSelect: IgxSelectComponent;

    public data: any[];
    public sortingTypes = [{ name: 'Multiple Sort', value: TYPE.MULTI }, { name: 'Single Sort', value: TYPE.SINGLE }];
    public currentSortingType: TYPE = TYPE.SINGLE;

    /**
     * Constructor
     */
    constructor()
    {
    }

    public ngOnInit(): void {
        this.data = [
            {
                OrderID: 1,
                CategoryName: 'Beverages',
                CompanyName: 'Berglunds snabbköp',
                ShipCountry: 'Francia',
                SaleAmount: 2514,
                ShippedDate: new Date(),
            },
            {
                OrderID: 2,
                CategoryName: 'Foods',
                CompanyName: 'AM Resorts',
                ShipCountry: 'Alamánia',
                SaleAmount: 3574,
                ShippedDate: new Date(),
            },
        ];
        this.grid1.sortingExpressions = [
            {
                dir: SortingDirection.Asc, fieldName: 'CategoryName',
                ignoreCase: true, strategy: DefaultSortingStrategy.instance()
            }
        ];
    }

    public formatDate(val: Date)
    {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public removeSorting($event): void
    {
        if (this.currentSortingType === TYPE.SINGLE) {
            this.grid1.columns.forEach((col) => {
                if (!(col.field === $event.fieldName)) {
                    this.grid1.clearSort(col.field);
                }
            });
        }
    }

    public sortTypeSelection(event): void
    {
            this.grid1.clearSort();
    }
}
