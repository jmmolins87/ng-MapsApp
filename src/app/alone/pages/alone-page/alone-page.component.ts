import { Component } from '@angular/core';

import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
import { SideMenuComponent } from "../../components/side-menu/side-menu.component";
// import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-alone-page',
    standalone: true,
    templateUrl: './alone-page.component.html',
    styleUrls: ['./alone-page.component.css'],
    imports: [CounterAloneComponent, SideMenuComponent]
})
export class AlonePageComponent {

  constructor() {}

}
