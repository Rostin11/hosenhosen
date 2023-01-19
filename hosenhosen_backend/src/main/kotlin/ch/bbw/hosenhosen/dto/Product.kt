package ch.bbw.hosenhosen.dto

import kotlinx.serialization.Serializable

@Serializable
data class Product(
    val id: Int,
    val name: String,
    val image: String,
    val category: String,
    val description: String,
    val price: Double
)