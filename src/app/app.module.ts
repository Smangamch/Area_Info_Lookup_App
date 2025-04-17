import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withFetch,  withInterceptorsFromDi} from '@angular/common/http';
import { FormsModule } from '@angular/forms';  
import { HomePage } from './home/home.page'; 

 // Importing the required modules and providing the HttpClient to ensure comunication with the weatherMap server
@NgModule({
  declarations: [AppComponent, HomePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent], //Bootstrap the app component
})
export class AppModule {}
