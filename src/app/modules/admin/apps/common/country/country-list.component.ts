
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
            type: ColumnDataType.STRING,
            field: 'name',
        },
        {
            type: ColumnDataType.STRING,
            field: 'iso3166Alpha2',
        }
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
