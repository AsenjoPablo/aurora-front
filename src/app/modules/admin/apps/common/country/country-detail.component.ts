
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ActionEvent, ColumnConfig, ColumnDataType, GraphQLStatementsRepository, GridAction, GridData, PageChangeEvent, ViewListComponent } from '@aurora';
import { Observable } from 'rxjs';
import { Country } from '../common.types';
import { CountryService } from './country.service';

@Component({
    selector     : 'common-country-detail',
    templateUrl  : './country-detail.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryDetailComponent
{
    constructor(
        private router: Router,
        private countryService: CountryService,
    ) {}

    ngOnInit(): void
    {

    }
}
