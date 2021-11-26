import { Route } from '@angular/router';
import { KitchenSinkComponent } from './kitchen-sink.component';
import { FormComponent } from './form.component';

export const kitchenSinkRoutes: Route[] = [
    {
        path     : '',
        component: KitchenSinkComponent,
        children : [
            {
                path     : 'form',
                pathMatch: 'full',
                component: FormComponent
            }
        ]
    }
];
