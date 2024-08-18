import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../productlist.service';

@Component({
  selector: 'app-prodlist',
  templateUrl: './prodlist.component.html',
  styleUrl: './prodlist.component.css'
})
export class ProdlistComponent implements OnInit {
  products: any[]=[];
  constructor(private prodlistService: ProductlistService){}

  ngOnInit(): void{
    this.getProducts();
  }

  getProducts(){
    this.prodlistService.getAllProducts().subscribe(data =>{
      console.log(data);
      this.products = data;
    })
  }
  deleteProducts(id: number){
    this.prodlistService.deleteProduct(id).subscribe(() =>{
      this.getProducts();
      console.log(id);
    })
  }

}
