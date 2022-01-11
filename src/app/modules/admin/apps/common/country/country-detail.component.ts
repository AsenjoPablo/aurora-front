
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActionEvent, ColumnConfig, ColumnDataType, GraphQLStatementsRepository, GridAction, GridData, PageChangeEvent, ViewListComponent } from '@aurora';
import { first, Observable, tap } from 'rxjs';
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
    fg: FormGroup;
    country$: Observable<Country>;

    constructor(
        private router: Router,
        private countryService: CountryService,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void
    {
        this.fg = this.fb.group({
            name: 'Hola'
        });

        this.countryService
            .country$
            .pipe(
                first(),
                tap(country => this.fg.patchValue(country))
            )
            .subscribe();
    }
}
