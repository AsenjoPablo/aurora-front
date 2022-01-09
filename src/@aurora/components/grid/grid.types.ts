export interface GridData<T = any>
{
    /**
     * The total number of records filtered.
     */
    count: number;

    /**
     * The total number of records that are available.
     */
    total: number;

    /**
     * The data that will be rendered by the Grid as an array.
     */
    rows: T[];
}

export interface ColumnConfig
{
    type: ColumnDataType;
    field?: string;
    hidden?: boolean;
}

export enum ColumnDataType
{
    ACTIONS,
    NUMBER,
    DATE,
    STRING,
}

export interface PageChangeEvent
{
    count: number;
    offset: number;
    limit: number;
}