import { Directive, Injector, OnInit } from '@angular/core';
import { GridDataResult, log } from '@aurora';
import { first } from 'rxjs';
import { ViewBaseComponent } from './view-base.component';
@Directive()
export class ViewListComponent extends ViewBaseComponent
{
    gridData: GridDataResult;

    constructor(
        protected injector: Injector,
    )
    {
        super(injector);
    }

    ngOnInit(): void
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
            .pipe(first())
            .subscribe(result =>
            {
                this.gridData = result.data.corePagination;
            });
    }
}
