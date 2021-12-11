import { Directive, Injector, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
/*
import { HttpService } from 'app/core/services/http.service';
import { AppState } from 'app/state/reducers';
import { RouteRepositoryService } from 'app/core/services/route-repository.service';
import { AlertDialogService } from 'app/shared/components/alert-dialog/alert-dialog.service';
import { NotificationService } from 'app/shared/components/notifications/notifications.service';
import { FormDialogService } from 'app/shared/components/form-dialog/form-dialog.service';
import { DocumentsDialogService } from 'app/shared/components/documents-dialog/documents-dialog.service';
import { GridMasterCenterDialogService } from 'app/shared/components/grid-master-center-dialog/grid-master-center-dialog.service';
import { GridMasterDialogService } from 'app/shared/components/grid-master-dialog/grid-master-dialog.service';
import { BreadcrumbItem } from 'app/shared/components/breadcrumb/breadcrumb.types';
import { StatusType } from 'app/shared/components/status/status.types';
import { InvalidPositionDialogService } from 'app/shared/components/invalid-position-dialog/invalid-position-dialog.service';
import { Issue } from 'app/shared/components/issue/issue.types';
import { SessionService } from 'app/core/services/session.service';
import { Center, DocumentMasters, Lang, RouteData, Session } from 'app/main/adam/adam.types';
*/

// RxJs & NgRx
import { Observable, Subject } from 'rxjs';

@Directive()
export class ViewBaseComponent implements OnDestroy
{
    fb: FormBuilder;                                                // form builder
    fg!: FormGroup;                                                 // form group
    unsubscribeAll$: Subject<void> = new Subject();                 // subject to destroy all subscriptions in ngOnDestroy life cycle

    /*

    routeData: RouteData;
    params: Params;
    rdn: number = Math.random();

    httpService: HttpService;                                       // Http service to do API request
    router: Router;                                                 // Angular router object
    route: ActivatedRoute;                                          // instance current route object
    routeRepositoryService: RouteRepositoryService;                 // Service to get routes from aliases
    store: Store<AppState>;                                         // Store from NgRx

    notificationService: NotificationService;                       // Manage kendo notifications
    dialogService: DialogService;                                   // Service to manage Telerik dialogs
    alertDialogService: AlertDialogService;                         // Service to manage alert dialogs
    documentsDialogService: DocumentsDialogService;                 // Service to manage alert dialogs
    formDialogService: FormDialogService;                           // Service to manage form dialogs
    gridMasterDialogService: GridMasterDialogService;               // service to launch dialog for masters
    codeHighlightDialogService: CodeHighlightDialogService          // Service to show XML and other code documents
    gridMasterCenterDialogService: GridMasterCenterDialogService;   // service to launch dialog for masters by center
    invalidPositionDialogService: InvalidPositionDialogService;     //
    sessionService: SessionService<Session>;                        //
    
    mastersLoaded$: Subject<void> = new Subject();                  // subject to know masters has been loaded
    centersLoaded$: Subject<void> = new Subject();                  // subject to know centers has been loaded
    selectedCentersLoaded$: Subject<void> = new Subject();          // subject to know selected centers has been loaded
    permissionsLoaded$: Subject<void> = new Subject();              // subject to know centers has been loaded
    unsubscribeFormValueChanges$: Subject<void> = new Subject();    // subject to know when sync data has been loaded
    documentHttpServiceLoaded$: Subject<void> = new Subject();      // subject to know when sync data has been loaded
    documentLoaded$: Subject<void> = new Subject();                 // subject to know when sync data has been loaded
    permissions$!: Observable<string[]>;                            // Observer to get permissions
    selectedCenters$!: Observable<Center[]>;                        // Observer with current centers selected
    centers$?: Observable<Center[]>;                                // Observer with centers of current user
    permissions: string[] = [];                                     // Permissions container
    breadcrumbItems: BreadcrumbItem[] = [];                         // Breadcrumbs container
    masters: DocumentMasters = {};                                  // Master data container
    statusType = StatusType;                                        // Enum to get OK or KO
    issues: Issue[] = [];                                           // Container to set issues
    panelLang!: Lang;                                               // Current panel lang
*/
    constructor(
        protected injector: Injector,                            // Injector
    )
    {
        this.fb                             = this.injector.get(FormBuilder);

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
