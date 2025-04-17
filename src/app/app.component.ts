import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {IonicModule} from "@ionic/angular";

// Defining the required components and as well as the Ionic module
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // This allows for custom ionic elements to be initialized since the app will log an error on the console for custom ionic tags not being read
  imports: [
    IonicModule
  ]
})
export class AppComponent {
}
