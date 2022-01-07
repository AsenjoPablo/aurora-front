import { Directive, Injector, OnInit } from '@angular/core';
import { log } from '@aurora';
import { ViewBaseComponent } from './view-base.component';
@Directive()
export class ViewListComponent extends ViewBaseComponent implements OnInit
{
    constructor(
        protected injector: Injector,
    )
    {
        super(injector);
    }

    ngOnInit(): void
    {

    }

    getGridData(): void
    {
        /* const observable = this.graphqlService
            .client()
            .watchQuery({
                query: graphQL.queryObjects,
                variables: {}
            })
            .valueChanges
            .pipe(
                first()
            ); */
    }
}
