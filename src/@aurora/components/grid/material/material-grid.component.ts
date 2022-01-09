import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ColumnConfig, ColumnDataType, GridData, PageChangeEvent } from '../grid.types';
import cloneDeep from 'lodash-es/cloneDeep';
import { MatPaginator } from '@angular/material/paginator';
import { merge, switchMap, tap } from 'rxjs';


@Component({
    selector   : 'material-grid',
    templateUrl: './material-grid.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialGridComponent implements OnInit, AfterViewInit
{
    @Input() data: GridData;

    // clone columnsConfig to can reset columnsConfig to original status
    private _columnsConfig: ColumnConfig[] = [];
    private _originColumnsConfig: ColumnConfig[] = [];
    @Input() set columnsConfig(data: ColumnConfig[])
    {
        this._columnsConfig         = cloneDeep(data);
        this._originColumnsConfig   = cloneDeep(data);

    }
    get columnsConfig(): ColumnConfig[]
    {
        return this._columnsConfig;
    }

    get displayedColumns(): string[]
    {
        return this.columnsConfig.filter(item => !item.hidden).map(item => item.field);
    }

    @Output() pageChange = new EventEmitter<PageChangeEvent>();

    @ViewChild(MatPaginator) private paginator: MatPaginator;

    columnConfigType = ColumnDataType;

    ngOnInit(): void
    {
    }

    ngAfterViewInit(): void
    {
        if (this.paginator)
        {
            merge(this.paginator.page)
                .pipe(
                    tap(() => this.pageChange.emit({
                        count: this.paginator.length,
                        offset: this.paginator.pageIndex * this.paginator.pageSize,
                        limit: this.paginator.pageSize,
                    })),
                    tap(() => console.log(this.paginator)),
                )
                .subscribe();
        }
    }
}
