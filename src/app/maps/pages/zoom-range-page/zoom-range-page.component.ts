import { 
  AfterViewInit,
  Component, 
  ElementRef, 
  OnDestroy, 
  ViewChild 
} from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {

  public zoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-4.132662619183776, 40.954846130923556);
  public lng: number = this.currentLngLat.lng;
  public lat: number = this.currentLngLat.lat;

  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {

    if( !this.divMap ) throw 'El elemento no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // * container ID
      style: 'mapbox://styles/mapbox/streets-v12', // * style URL
      center: this.currentLngLat, // * starting position [lng, lat]
      zoom: this.zoom, // * starting zoom
    });

    this.mapListeners();

  }

  ngOnDestroy(): void {
    this.map?.remove();  
  }

  mapListeners() {

    if( !this.map ) throw 'El mapa no inicializado';

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });
    
    this.map.on('zoomend', (ev) => {
      if( this.map!.getZoom() < 18 ) return;
      this.map!.zoomTo(18);
    });

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
      const { lng, lat } = this.currentLngLat;
      this.lng = lng;
      this.lat = lat;
    });
    
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChange( value: string ) {
    this.zoom = Number(value);
    this.map?.zoomTo( this.zoom );
  }


}
