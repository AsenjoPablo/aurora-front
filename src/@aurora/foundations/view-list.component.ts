import { Directive, Injector } from '@angular/core';
import { ViewBaseComponent } from './view-base.component';

@Directive()
export class ViewListComponent extends ViewBaseComponent
{
    constructor(
        protected injector: Injector,
    )
    {
        super(injector);
    }
}
