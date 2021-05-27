import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishlist: any[] = [];

  constructor(
    private wishlistService: WishlistService

  ) { }

  ngOnInit() {
    this.loadWishlist();
  }
  loadWishlist() {
    this.wishlistService.getWishlistAll().subscribe(productIds => {
      this.wishlist = productIds
    })
  }
  handleRemoveFromWishlist(id : number) {
    this.wishlistService.removeFromWishlist(id).subscribe(() => {
      this.loadWishlist();
    })
  }
}
