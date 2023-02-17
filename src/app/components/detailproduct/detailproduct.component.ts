import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/ServiceProduct/product.service';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent {

  product: any = { id: "", title: "", price: "", description: "", category: "", image: "", rating: {} }

  constructor(private activatedRoute: ActivatedRoute, private service: ProductService, @Inject(DOCUMENT) public document:Document, public auth:AuthService) {
    this.activatedRoute.params.subscribe(data => {
      this.service.getProduct(data['id']).subscribe(resp => {
        let aux: any = resp
        this.product = aux.mensaje
      })
    })
  }

}
