import { Component, OnInit } from '@angular/core';
import { UiFetchService } from '../ui-fetch.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {

  homePageSlides = [];
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private uiFetchService:UiFetchService) { }

  ngOnInit() {
    this.uiFetchService.getMainPageSlides().subscribe(res =>{
      console.dir(res)
      this.homePageSlides = res;
    });
  }

}
