import { Route } from '@angular/router';
import { CommonComponent } from './common.component';
import { CountryDetailComponent } from './country/country-detail.component';
import { CountryListComponent } from './country/country-list.component';
import { CountryDetailResolver, CountryListResolver } from './country/country.resolvers';
import { LangListComponent } from './lang/lang-list.component';
import { LangListResolver } from './lang/lang.resolvers';

export const commonRoutes: Route[] = [
    {
        path     : '',
        component: CommonComponent,
        children : [
            {
                path     : 'lang',
                pathMatch: 'full',
                component: LangListComponent,
                resolve : {
                    data: LangListResolver
                }
            },
            {
                path     : 'country',
                pathMatch: 'full',
                component: CountryListComponent,
                resolve : {
                    data: CountryListResolver
                }
            },
            {
                path     : 'country/:id',
                pathMatch: 'full',
                component: CountryDetailComponent,
                resolve : {
                    data: CountryDetailResolver
                }
            },
        ]
    }
];
