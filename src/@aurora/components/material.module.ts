import { NgModule } from '@angular/core';
import { MaterialGridModule } from './grid/material/material-grid.module';

@NgModule({
    imports: [
        MaterialGridModule,
    ],
    exports: [
        MaterialGridModule,
    ]
})
export class MaterialModule {}