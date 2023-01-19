package ch.bbw.hosenhosen.plugins

import ch.bbw.hosenhosen.repository.Repository
import ch.bbw.hosenhosen.service.ProductService
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import java.sql.DriverManager
import java.sql.DriverManager.getConnection
import java.sql.PreparedStatement
import org.koin.ktor.ext.inject



fun Application.configureRouting() {

    val productService: ProductService by inject()

    routing {
        get("/products") {
            call.respond(productService.getProducts())
        }
    }
}

