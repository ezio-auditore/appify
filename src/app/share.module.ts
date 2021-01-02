import { NgModule } from '@angular/core';
import { CommonModule, LowerCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SlideComponent } from './slide/slide.component';
import { LowerTabComponent } from './lower-tab/lower-tab.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [SlideComponent,LowerTabComponent,SideMenuComponent],
  exports: [SlideComponent,LowerTabComponent,SideMenuComponent]
})
export class ShareModule {}
