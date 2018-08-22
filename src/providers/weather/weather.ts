import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class WeatherProvider {


url = 'https://api.openweathermap.org/data/2.5/weather?q=';
appid= '&appid=e4cfeb4dac18631edbc353dbf1a1230b';


constructor(public http: HttpClient) {
  console.log('Hello WeatherProvider Provider');
}
getWeather(city: string){
return this.http.get(this.url+city+',za'+this.appid);
}
}
