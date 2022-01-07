import { Route } from '@angular/router';
import { KitchenSinkComponent } from './kitchen-sink.component';
import { FormMaterialComponent } from './material/form/form-material.component';

export const kitchenSinkRoutes: Route[] = [
    {
        path     : '',
        component: KitchenSinkComponent,
        children : [
            {
                path     : 'form-material',
                pathMatch: 'full',
                component: FormMaterialComponent
            },
        ]
    }
];
