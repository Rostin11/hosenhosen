package ch.bbw.hosenhosen.entity

import org.ktorm.entity.Entity
import org.ktorm.schema.*


interface Product : Entity<Product> {
    companion object : Entity.Factory<Product>()

    val id: Int
    val name: String
    val image: String
    val category: String
    val description: String
    val price: Double
}

object Products : Table<Product>("products") {
    val id = int("id").primaryKey().bindTo { it.id }
    val name = varchar("name").bindTo { it.name }
    val image = varchar("image").bindTo { it.image }
    val category = varchar("category").bindTo { it.category }
    val description = varchar("description").bindTo { it.description }
    val price = double("price").bindTo { it.price }
}