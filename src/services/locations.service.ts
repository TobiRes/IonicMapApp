import { Place } from "../model/place.model";
import {Injectable} from "@angular/core";
import  { Storage } from "@ionic/storage";

@Injectable()
export class LocationsService {
  private places: Place[] = [];

  constructor(private storage: Storage){}

  addLocation(place: Place){
    this.places.push(place);
    this.storage.set("places", this.places);
  }

  getLocation(){
    return this.storage.get("places").then(
      (places) => {
        this.places = places == null ? [] : places;
        return this.places.slice();
      }
    );
  }
}
