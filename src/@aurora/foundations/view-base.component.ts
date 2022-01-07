import { Directive, Injector, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

// RxJs & NgRx
import { Observable, Subject } from 'rxjs';
import { GraphQLService, GraphQLStatements } from '@aurora/graphql';

@Directive()
export class ViewBaseComponent implements OnDestroy
{
    fb: FormBuilder;                                                // form builder
    fg!: FormGroup;                                                 // form group
    graphqlService: GraphQLService;                                 // Http service to do API request
    unsubscribeAll$: Subject<void> = new Subject();                 // subject to destroy all subscriptions in ngOnDestroy life cycle
    graphQLStatements: GraphQLStatements;

    constructor(
        protected injector: Injector,                            // Injector
    )
    {
        this.fb                             = this.injector.get(FormBuilder);
        this.graphqlService                 = this.injector.get(GraphQLService);

        /*
        this.httpService                    = this.injector.get(HttpService);
        this.router                         = this.injector.get(Router);
        this.route                          = this.injector.get(ActivatedRoute);
        this.routeRepositoryService         = this.injector.get(RouteRepositoryService);
        this.store                          = this.injector.get(Store);
        this.sessionService                 = this.injector.get(SessionService);
        this.translateService               = this.injector.get(TranslateService);
        this.notificationService            = this.injector.get(NotificationService);
        this.dialogService                  = this.injector.get(DialogService);
        this.alertDialogService             = this.injector.get(AlertDialogService);
        this.documentsDialogService         = this.injector.get(DocumentsDialogService);
        this.formDialogService              = this.injector.get(FormDialogService);
        this.invalidPositionDialogService   = this.injector.get(InvalidPositionDialogService);
        this.gridMasterDialogService        = this.injector.get(GridMasterDialogService);                       // Service to manage masters dialogs
        this.codeHighlightDialogService     = this.injector.get(CodeHighlightDialogService);
        this.gridMasterCenterDialogService  = this.injector.get(GridMasterCenterDialogService);                 // Service to manage masters by center dialogs
        this.params                         = this.route.snapshot.params;                                       // params from current route
        this.routeData                      = new RouteData(this.route.snapshot.data);                          // instance RouteData from snapshot route
        this.permissions$                   = this.store.select(permissionsSelects.selectPermissions);          // get Observable to get permissions
        */
    }

    ngOnDestroy(): void
    {
        this.unsubscribeAll$.next();
        this.unsubscribeAll$.complete();
    }
}
