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
    private _country: BehaviorSubject<Country | null> = new BehaviorSubject(null);

    constructor(
        private graphqlService: GraphQLService
    )
    {
    }

    /**
    * Getters
    */
    get pagination$(): Observable<GridData<Country>>
    {
        return this._pagination.asObservable();
    }

    get country$(): Observable<Country>
    {
        return this._country.asObservable();
    }

    getPagination(
        {
            args = {},
            offset = 0,
            limit = 10,
            sort = ['countryI18N', 'name'],
            order = 'desc',
            filters = {},
            constraint = {},
        }: {
            args?: QueryStatement;
            offset?: number;
            limit?: number;
            sort?: string | string[];
            order?: string;
            filters?: QueryStatement,
            constraint?: QueryStatement,
        } = {}
    ): Observable<GridData<Country>>
    {
        // adapt arguments to aurora SqlStatement
        args = Criteria.getPaginationArguments({ args, offset, limit, sort, order });

        // get result, map ang throw data across observable
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

    findById(
        {
            id = '',
        }: {
            id?: string;
        } = {}
    ): Observable<Country>
    {
        // adapt arguments to aurora SqlStatement
        const args = Criteria.getFindByIdArguments({ id });

        return this.graphqlService
            .client()
            .watchQuery<{ object: Country; }>({
                query: graphQL.queryObject,
                variables: {
                    query: args
                }
            })
            .valueChanges
            .pipe(
                first(),
                map<{ data: { object: Country; }}, Country>(result => result.data.object),
                tap((object: Country) => this._country.next(object))
            );
    }
}