package ch.bbw.hosenhosen.repository

import ch.bbw.hosenhosen.dto.Product
import ch.bbw.hosenhosen.entity.Products
import org.ktorm.database.Database
import org.ktorm.dsl.from
import org.ktorm.dsl.map
import org.ktorm.dsl.select

class Repository(private val db: Database) {

    fun getProducts(): List<Product>{
        return db.from(Products).select().map {
            val id = it[Products.id]
            val name = it[Products.name]
            val image = it[Products.image]
            val category = it[Products.category]
            val description =it[Products.description]
            val price = it[Products.price]

            Product(id ?: -1, name ?: "", image ?: "", category ?: "", description ?: "" , price ?: 0.0)
        }
    }
}