import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GridData } from '@aurora';
import { Observable, of } from 'rxjs';
import { Country } from '../common.types';
import { CountryService } from './country.service';

@Injectable({
    providedIn: 'root'
})
export class CountryListResolver implements Resolve<any>
{
    constructor(
        private countryService: CountryService
    )
    {
    }

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GridData<Country>>
    {
        return this.countryService.getPagination();
    }
}