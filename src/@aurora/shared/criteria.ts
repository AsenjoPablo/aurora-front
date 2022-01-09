import { Order, QueryStatement } from "./sql-statement/sql-statement";
import merge from 'lodash-es/merge';

export class Criteria
{
    /**
     * get arguments for pagination query
     *
     * @param args
     * @param offset
     * @param limit
     * @param sort
     * @param order
     */
    static getPaginationArguments(
        {
            args = {},
            offset = 0,
            limit = 10,
            sort = 'name',
            order = Order.ASC,
        }: {
            args?: QueryStatement;
            offset?: number;
            limit?: number;
            sort?: string | string[];
            order?: Order;
        } = {}
    ): QueryStatement
    {
        return merge({
            limit,
            offset,
            order: Array.isArray(sort) ? [[...sort, order]] : [[sort, order]],
        }, args);
    }
}