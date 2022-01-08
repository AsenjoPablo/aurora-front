import { Route } from '@angular/router';
import { CommonComponent } from './common.component';
import { CountryListComponent } from './country/country-list.component';
import { LangListComponent } from './lang/lang-list.component';

export const commonRoutes: Route[] = [
    {
        path     : '',
        component: CommonComponent,
        children : [
            {
                path     : 'lang',
                pathMatch: 'full',
                component: LangListComponent
            },
            {
                path     : 'country',
                pathMatch: 'full',
                component: CountryListComponent
            },
        ]
    }
];
