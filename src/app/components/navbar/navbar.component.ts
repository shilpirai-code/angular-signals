import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public navbar: NavbarService) {
  }
}
