
import { ChangeDetectionStrategy, Component, Injector, ViewEncapsulation } from '@angular/core';
import { ColumnConfig, ColumnDataType, GraphQLStatementsRepository, ViewListComponent } from '@aurora';
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

    /**
     * Constructor
     */
    constructor(
        protected injector: Injector
    )
    {
        super(injector);
    }
}
