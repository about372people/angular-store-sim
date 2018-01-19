import { Component, OnInit } from '@angular/core';

//item object class. each item availiable in the store is one of these.
export class Item {
  public itemName: string;
  private itemPrice: number;
//--Methods------------------------------------------
  constructor(name:string, price:number) {
    this.itemName = name;
    this.itemPrice = price;
  }

  getPrice(){
    return this.itemPrice;
  }

}

//inventory class. stores the items the store has for sale.
export class Inventory {
  private stock:Item[] = []
  private itemID:number = 0
//--Methods------------------------------------------
  createStockID(){
    this.itemID + 1;
    return this.itemID.toString();
  }

  addStock(name:string, price:number, amount:number){
    while (amount > 0)
    {
     this.stock.push( new Item(name, price));
     amount - 1;
    }

    }


  removeStock(name:string){
    for(let i of this.stock){
      if (i.itemName == name){
        this.stock.splice(this.stock.indexOf(i),1)
      }
    }
  }

  getInventory(){
    return this.stock;
  }
}

//cart class. stores the items the user intends to buy.
export class Cart{
  private total: number = 0;
  private cartList: Item[] = [];
  //--Methods------------------------------------------
  addToCart(addItem){
    this.cartList.push(addItem);
  }

  getCart(){
    return this.cartList;
  }

  getTotal(){
    this.total = 0;
    for (let i of this.getCart()) {
      this.total += i.getPrice();
    }
    return this.total;
  }
}

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {



  constructor() {
    let inventory = new Inventory()
    let cart = new Cart()
  }

  ngOnInit() {
  }

}
