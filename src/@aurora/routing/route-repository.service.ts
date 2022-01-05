
import { Inject, Injectable } from '@angular/core';
import { API_DOMAIN, RouteDefinition , ROUTE_DEFINITIONS } from './routing.types';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RouteRepositoryService
{
    constructor(
        @Inject(ROUTE_DEFINITIONS) private routeRepository: RouteDefinition[],
        @Inject(API_DOMAIN) private apiDomain: string,
    ) { }

    route(routeName: string, params?: {[key: string]: string}): string
    {
        if (!this.routeRepository) throw new Error(`
            You must define ROUTE_DEFINITIONS tag provider, in your app.module with your end points, for example:
            {
                provide: ROUTE_DEFINITIONS,
                useValue: routeRepository,
            }`);

        if (!this.apiDomain) throw new Error(`
            You must define API_DOMAIN tag provider, in your app.module with your end point domain, for example:
            {
                provide: API_DOMAIN,
                useValue: 'https://mydomain.com',
            }`);

        const routeMatch  = this.routeRepository.find(route => route.name === routeName) as RouteDefinition;

        if (!routeMatch) throw new Error(`The routeName ${routeName} not exist in your route repository`);

        const interpolatedRoute = this.interpolate(routeMatch.route, params);

        if (routeMatch?.internal) return interpolatedRoute;
        return (routeMatch.mock ? environment.mock.rest : environment.api.rest) + '/' + interpolatedRoute;
    }

    private interpolate(route: string, params?: {[key: string]: string}): string
    {
        return params ? Object.keys(params)
            .reduce((accumulator, currentValue) =>
            accumulator.replace(`:${currentValue}`, params[currentValue]), route) : route;
    }
}
