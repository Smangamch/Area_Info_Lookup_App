import { Component} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


// Create a variable for the HttpClient provider
const httpClientProvider = provideHttpClient(withFetch());
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonicModule, CommonModule, FormsModule, RouterModule],
})
export class HomePage {
  cityName = '';    // Input for city name
  weatherData: any;  // Store the fetched weather data
  favourites: any[] = [];  // List to store all favourite cities
  apiKey = environment.weatherAPIKey;

  constructor(private http: HttpClient) {
    this.loadFavourites();
  }

  // Fetch the weather data from the OpenWeatherAPI
  fetchWeather() {
    const url_address = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${this.apiKey}`;
    this.http.get(url_address).subscribe(
      (data) => {
      this.weatherData = data;
    },
    (err) => {
      console.error('Error fetching weather data:', err);
      alert('Failed to fetch weather data. Please try again');
      }
    );
  }

  // Save the weather data to the list
  saveToFavourites() {
    if (this.weatherData) {
      const existing_data = this.favourites.find((f) => f.id == this.weatherData.id);
      if (!existing_data) {
        this.favourites.push(this.weatherData);
        localStorage.setItem('favourites', JSON.stringify(this.favourites));
      } else {
        alert('The city is already in your favourites');
      }
    }
  }

  // Load the favourites list from localStorage
  loadFavourites() {
    const saved = localStorage.getItem('favourites');
    try{
    if (saved) {
      this.favourites = JSON.parse(saved)
    }
  } catch(error){
    console.error('Error loading favourites:', error);
    this.favourites = []; //Reset if an error occurs
  }
  }
}
