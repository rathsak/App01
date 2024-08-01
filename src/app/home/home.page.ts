
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonGrid, IonCol, IonRow, IonButton, IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonGrid, IonCol, IonRow, IonButton, IonIcon],
})
export class HomePage {
  constructor() {
    addIcons({trash});
  }
}
