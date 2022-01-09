import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from '@aurora/pipes/pipes.module';
import { MaterialGridComponent } from './material-grid.component';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        PipesModule,
    ],
    declarations: [
        MaterialGridComponent,
    ],
    exports: [
        MaterialGridComponent,
    ]
})
export class MaterialGridModule
{
}
