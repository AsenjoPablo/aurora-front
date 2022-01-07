/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'apps',
        title   : 'Applications',
        subtitle: 'Custom made application designs',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id      : 'kitchen-sink',
                title   : 'KitchenSink',
                type    : 'collapsable',
                icon    : 'heroicons_outline:adjustments',
                children: [
                    {
                        id   : 'material',
                        title: 'Material Components',
                        type : 'group',
                        children: [
                            {
                                id   : 'form',
                                title: 'Form Material',
                                type : 'basic',
                                icon : 'heroicons_outline:clipboard-list',
                                link : '/kitchen-sink/form-material',
                            },
                        ]
                    },
                    {
                        id   : 'ignite',
                        title: 'Ignite Components',
                        type : 'group',
                        children: [
                            {
                                id   : 'form',
                                title: 'Form Ignite',
                                type : 'basic',
                                icon : 'heroicons_outline:clipboard-list',
                                link : '/kitchen-sink/form-ignite',
                            },
                            {
                                id   : 'grid',
                                title: 'Grid Ignite',
                                type : 'basic',
                                icon : 'heroicons_outline:chart-pie',
                                link : '/kitchen-sink/grid-ignite',
                            },
                        ]
                    }
                ]
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
