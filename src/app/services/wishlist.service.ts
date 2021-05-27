import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { wishlistUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist() {
    return this.http.get(wishlistUrl).pipe(
      map((result: any[]) => {
        let productIds = []

        result.forEach(item => productIds.push(item.id))

        return productIds;
      })
    )
  }
  getWishlistAll() {
    return this.http.get(wishlistUrl).pipe(
      map((result: any[]) => {
        let productIds = []
        console.log(result);
        result.forEach(item => productIds.push(item));

        return productIds;
      })
    )
  }
  addWishPro(products){
    console.log("wishpro",products);
    return this.http.post(wishlistUrl,{products});
  }
  // addToWishlist(productId) {
  //   return this.http.post(wishlistUrl, { id: productId })
  // }

  removeFromWishlist(productId) {
    return this.http.delete(wishlistUrl + '/' + productId);
  }
}
