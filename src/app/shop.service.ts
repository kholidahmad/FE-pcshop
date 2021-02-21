import { Item, Order, OrdersComponent } from './orders.component';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private dataOrderModel = new OrdersComponent();
  public OrderChanged = new Subject<Order[]>();
  public id: number = 0;
  public dataOrder: Order[] = [];

  public category: any;
  public cpuList: any[] = [];
  public motherBoardList: any[] = [];
  public videoCardList: any[] = [];
  public memoryList: any[] = [];

  constructor() {
    this.getcategory();
    this.getcpuList();
    this.getMotherBoardList();
    this.getVideoCardList();
    this.getMemoryList();
  }

  getOrder() {
    return this.dataOrderModel.orders;
  }

  getcategory() {
    return (this.category = this.dataOrderModel.categories);
  }

  getcpuList() {
    for (let item of Object.values(this.dataOrderModel.cpuList)) {
      this.cpuList.push({ name: item.name, price: item.price });
    }
  }
  getMotherBoardList() {
    for (let item of Object.values(this.dataOrderModel.motherBoardList)) {
      this.motherBoardList.push({ name: item.name, price: item.price });
    }
  }
  getVideoCardList() {
    for (let item of Object.values(this.dataOrderModel.videoCardList)) {
      this.videoCardList.push({ name: item.name, price: item.price });
    }
  }
  getMemoryList() {
    for (let item of Object.values(this.dataOrderModel.memoryList)) {
      this.memoryList.push({ name: item.name, price: item.price });
    }
  }

  getOrderById(id: number) {
    this.id = id;
    return this.dataOrder[id];
  }

  addOrder(ordr: Order) {
    this.dataOrder.push(ordr);
    this.OrderChanged.next(this.dataOrder.slice());
  }

  updateOrder(index: number, playnew: Order) {
    this.dataOrder[index] = playnew;
    this.OrderChanged.next(this.dataOrder.slice());
  }
}
