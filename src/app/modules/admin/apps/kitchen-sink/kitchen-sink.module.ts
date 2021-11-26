import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { KitchenSinkComponent } from './kitchen-sink.component';
import { kitchenSinkRoutes } from './kitchen-sink.routing';

import { IgxInputGroupModule } from 'igniteui-angular';

@NgModule({
    imports     : [
        RouterModule.forChild(kitchenSinkRoutes),

        // Material
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,

        // Ignite
        IgxInputGroupModule
    ],
    declarations: [
        FormComponent,
        KitchenSinkComponent,
    ],
})
export class KitchenSinkModule
{
}
