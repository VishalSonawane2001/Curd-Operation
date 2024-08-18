import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../productlist.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrl: './from.component.css'
})
export class FromComponent implements OnInit {
  form! : FormGroup;

  constructor(private productService: ProductlistService, private fb: FormBuilder, private router: Router){}
  ngOnInit(): void {
    this.form = this.fb.group({
      pid:[null, Validators.required],
      pname:[null, Validators.required],
      price:[null, Validators.required],
      qty:[null, Validators.required]
    })
  }
  addprod(){
    this.productService.addProduct(this.form.value).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('');
    })
  }
  // gotohome(){
  //   this.router.navigate(['/products']);
   
//  }
}
