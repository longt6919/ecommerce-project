import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
 product!: Product;//Dấu chấm than sau product có nghĩa là bạn cam đoan với TypeScript
 // rằng biến product sẽ luôn có giá trị hợp lệ khi nó được sử dụng ko bh null
constructor(private productService: ProductService,
  private route: ActivatedRoute 
){}
ngOnInit(): void{
this.route.paramMap.subscribe(() =>{
this.handleProductDetails();
})
}
  handleProductDetails() {
const theProductId: number = +this.route.snapshot.paramMap.get('id')!;
this.productService.getProduct(theProductId).subscribe(
  data =>{
    this.product = data;
  }
);
  }

}
