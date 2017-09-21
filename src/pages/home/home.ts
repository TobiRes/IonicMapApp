import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {NewLocationPage} from "../new-location/new-location";
import {LocationsService} from "../../services/locations.service";
import {MapPage} from "../map/map";
import { Place } from "../../model/place.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: { title: string }[] = [];

  constructor(public navCtrl: NavController, private locationService: LocationsService, private modalCtrl: ModalController) {

  }

  ionViewWillEnter(){
    this.places = this.locationService.getLocation();
  }

  newLoc(){
    this.navCtrl.push(NewLocationPage);
  }
  openMap(location: Location){
    this.modalCtrl.create(MapPage, location).present();
  }
}
