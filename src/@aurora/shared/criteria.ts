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
            order = 'desc',
        }: {
            args?: QueryStatement;
            offset?: number;
            limit?: number;
            sort?: string | string[];
            order?: string;
        } = {}
    ): QueryStatement
    {
        order = order === 'asc' ? Order.ASC : Order.DESC;

        return merge({
            limit,
            offset,
            order: Array.isArray(sort) ? [[...sort, order]] : [[sort, order]],
        }, args);
    }

    static getFindByIdArguments(
        {
            id = '',
        }: {
            id?: string;
        } = {}
    ): QueryStatement
    {
        return merge({
            where: { id },
        }, {});
    }
}