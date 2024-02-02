import { Component } from '@angular/core';

import { MenuItem } from '../interfaces/side-menu.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/fullscreen', name: 'Full-screen' },
    { route: '/maps/zoom-range', name: 'Zoom-range' },
    { route: '/maps/markers', name: 'Markers' },
    { route: '/maps/properties', name: 'Properties' }
  ]

}
