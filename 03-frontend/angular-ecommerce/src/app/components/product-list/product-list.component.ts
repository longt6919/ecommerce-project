import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-gird.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products: Product[] =[];
currentCategoryId: number =1;
currentCategoryName: string = "";
searchModel: boolean = false;

  constructor(private productService: ProductService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
        // Sử dụng paramMap để theo dõi sự thay đổi của các tham số trên route
    this.route.paramMap.subscribe(() =>{
    this.listProducts();
    });
  }
  listProducts() {
    this.searchModel = this.route.snapshot.paramMap.has('keyword');
    if( this.searchModel){
this.handleSearchProduct();
    }else{
      this.handleListProducts();
    }
  }
handleSearchProduct(){
  const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;
  this.productService.searchProducts(theKeyword).subscribe(
    data =>{
      this.products = data;
    }
  );
}

  handleListProducts(){
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    // Nếu có tham số 'id', lấy giá trị của tham số và gán cho currentCategoryId
    if(hasCategoryId){
      this. currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
      this.currentCategoryName = this.route.snapshot.paramMap.get('name')!;
    }else{
            // Nếu không có, gán giá trị mặc định là 1
       this.currentCategoryId =1;
       this.currentCategoryName ='Books'
    }
        // Gọi phương thức getProductList từ ProductService để lấy danh sách sản phẩm theo ID danh mục
this.productService.getProductList(this.currentCategoryId).subscribe(
  data =>{
            // Gán dữ liệu nhận được từ service cho biến products
    this.products = data;
  }
)
  }
}
