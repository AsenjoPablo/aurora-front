export interface GridDataResult
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
    field?: string;
    hidden?: boolean;
}