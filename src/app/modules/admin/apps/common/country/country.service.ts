import { Injectable } from '@angular/core';
import { Criteria, GraphQLService, GridData, Order, QueryStatement } from '@aurora';
import { BehaviorSubject, first, map, Observable, tap } from 'rxjs';
import { Country } from '../common.types';
import { graphQL } from './country.graphql';

@Injectable({
    providedIn: 'root'
})
export class CountryService
{
    private _pagination: BehaviorSubject<GridData<Country> | null> = new BehaviorSubject(null);

    constructor(
        private graphqlService: GraphQLService
    )
    {
    }

    /**
    * Getter for langs
    */
    get pagination$(): Observable<GridData<Country>>
    {
        return this._pagination.asObservable();
    }

    getPagination(
        {
            args = {},
            offset = 0,
            limit = 10,
            sort = ['countryI18N', 'name'],
            order = Order.ASC,
            filters = {},
            constraint = {},
        }: {
            args?: QueryStatement;
            offset?: number;
            limit?: number;
            sort?: string | string[];
            order?: Order;
            filters?: QueryStatement,
            constraint?: QueryStatement,
        } = {}
    ): Observable<GridData<Country>>
    {
        args = Criteria.getPaginationArguments({ args, offset, limit, sort, order });

        return this.graphqlService
            .client()
            .watchQuery<{ pagination: GridData<Country>; }>({
                query: graphQL.queryPagination,
                variables: {
                    query: args
                }
            })
            .valueChanges
            .pipe(
                first(),
                map<{ data: { pagination: GridData<Country>; }}, GridData<Country>>(result => result.data.pagination),
                tap((pagination: GridData<Country>) => this._pagination.next(pagination))
            );
    }


     /**
     * Get products
     *
     *
     * @param page
     * @param size
     * @param sort
     * @param order
     * @param search
     */
    /* getProducts(page: number = 0, size: number = 10, sort: string = 'name', order: 'asc' | 'desc' | '' = 'asc', search: string = ''):
    Observable<{ pagination: InventoryPagination; products: InventoryProduct[] }>
    {
        return this._httpClient.get<{ pagination: InventoryPagination; products: InventoryProduct[] }>('api/apps/ecommerce/inventory/products', {
            params: {
                page: '' + page,
                size: '' + size,
                sort,
                order,
                search
            }
        }).pipe(
            tap((response) => {
                this._pagination.next(response.pagination);
                this._products.next(response.products);
            })
        );
    } */
}