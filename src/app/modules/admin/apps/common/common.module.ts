import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// Common module
import { commonRoutes } from './common.routing';
import { CommonComponent } from './common.component';
import { LangListComponent } from './lang/lang-list.component';

@NgModule({
    imports: [
        RouterModule.forChild(commonRoutes),

        // Material
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,

    ],
    declarations: [
        CommonComponent,

        // lang
        LangListComponent,
    ],
})
export class CommonModule
{
}
