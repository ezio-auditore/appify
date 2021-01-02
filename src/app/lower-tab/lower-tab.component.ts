import { Component, OnInit } from '@angular/core';
import { UiFetchService } from '../ui-fetch.service';

@Component({
  selector: 'app-lower-tab',
  templateUrl: './lower-tab.component.html',
  styleUrls: ['./lower-tab.component.scss'],
})
export class LowerTabComponent implements OnInit {

  constructor(private uiFetchService:UiFetchService) { }
  
  lowerTabComp = [];

  ngOnInit() {
    this.uiFetchService.getLowerTabComponents().subscribe(res =>{
      console.dir(res)
      this.lowerTabComp = res;
    });
  }

}
