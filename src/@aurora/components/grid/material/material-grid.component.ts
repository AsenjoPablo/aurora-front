import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ColumnConfig, ColumnDataType, GridData } from '../grid.types';
import cloneDeep from 'lodash-es/cloneDeep';

@Component({
    selector   : 'material-grid',
    templateUrl: './material-grid.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialGridComponent implements OnInit
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

    columnConfigType = ColumnDataType;

    ngOnInit(): void
    {
    }
}
