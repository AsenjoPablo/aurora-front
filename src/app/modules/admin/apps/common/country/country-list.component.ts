
import { ChangeDetectionStrategy, Component, Injector, ViewEncapsulation } from '@angular/core';
import { ColumnConfig, ColumnDataType, GraphQLStatementsRepository, ViewListComponent } from '@aurora';
import { graphQL } from './country.graphql';

@Component({
    selector     : 'common-country-list',
    templateUrl  : './country-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
@GraphQLStatementsRepository(graphQL)
export class CountryListComponent extends ViewListComponent
{
    columnsConfig: ColumnConfig[] = [
        {
            type: ColumnDataType.STRING,
            field: 'name',
        },
        {
            type: ColumnDataType.STRING,
            field: 'iso3166Alpha2',
        }
    ];

    constructor(
        protected injector: Injector
    )
    {
        super(injector);
    }
}
