import { Order } from "@aurora";

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
    sort?: string | string[];
    headerClass?: string | string[];
    sticky?: boolean;
    actions?: (item: any) => ColumnConfigAction[];
}

export interface ColumnConfigAction
{
    id: string;
    icon: string;
    title: string;
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
    sort: string | string[];
    order: string;
}