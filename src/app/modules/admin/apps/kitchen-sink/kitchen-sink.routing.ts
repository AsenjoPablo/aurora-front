import { Route } from '@angular/router';
import { KitchenSinkComponent } from './kitchen-sink.component';
import { FormMaterialComponent } from './material/form/form-material.component';
import { FormIgniteComponent } from './ignite/form/form-ignite.component';

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
