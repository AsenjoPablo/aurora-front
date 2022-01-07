import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { KitchenSinkComponent } from './kitchen-sink.component';
import { kitchenSinkRoutes } from './kitchen-sink.routing';
import { FormMaterialComponent } from './material/form/form-material.component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports     : [
        RouterModule.forChild(kitchenSinkRoutes),
        SharedModule,

        // Material
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
    ],
    declarations: [
        KitchenSinkComponent,

        // Material
        FormMaterialComponent,
    ],
})
export class KitchenSinkModule
{
}
