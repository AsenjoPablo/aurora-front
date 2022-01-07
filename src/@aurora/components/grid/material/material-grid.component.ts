import { Component, Input, OnInit } from '@angular/core';
import { ColumnConfig, GridDataResult } from '../grid.types';
import cloneDeep from 'lodash-es/cloneDeep';

@Component({
    selector   : 'material-grid',
    templateUrl: './material-grid.component.html',
})
export class MaterialGridComponent implements OnInit
{
    private _data: any[];
    @Input() set data(data: any[])
    {
        console.log(data);
        this._data = data;
    }
    get data(): any[]
    {
        return this._data;
    }

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

    ngOnInit(): void
    {
    }
}
