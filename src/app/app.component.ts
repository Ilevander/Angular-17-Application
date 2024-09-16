import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstApp';

  public currentRoute : any;

  //Injecter le Router pour l'utiliser dans la solution de laisser le boutton sui represente la component affiché en rendu HTML allumé ou coloré avec respet de compcept de routage
  constructor(private router: Router) {
  }

  gotoHome() {
    this.currentRoute = "home";
    this.router.navigateByUrl("/home");
  }

  gotoProducts() {
    this.currentRoute = "products";
    this.router.navigateByUrl("/products");
  }
}
