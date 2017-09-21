import { Place } from "../model/place.model";

export class LocationsService {
  private places: Place[] = [];

  addLocation(place: Place){
    this.places.push(place);
  }

  getLocation(){
    return this.places.slice();
  }
}
