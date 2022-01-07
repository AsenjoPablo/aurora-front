import { Directive, Injector, OnInit } from '@angular/core';
import { GridDataResult, log } from '@aurora';
import { first, lastValueFrom, take } from 'rxjs';
import { ViewBaseComponent } from './view-base.component';
@Directive()
export class ViewListComponent extends ViewBaseComponent
{
    gridData: string;

    constructor(
        protected injector: Injector,
    )
    {
        super(injector);
    }

   /*  ngOnInit(): void
    {
        this.getGridData();
    }

    async getGridData()
    {
        log('[DEBUG] ');

        const observable = this.graphqlService
            .client()
            .watchQuery<{corePagination: GridDataResult}>({
                query: this.graphQLStatements.queryObjectPagination,
                variables: {}
            })
            .valueChanges
            .pipe(take(1));
            .subscribe(result => {
                console.log(result.data.corePagination);
                this.gridData = result.data.corePagination;
            }); 

            this.gridData = (await lastValueFrom(observable)).data.corePagination;

            console.log(this.gridData);
    } */
}
