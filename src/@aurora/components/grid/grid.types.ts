export interface GridData
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
    rows: any[];
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