import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from "@ionic-native/geolocation";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewLocationPage } from '../pages/new-location/new-location';
import { LocationsService } from "../services/locations.service";
import { MapPage } from "../pages/map/map";
import { CameraPage } from "../pages/camera/camera";
import { RandomPage} from "../pages/random/random";

import { AgmCoreModule } from "@agm/core";
import { Camera } from "@ionic-native/camera";
import { AlertController } from "ionic-angular";
import { BatteryStatus } from "@ionic-native/battery-status";
import { DBMeter } from "@ionic-native/db-meter";
import { Flashlight } from "@ionic-native/flashlight";
import { Gyroscope } from "@ionic-native/gyroscope";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewLocationPage,
    MapPage,
    CameraPage,
    RandomPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDOj_YqCL9G1YVj44JbeMhfSBm6k2onLwM"
    }),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewLocationPage,
    MapPage,
    CameraPage,
    RandomPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationsService,
    Geolocation,
    Camera,
    AlertController,
    BatteryStatus,
    DBMeter,
    Flashlight,
    Gyroscope
  ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
