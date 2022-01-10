
import { ChangeDetectionStrategy, Component, Injector, ViewEncapsulation } from '@angular/core';
import { ColumnConfig, ColumnDataType, GraphQLStatementsRepository, GridData, PageChangeEvent, ViewListComponent } from '@aurora';
import { Observable } from 'rxjs';
import { Country } from '../common.types';
import { graphQL } from './country.graphql';
import { CountryService } from './country.service';

@Component({
    selector     : 'common-country-list',
    templateUrl  : './country-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
@GraphQLStatementsRepository(graphQL)
export class CountryListComponent extends ViewListComponent
{
    gridData$: Observable<GridData<Country>>;
    columnsConfig: ColumnConfig[] = [
        {
            type: ColumnDataType.ACTIONS,
            field: 'Actions',
            headerClass: 'w-32',
            sticky: true,
        },
        {
            type: ColumnDataType.STRING,
            field: 'name',
            sort: ['countryI18N', 'name'],
        },
        {
            type: ColumnDataType.STRING,
            field: 'iso3166Alpha2',
            sort: 'iso3166Alpha2',
        },
        {
            type: ColumnDataType.STRING,
            field: 'iso3166Alpha3',
            sort: 'iso3166Alpha3',
        },
        {
            type: ColumnDataType.STRING,
            field: 'iso3166Numeric',
            sort: 'iso3166Numeric',
        },
        {
            type: ColumnDataType.STRING,
            field: 'customCode',
            sort: 'customCode',
        },
        {
            type: ColumnDataType.STRING,
            field: 'image',
            sort: 'image',
        },
        {
            type: ColumnDataType.STRING,
            field: 'prefix',
            sort: 'prefix',
        },
        {
            type: ColumnDataType.STRING,
            field: 'sort',
            sort: 'sort',
        },
        {
            type: ColumnDataType.STRING,
            field: 'latitude',
            sort: 'latitude',
        },
        {
            type: ColumnDataType.STRING,
            field: 'longitude',
            sort: 'longitude',
        },
        {
            type: ColumnDataType.STRING,
            field: 'zoom',
            sort: 'zoom',
        },
    ];

    constructor(
        protected injector: Injector,
        private countryService: CountryService
    )
    {
        super(injector);
    }

    ngOnInit(): void
    {
        this.gridData$ = this.countryService.pagination$
    }

    onPageChange($event: PageChangeEvent): void
    {
        this.countryService.getPagination($event).subscribe();
    }
}
