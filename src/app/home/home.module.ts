import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { RouterModule } from '@angular/router';

// Import the ionic components and as well as the other modules and then declare the homepage component
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: HomePage}]),
    HomePage,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
