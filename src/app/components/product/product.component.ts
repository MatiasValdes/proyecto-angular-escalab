import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() dataProduct: any = { id: "", title: "", price: "", description: "", category: "", image: "", rating: {} }
  @Output() selectProduct: EventEmitter<any>

  ngOnInit(): void {

  }

  constructor(private router: Router) {
    this.selectProduct = new EventEmitter();
  }

  detailProduct(index: number) {
    this.router.navigate(['/detailproduct', index]);
  }
}
