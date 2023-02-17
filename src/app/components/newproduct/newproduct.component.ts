import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/ServiceCategory/category.service';
import { ProductService } from 'src/app/services/ServiceProduct/product.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent {

  myForm: FormGroup
  categories: any
  loader: boolean

  constructor(private fb: FormBuilder, private productService: ProductService, private categoryService: CategoryService, private router: Router) {
    this.myForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]],
      category: [null, [Validators.required]],
      price: ['', [Validators.required]]
    })
    this.loader = true
  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this.categoryService.getData().subscribe(resp => {
      this.categories = resp.mensaje
    })
  }

  guardar() {
    this.loader = false
    this.createGame()
  }

  createGame() {
    let obj = {
      title: this.myForm.get('title')?.value,
      description: this.myForm.get('description')?.value,
      category: this.myForm.get('category')?.value,
      price: this.myForm.get('price')?.value
    }

    if (this.myForm.dirty && this.myForm.valid) {
      this.productService.saveProduct(obj).subscribe(resp => {
        this.router.navigate(['/home'])
      })
    }
  }

}
