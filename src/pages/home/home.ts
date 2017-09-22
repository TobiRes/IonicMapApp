import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {NewLocationPage} from "../new-location/new-location";
import {LocationsService} from "../../services/locations.service";
import {MapPage} from "../map/map";
import {CameraPage} from "../camera/camera"
import {RandomPage} from "../random/random";
import { Storage } from "@ionic/storage";
import {Place} from "../../model/place.model";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: { title: string }[] = [];

  constructor(public navCtrl: NavController,
              private locationService: LocationsService,
              private modalCtrl: ModalController,
              public storage: Storage) {
  }

  ionViewWillEnter(){
    this.locationService.getLocation().then(
      (places) => this.places = places
    );
  }
  newLoc(){
    this.navCtrl.push(NewLocationPage);
  }
  openMap(place: Place){
    this.modalCtrl.create(MapPage, place).present();
  }

  openCamera(){
    this.navCtrl.push(CameraPage);
  }

  openNative(){
    this.navCtrl.push(RandomPage);
  }
}
