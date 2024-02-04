import { 
  Component, 
  ElementRef, 
  ViewChild 
} from '@angular/core';
import { 
  Map, 
  LngLat, 
  Marker 
} from 'mapbox-gl';
import { MarkerAndColor } from '../../components/interfaces/markers.interface';

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent {

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-4.132662619183776, 40.954846130923556);
  public markers: MarkerAndColor[] = [];

  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'El elemento no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // * container ID
      style: 'mapbox://styles/mapbox/streets-v12', // * style URL
      center: this.currentLngLat, // * starting position [lng, lat]
      zoom: 13 // * starting zoom
    });

    // * Custom Marker
    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Custom Marker';

    // const marker = new Marker({
    //   color: 'red',
    //   element: markerHtml
    // })
    //   .setLngLat( this.currentLngLat )
    //   .addTo( this.map )

  }

  createMarker() {

    if( !this.map ) return;

    const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    const lngLat = this.map.getCenter()

    this.addMarker( lngLat, color );

  }

  addMarker( lngLat: LngLat, color: string ) {

    if( !this.map ) return;

    const marker = new Marker({
      color: color,
      draggable: true
    })
    .setLngLat( lngLat )
    .addTo( this.map );

    this.markers.push({ color, marker });

  }

  deleteMarker( index: number ) {
    this.markers[index].marker.remove();
    this.markers.splice( index, 1 );
  }

  flyTo( marker: Marker ) {
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    })
  }

  saveToLocalStorage() {}

  readFromLocalStorage() { }

}
