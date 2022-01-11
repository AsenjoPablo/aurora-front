
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ActionEvent, ColumnConfig, ColumnDataType, GraphQLStatementsRepository, GridAction, GridData, PageChangeEvent, ViewListComponent } from '@aurora';
import { RouteRepositoryService } from '@aurora/routing/route-repository.service';
import { Observable } from 'rxjs';
import { Country } from '../common.types';
import { CountryService } from './country.service';

@Component({
    selector     : 'common-country-list',
    templateUrl  : './country-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryListComponent
{
    gridData$: Observable<GridData<Country>>;
    columnsConfig: ColumnConfig[] = [
        {
            type: ColumnDataType.ACTIONS,
            field: 'Actions',
            headerClass: 'w-32',
            sticky: true,
            actions: () =>
            {
                return [
                    {
                        id: 'edit',
                        icon: 'mode_edit',
                        title: 'Edit',
                    }
                ];
            }
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
        private router: Router,
        private countryService: CountryService
    ) {}

    ngOnInit(): void
    {
        this.gridData$ = this.countryService.pagination$
    }

    onPageChange($event: PageChangeEvent): void
    {
        this.countryService.getPagination($event).subscribe();
    }

    onRunAction(event: GridAction)
    {
        switch (event.action.action.id)
        {
            case 'edit':
                this.router.navigate(['common/country', event.action.data.id]);
                break;
        }
    }
}
