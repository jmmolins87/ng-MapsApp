import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuItem } from '../../../maps/interfaces/side-menu.interface';

@Component({
  selector: 'app-side-menu',
  imports: [ CommonModule, RouterModule ],
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/fullscreen', name: 'Full-screen' },
    { route: '/maps/zoom-range', name: 'Zoom-range' },
    { route: '/maps/markers', name: 'Markers' },
    { route: '/maps/properties', name: 'Properties' },
    { route: '/alone', name: 'Alone-page' }
  ]

}
