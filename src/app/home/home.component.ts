import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { DataMockService } from '../service/data-mock.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleriaModule,CommonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  images: any[] | undefined;

  responsiveOptions: any[] | undefined;

  constructor(private dataMockService:DataMockService) {

  }



  ngOnInit(): void {
    // this.photoService.getImages().then((images) => (this.images = images));
    // this.responsiveOptions = [
    //   {
    //     breakpoint: '1024px',
    //     numVisible: 5
    //   },
    //   {
    //     breakpoint: '768px',
    //     numVisible: 3
    //   },
    //   {
    //     breakpoint: '560px',
    //     numVisible: 1
    //   }
    // ];

    this.dataMockService.getPlants()
    .subscribe({
      next : res => {
        console.log('Funciona? ',res);
        
      },
      error : err => {
        console.log('Error',err);
        
      }
    })
  }
}


