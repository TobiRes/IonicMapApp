import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LocationsService } from "../../services/locations.service";
import { Geolocation } from "@ionic-native/geolocation";

@IonicPage()
@Component({
  selector: 'page-new-location',
  templateUrl: 'new-location.html',
})
export class NewLocationPage {
  location : {lat: number, lng: number} = {lat: 0, lng: 0};

  constructor(private locationService : LocationsService, private navCtrl : NavController, private geolocation: Geolocation) {
  }

  addPlace(value : {title: string}){
    this.locationService.addLocation({title: value.title, location: this.location});
    this.navCtrl.pop();
  }
  locateUser(){
    this.geolocation.getCurrentPosition()
    .then(
      (location) => {
        console.log("Location fetched successfully");
        this.location.lat = location.coords.latitude;
        this.location.lng = location.coords.longitude;
      }
    )
      .catch(
        (error) => console.log("Fehler")
      );
  }
}