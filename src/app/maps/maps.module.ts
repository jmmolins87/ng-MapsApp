import { NgModule, isStandalone } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';


import * as mapboxgl from 'mapbox-gl';
( mapboxgl as any ).accessToken = 'pk.eyJ1IjoianVhbm1hODciLCJhIjoiY2xzNGZxbDMyMTE2ejJsbWs1cmZ2dHdpMyJ9.iQdcY0G-6QMPQvtEej4pKQ';

import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayaoutComponent } from './layout/maps-layaout/maps-layaout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

import { CounterAloneComponent } from "../alone/components/counter-alone/counter-alone.component";
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';


@NgModule({
    declarations: [
        MiniMapComponent,
        MapsLayaoutComponent,
        FullScreenPageComponent,
        MarkersPageComponent,
        PropertiesPageComponent,
        ZoomRangePageComponent
    ],
    imports: [
        CommonModule,
        MapsRoutingModule,
        // isStandalone Component
        CounterAloneComponent,
        SideMenuComponent
    ]
})
export class MapsModule { }
