import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/ServiceCategory/category.service';
import { ProductService } from 'src/app/services/ServiceProduct/product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  myForm: FormGroup
  id: any
  nameProduct: any
  categories: any
  loader: boolean

  constructor(private fb: FormBuilder, private productService: ProductService, private categoryService: CategoryService, private router: ActivatedRoute, private _router: Router) {
    this.myForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required]]
    })
    this.loader = true
  }

  ngOnInit(): void {
    this.router.params.subscribe(paramsId => {
      this.id = paramsId['id']
    })

    this.productService.getProduct(this.id).subscribe(resp => {
      this.changeForm(resp)
    })

    this.getCategories()
  }

  getCategories() {
    this.categoryService.getData().subscribe(resp => {
      this.categories = resp.mensaje
    })
  }

  guardar() {
    this.loader = false
    this.updateGame()
  }

  updateGame() {
    let obj = {
      id: this.id,
      title: this.myForm.get('title')?.value,
      description: this.myForm.get('description')?.value,
      category: this.myForm.get('category')?.value,
      price: this.myForm.get('price')?.value
    }

    if (this.myForm.dirty && this.myForm.valid) {
      this.productService.updateProduct(obj).subscribe(resp => {
        this._router.navigate(['/home'])
      })
    }
  }

  changeForm(data: any) {
    let myData = data.mensaje
    this.nameProduct = myData.title
    this.myForm = this.fb.group({
      title: [myData.title, [Validators.required, Validators.minLength(5)]],
      description: [myData.description, [Validators.required, Validators.minLength(5), Validators.maxLength(500)]],
      category: [myData.category, [Validators.required]],
      price: [myData.price, [Validators.required]]
    })
  }

}
