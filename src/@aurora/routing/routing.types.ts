import { InjectionToken } from '@angular/core';

export const API_DOMAIN = new InjectionToken<string>('api.domain');
export const ROUTE_DEFINITIONS = new InjectionToken<RouteDefinition[]>('route.definitions');

export interface RouteDefinition
{
    name     : string;
    route    : string;
    mock?    : boolean;
    internal?: boolean;
}
