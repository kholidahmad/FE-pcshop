import { ShopService } from './shop.service';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Order } from './orders.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'PC-Shop';
  orders: Order[] = [];
  orderEdit: any = [];
  addedit: boolean = false;
  modalTilte: string = '';
  subscription!: Subscription;

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.orders = this.shopService.getOrder();
    // this.subscription = this.shopService.playlistChanged.subscribe(
    //   (data: Playlist[]) => {
    //     this.shop = data;
    //     // console.log(data);
    //   }
    // );

    // console.log(this.addedit);
  }

  clickAdd() {
    this.orderEdit = { editMode: false };
    this.addedit = true;
    this.modalTilte = 'Add New Order';
    // console.log(this.addedit);
  }

  clickEdit(id: number) {
    // this.orderEdit = this.shopService.getOrderById(id);
    this.addedit = true;
    this.modalTilte = 'Edit Playlist';
    // console.log(this.addedit);
  }

  clickDelete(id: number) {
    // this.shop.splice(id, 1);
    // this.shopService.playlistChanged.next(this.shop.slice());
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Deleted!',
      showConfirmButton: false,
      timer: 2000,
    });
  }

  clickClose() {
    this.addedit = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
