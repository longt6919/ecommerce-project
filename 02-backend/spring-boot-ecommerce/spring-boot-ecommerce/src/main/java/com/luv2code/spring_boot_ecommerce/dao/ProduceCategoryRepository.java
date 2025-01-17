package com.luv2code.spring_boot_ecommerce.dao;

import com.luv2code.spring_boot_ecommerce.entity.Product;
import com.luv2code.spring_boot_ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")

//productCategory ten tap hop cac tai nguyen se hien thi
//product-category duong link url
@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")

public interface ProduceCategoryRepository extends JpaRepository<ProductCategory,Long> {

}
