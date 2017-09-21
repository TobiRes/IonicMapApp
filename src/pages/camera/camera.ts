import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions} from "@ionic-native/camera";


@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  public pictures: any;
  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  ngOnInit(){
    this.pictures = [];
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.pictures.push(this.base64Image);
      this.pictures.reverse();
    }, (err) => {
      // Handle error
    });
    console.log("Es ist was passiert");
  }

  deletePicture(index){

      let alert = this.alertCtrl.create({
        title: 'Bild löschen',
        message: 'Willst du das Bild wirklich löschen?',
        buttons: [
          {
            text: 'Abbrechen',
            role: 'cancel',
            handler: () => {
              console.log('Abbrechen');
            }
          },
          {
            text: 'Ja',
            handler: () => {
              console.log('Bestätigt');
              this.pictures.splice(index, 1);
            }
          }
        ]
      });
      alert.present();

    }
}
