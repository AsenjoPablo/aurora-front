import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@aurora';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        // @aurora
        //MaterialModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        // @aurora
        //MaterialModule,
    ]
})
export class SharedModule
{
}
