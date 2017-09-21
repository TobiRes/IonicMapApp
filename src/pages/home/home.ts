import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {NewLocationPage} from "../new-location/new-location";
import {LocationsService} from "../../services/locations.service";
import {Camera} from "@ionic-native/camera";
import {MapPage} from "../map/map";
import {CameraPage} from "../camera/camera"


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

  openCamera(){
    this.navCtrl.push(CameraPage);
  }
}
