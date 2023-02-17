import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from 'src/app/services/ServiceProduct/product.service';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any

  constructor(private service: ProductService, @Inject(DOCUMENT) public document:Document, public auth:AuthService) {}

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.service.getData().subscribe(resp => {
      this.products = resp.mensaje
    })
  }

}
