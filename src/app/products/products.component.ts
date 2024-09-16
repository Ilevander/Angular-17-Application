import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class  ProductsComponent implements OnInit{

  public products : any;

  constructor() {
  }
  ngOnInit(): void {
    this.products = [
        {"id": 1 , "name": "Computer" , "price": 4500},
        {"id": 2 , "name": "Printer" , "price": 3200},
        {"id": 3 , "name": "Smartphone" , "price": 21000},
        {"id": 4 , "name": "Mouse" , "price": 1111},
    ];
  }


  deleteProduct(p: any) {
    let index = this.products.indexOf(p);//retourne indice de numéro d'un éléments
    this.products.splice(index, 1);//supprimer l'élément avec le numéro index , juste sipprimer un seule
  }
}
