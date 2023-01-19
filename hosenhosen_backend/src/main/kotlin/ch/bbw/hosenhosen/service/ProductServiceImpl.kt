package ch.bbw.hosenhosen.service

import ch.bbw.hosenhosen.dto.Product
import ch.bbw.hosenhosen.repository.Repository

class ProductServiceImpl(private val productRepo: Repository): ProductService {
    override fun getProducts(): List<Product> {
        return productRepo.getProducts()
    }
}