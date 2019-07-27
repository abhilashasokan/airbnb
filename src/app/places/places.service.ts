import { Injectable } from '@angular/core';
import { Place } from './model/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      '1',
      'Sea Hut Homestay',
      'Hello everyone Sea hut is a home stay with 4 independent double bed rooms on a common veranda.The room has a king size double bed and an aircon in it. Its a perfect retreat for tourist who want to run away from the hectic city.',
      'https://a0.muscache.com/im/pictures/24509164/1bf6f65d_original.jpg?aki_policy=xx_large',
      1490
    ),
    new Place(
      '2',
      'Coconut Grove',
      'Situated at the heart of Fort Kochi, Our home is very near to all the tourist attractions in the area.',
      'https://a0.muscache.com/im/pictures/60503684/4bb7d0cb_original.jpg?aki_policy=xx_large',
      850
    ),
    new Place(
      '3',
      'Adams wood house',
      'its a family run homestay, guesthouse, B & B with clean ensuite rooms, comfortable beds and wifi',
      'https://a0.muscache.com/im/pictures/1978053/c5862992_original.jpg?aki_policy=xx_large',
      750.0
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}
}
