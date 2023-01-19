package ch.bbw.hosenhosen.service

import ch.bbw.hosenhosen.dto.Product

interface ProductService {
    fun getProducts(): List<Product>
}