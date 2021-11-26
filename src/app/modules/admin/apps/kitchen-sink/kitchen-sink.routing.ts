import { Route } from '@angular/router';
import { KitchenSinkComponent } from './kitchen-sink.component';
import { FormMaterialComponent } from './form-material.component';
import { FormIgniteComponent } from './form-ignite.component';

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
            {
                path     : 'form-ignite',
                pathMatch: 'full',
                component: FormIgniteComponent
            }
        ]
    }
];
