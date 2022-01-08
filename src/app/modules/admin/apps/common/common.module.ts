import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// Common module
import { commonRoutes } from './common.routing';
import { CommonComponent } from './common.component';
import { CountryListComponent } from './country/country-list.component';
import { LangListComponent } from './lang/lang-list.component';

@NgModule({
    imports: [
        RouterModule.forChild(commonRoutes),
        SharedModule,

        // Material
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,

    ],
    declarations: [
        CommonComponent,

        // Common components
        CountryListComponent,
        LangListComponent,

    ],
})
export class CommonModule
{
}
