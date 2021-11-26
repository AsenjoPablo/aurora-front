/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'kitchen-sink',
        title   : 'KitchenSink',
        subtitle: 'Demo Web Components',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'form',
                title: 'Form Material',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/kitchen-sink/form-material',
            },
            {
                id   : 'form',
                title: 'Form Ignite',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/kitchen-sink/form-ignite',
            },
            {
                id   : 'example',
                title: 'Example',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/example',
            },
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
