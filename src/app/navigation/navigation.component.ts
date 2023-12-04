import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, RouterLink, RouterOutlet],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
