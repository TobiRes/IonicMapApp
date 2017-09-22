import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LocationsService } from "../../services/locations.service";
import { Geolocation } from "@ionic-native/geolocation";
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-new-location',
  templateUrl: 'new-location.html',
})
export class NewLocationPage {
  location : {lat: number, lng: number} = {lat: Math.random() * (181-1) + 1, lng: Math.random() * (360-1) + 1};

  constructor(private locationService : LocationsService,
              private navCtrl : NavController,
              private geolocation: Geolocation,
              private storage: Storage) {
  }

  addPlace(value : {title: string}){
    this.locationService.addLocation({title: value.title, location: this.location});
    this.navCtrl.pop();
  }

  locateUser(){
    this.geolocation.getCurrentPosition()
    .then(
      (location) => {
        console.log("Lokalisierung erfolgreich");
        this.location.lat = location.coords.latitude;
        this.location.lng = location.coords.longitude;
      }
    )
      .catch(
        (error) => console.log("Fehler")
      );
  }

  deleteStorage(){
    this.storage.remove("places");
  }
}
