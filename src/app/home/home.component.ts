import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { MatIconModule } from '@angular/material/icon';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatIconModule,SidebarModule,ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers : [
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeComponent implements OnInit {
  sidebarVisible: boolean = false;

  constructor() {
    register();
  }


  ngOnInit(): void {


  }


}
  
