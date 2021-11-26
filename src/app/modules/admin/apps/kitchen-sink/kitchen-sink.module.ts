import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { KitchenSinkComponent } from './kitchen-sink.component';
import { kitchenSinkRoutes } from './kitchen-sink.routing';
import { FormMaterialComponent } from './form-material.component';
import { FormIgniteComponent } from './form-ignite.component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// Ignite
import { IgxInputGroupModule, IgxSelectModule } from 'igniteui-angular';

@NgModule({
    imports     : [
        RouterModule.forChild(kitchenSinkRoutes),
        SharedModule,

        // Material
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,

        // Ignite
        IgxInputGroupModule,
        IgxSelectModule,
    ],
    declarations: [
        KitchenSinkComponent,

        // Material
        FormMaterialComponent,

        // Ignite
        FormIgniteComponent,
    ],
})
export class KitchenSinkModule
{
}
