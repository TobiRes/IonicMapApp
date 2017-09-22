import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BatteryStatus, BatteryStatusResponse} from "@ionic-native/battery-status";
import { DBMeter } from "@ionic-native/db-meter";
import { Flashlight } from "@ionic-native/flashlight";


@IonicPage()
@Component({
  selector: 'page-random',
  templateUrl: 'random.html',
})
export class RandomPage {
  public battery : any;
  public kabel : string;
  public dbLevel : any;
  public task : any;
  public task2 : any;
  public task3 : any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private batteryStatus: BatteryStatus,
              private dbMeter: DBMeter,
              private flashlight: Flashlight) {
  }

  ngOnInit(){
    this.task = setInterval(()=> {
      this.batterie();
    }, 300);
    this.task2 = setInterval(()=> {
      this.dbM();
    }, 300);
    this.task3 = setInterval(()=> {
      this.passivToggle();
    }, 300);
  }

  passivToggle(){
    if(this.battery > 45)
      this.flashlight.toggle();
  }
  

  batterie(){
  let subscription = this.batteryStatus.onChange().subscribe(
    (status: BatteryStatusResponse) => {
      console.log(status.level, status.isPlugged);
      this.battery = status.level;
      if(this.battery == 0 || this.battery == null)
        console.log("Keine Battery");
      if(status.isPlugged)
        this.kabel = "läd gerade";
      else
        this.kabel = "läd gerade nicht";
    });
  }

  dbM(){
    let subscription = this.dbMeter.start().subscribe(
      data => this.dbLevel = data
    );
  }

  taschenlampe(){
    this.flashlight.toggle();
  }
}
