import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { DataMockService } from './service/data-mock.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers : [DataMockService],
})
export class AppComponent {
  title = 'PlantProject';
}
