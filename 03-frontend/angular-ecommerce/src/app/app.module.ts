import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';

import { Routes, RouterModule} from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes =[
    {path: 'products/:id',
    component: ProductDetailsComponent},
    {path: 'search/:keyword',
    component: ProductListComponent},
    {path: 'category/:id/:name', //đường dẫn có tham số động id
    component: ProductListComponent},// thành phần được hiển thị cho route này
    {path: 'category',
     component: ProductListComponent},
    {path: 'products', 
    component: ProductListComponent},
    {path: '',// nếu đường dẫn rỗng thì chuyển tới product
         redirectTo:'/products', //tuyến đường chuyển tới product
         pathMatch:'full'},//Điều kiện khớp đầy đủ đường dẫn
    {path: '**',//kí hiệu ko khớp bất kì đường dẫn nào
         redirectTo:'/products',// như trên
          pathMatch:'full'}// như trên

];

 
@NgModule({ 
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductCategoryMenuComponent,
        ProductDetailsComponent,
SearchComponent
    ],

    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        HttpClientModule,
        NgbModule
      ],
      providers: [ProductService],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    
