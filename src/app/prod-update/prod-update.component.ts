import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductlistService } from '../productlist.service';

@Component({
  selector: 'app-prod-update',
  templateUrl: './prod-update.component.html',
  styleUrl: './prod-update.component.css'
})
export class ProdUpdateComponent implements OnInit {
  updateform!: FormGroup; 
  pid: number = this.activatedRoute.snapshot.params[`pid`];

  constructor(private activatedRoute: ActivatedRoute,
    private service: ProductlistService,
    private fb: FormBuilder,
    private router: Router
    ){}

    ngOnInit(): void {
        this.updateform = this.fb.group({
          pid: [null, Validators.required],
          pname:[null, Validators.required],
          price:[null, Validators.required],
          qty:[null, Validators.required]
        })
        this.getProductById();
    }
    getProductById(){
      this.service.getProductById(this.pid).subscribe((res)=>{
        console.log(res);
        this.updateform.patchValue(res);
      })
    }

    updateProduct(){
      this.service.UpdateProduct(this.pid, this.updateform.value).subscribe((res)=>{
        console.log(res);
        this.router.navigateByUrl('');
      })
    }

}
