import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ApolloModule } from './graphql/apollo.module';

@NgModule({
    imports  : [
        ApolloModule,
    ]
})
export class AuroraModule
{
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: AuroraModule)
    {
        if ( parentModule )
        {
            throw new Error('AuroraModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}