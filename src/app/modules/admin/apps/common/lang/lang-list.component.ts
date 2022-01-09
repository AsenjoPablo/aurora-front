
import { ChangeDetectionStrategy, Component, Injector, ViewEncapsulation } from '@angular/core';
import { ColumnConfig, ColumnDataType, GraphQLStatementsRepository, GridData, ViewListComponent } from '@aurora';
import { Observable } from 'rxjs';
import { Lang } from '../common.types';
import { graphQL } from './lang.graphql';

@Component({
    selector     : 'common-lang-list',
    templateUrl  : './lang-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
@GraphQLStatementsRepository(graphQL)
export class LangListComponent extends ViewListComponent
{
    gridData$: Observable<GridData<Lang>>;
    columnsConfig: ColumnConfig[] = [
        {
            type: ColumnDataType.STRING,
            field: 'name',
        },
        {
            type: ColumnDataType.STRING,
            field: 'ietf',
        }
    ];

    constructor(
        protected injector: Injector
    )
    {
        super(injector);
    }

    ngOnInit(): void
    {
        super.ngOnInit();
    }
}
