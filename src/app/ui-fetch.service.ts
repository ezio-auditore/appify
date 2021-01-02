import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UiFetchService {

  constructor(private firestore:AngularFirestore) { }

  getSidePanelOptions(){
    return this.firestore.collection('side_panel_options').valueChanges();
  }

  getMainPageSlides(){
    return this.firestore.collection('main_page_slides').valueChanges();
  }

  getLowerTabComponents(){
    return this.firestore.collection('lower_tab_comp').valueChanges();
  }
}
