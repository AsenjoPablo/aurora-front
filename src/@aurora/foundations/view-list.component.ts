import { Directive, Injector, OnInit } from '@angular/core';
import { GridData, log } from '@aurora';
import { first, map, Observable } from 'rxjs';
import { ViewBaseComponent } from './view-base.component';

@Directive()
export class ViewListComponent extends ViewBaseComponent
{
    

    constructor(
        protected injector: Injector,
    )
    {
        super(injector);
    }

    ngOnInit(): void
    {
        // this.getGridData();
    }

    /* async getGridData()
    {
        this.gridData$ = this.graphqlService
            .client()
            .watchQuery<{ corePagination: GridData; }>({
                query: this.graphQLStatements.queryPagination,
                variables: {}
            })
            .valueChanges
            .pipe(map<{ data: { corePagination: GridData; }}, GridData>(result => result.data.corePagination));
    } */
}
