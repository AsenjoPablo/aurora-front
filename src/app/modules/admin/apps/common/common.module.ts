import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { commonRoutes } from './common.routing';

import { CommonComponent } from './common.component';
import { LangListComponent } from './lang/lang-list.component';

@NgModule({
    imports: [
        RouterModule.forChild(commonRoutes),
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
