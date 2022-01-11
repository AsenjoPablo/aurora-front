import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from '@aurora/pipes/pipes.module';
import { GetActionsPipe } from '../get-actions.pipe';
import { MaterialGridComponent } from './material-grid.component';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        PipesModule,
    ],
    declarations: [
        GetActionsPipe,
        MaterialGridComponent,
    ],
    exports: [
        MaterialGridComponent,
    ]
})
export class MaterialGridModule
{
}
