import { Directive, Injector, OnInit } from '@angular/core';
import { log } from '@aurora/shared/log';
import { ViewBaseComponent } from './view-base.component';

/*
import { PaginationGrid } from 'app/shared/components/grid-list/grid-list.types';
import { Criteria } from 'app/shared/libs/criteria';
import { RelationsDocumentMapper } from 'app/shared/libs/relations-document-mapper';
import { calculateTrafficLightMeasure } from 'app/shared/libs/traffic-light-measure';
import { TrafficLightStatus } from 'app/shared/components/traffic-light/traffic.types';
import { DocumentList, StatusSummary } from 'app/main/adam/adam.types';
import { log } from 'app/core/libs/log';
import { Utils } from 'app/core/libs/utils';
import { takeUntil } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
*/

@Directive()
export class ViewListComponent extends ViewBaseComponent implements OnInit
{

/*
    // variables
    documents: any[] = [];
    documentWorkingMeasure!: {[key in TrafficLightStatus]: number};
    documentTrafficLight = TrafficLightStatus.OFF;

    // grid variables
    filters: CompositeFilterDescriptor = { logic: 'and', filters: []};
    dataResponse: GridDataResult = { total: 0, data: []};                  // data container for gridListComponent when behavior of grid is on request
    pagination: PaginationGrid = { page: 0, size: 10 };
    sorting?: SortDescriptor;
    isDataLoading = false;

    // summary status
    statusSummary: StatusSummary = {
        trafficLightStatus: TrafficLightStatus.OFF,
        statusElements    : [],
    };

    get skip(): number
    {
        return this.pagination.page * this.pagination.size;
    }

    get documentsTotal(): number
    {
        let total = 0;
        this.statusSummary
            .statusElements
            .forEach(element =>
            {
                if (typeof element.value === 'number')
                {
                    total += element.value;
                }
            });

        return total;
    }
*/
    constructor(
        protected injector: Injector,
    )
    {
        super(injector);
    }

    ngOnInit(): void
    {
        this.initViewListSubscription();
    }

    initViewListSubscription(): void
    {
        log('[DEBUG] Document list initialization');
        // will not emit an initial value until each observable emits at least one value
        /* combineLatest([this.mastersLoaded$, this.centersLoaded$, this.selectedCentersLoaded$, this.permissionsLoaded$])
            .pipe(takeUntil(this.unsubscribeAll$))
            .subscribe(([mastersRes, centersRes, selectedCentersRes, permissionsRes]) =>
            {
                if (
                    this.masters.deliveryBlocks && // 59e8fd38-852b-415b-83d7-6566ee3cb5a8
                    this.permissions.length > 0 &&
                    Array.isArray(this.masters.centers)
                )
                {
                    log('[DEBUG] Document list initialization');

                    this.initBreadcrumb();

                    this.setFiltersFromQueryParams();

                    this.resetPagination();

                    this.getHttpData();
                }
            }); */
    }

    initBreadcrumb(): void { /**/ }
/*
    setFiltersFromQueryParams(): void
    {
        // set filters from query params, after send http request
        if (this.route.snapshot.queryParams.filter) this.filters = {
            logic  : 'and',
            filters: [
                Utils.decodeObject(this.route.snapshot.queryParams.filter),
            ]
        };
    }

    resetPagination(): void
    {
        this.pagination = { page: 0, size: 10 };
    }

    refreshDocument(): void
    {
        this.getHttpData();
    }

    getHttpData(): void
    {
        this.getInsightData();

        this.getGridData();
    }

    getInsightData(): void
    {
        // asynchronous request to insights, reload request when centers are changed
        this.httpService
            .get(this.documentRestMastersInsightsRouteName)
            .subscribe(insights =>
            {
                this.initStatuses(insights);
            });
    }*/

    /// initStatuses(insights: any): void { /**/ }
    /*
    getGridData<T>(): void
    {
        // force refresh page with random url query param
        this.rdn = Math.random();

        this.isDataLoading = true;

        // deep clone to break reference, otherwise, the mapping performed is passed to the grid
        // and does not recognize the column on which the filter is performed.

        const filters: CompositeFilterDescriptor = {
            logic  : 'and',
            filters: [
                // JSON.parse(JSON.stringify(this.filters)),
                { ...this.filters }
            ],
        };

        this.httpService
            .get<DocumentList<T>>(this.documentRestListRouteName, undefined, {
                params: Criteria.setParams(
                    Criteria.translateKendoFilter(filters),         // set filters
                    this.pagination,                                // set pagination
                    Criteria.translateKendoSorting(this.sorting)    // set sort
                ),
            })
            .subscribe(data =>
            {
                // map description masters
                this.documents = RelationsDocumentMapper.documentsMapper<T>(data.documents, this.masters);

                this.isDataLoading = false;

                if (this.documents.length === 0) this.notificationService.info({ content: this.translateService.instant('GRID.NO_RECORDS') });

                this.dataResponse = {
                    data : this.documents,
                    total: data.total,
                };

                this.statusSummary.trafficLightStatus = calculateTrafficLightMeasure(this.documentWorkingMeasure, this.documentsTotal);

            });
    }

    onFilterChange(event: CompositeFilterDescriptor): void
    {
        log('[DEBUG] documentList filter change', event);

        this.filters = event;
        this.pagination = { page: 0, size: 10 };
        this.getGridData();
    }

    onPageChange(event: PageChangeEvent): void
    {
        log('[DEBUG] onPageChange', event);

        this.pagination = { page: event.skip === 0 ? 0 : Math.trunc(event.skip / event.take), size: event.take };
        this.getGridData();
    }

    onSortChange(event: SortDescriptor[]): void
    {
        log('[DEBUG] onSortChange', event);

        this.sorting = event.length > 0 && event[0].dir ? event[0] : undefined;
        this.getGridData();
    }
    */
}
