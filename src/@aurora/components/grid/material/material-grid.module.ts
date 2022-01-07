import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MaterialGridComponent } from './material-grid.component';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
    ],
    declarations: [
        MaterialGridComponent,
    ],
    exports: [
        MaterialGridComponent,
    ]
})
export class MaterialGridModule {}