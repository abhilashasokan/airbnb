import { Injectable } from '@angular/core';
import { Place } from './model/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    new Place(
      'P1',
      'Explore Culture',
      'Indian culture, tradition, food, family all together makes a perfect indian vacation and you will get this here with us. At our home you will get a private double bed room. You can also visit to our Non-profit org.',
      'https://a0.muscache.com/im/pictures/af395b41-c14d-43c6-9e60-47ad4759ae40.jpg?aki_policy=xx_large',
      649.00
    ),
    new Place(
      'P2',
      'Magpie Villa, Jaipur',
      'Large room with garden view, wooden flooring, private toilet/shower, work table, closet, SatTV, AC/ heater, small locker, tea/coffee maker, free wifi. Located centrally just off main road has easy access to transport, restaurants, tourist spots.',
      'https://a0.muscache.com/im/pictures/49982382/37c921e0_original.jpg?aki_policy=xx_large',
      2000.00
    ),
    new Place(
      'P2',
      'Luxurious Woodstone Crib',
      'Looking for a home-stay in a budget?Look no further.You will be welcomed as friends,stay as family & re-live memories forever.',
      'https://a0.muscache.com/im/pictures/09949911-93fa-4282-a7e0-482cf63513d4.jpg?aki_policy=xx_large',
      1523.00
    )
  ];

  get allPlaces() {
    return [...this.places];
  }

  constructor() { }
}
