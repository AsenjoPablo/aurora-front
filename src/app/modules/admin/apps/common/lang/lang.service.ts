import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lang } from '../common.types';

@Injectable({
    providedIn: 'root'
})
export class LangService
{
    private _langs: BehaviorSubject<Lang[] | null> = new BehaviorSubject(null);

    /**
    * Getter for langs
    */
    get langs$(): Observable<Lang[]>
    {
        return this._langs.asObservable();
    }

    getLangsPagination(page: number = 0, size: number = 10, sort: string = 'name', order: 'asc' | 'desc' | '' = 'asc', search: string = '')
    {

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