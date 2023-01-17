package com.example.plugins

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import java.sql.DriverManager
import java.sql.DriverManager.getConnection
import java.sql.PreparedStatement


fun Application.configureRouting() {

    routing {
        get("/products") {
            call.respond("")
            createDBConnection()
        }
    }
}

fun createDBConnection(){
    val myConn = getConnection("jdbc:mariadb://localhost:3306/", "root", "1234")
    Class.forName ("org.mariadb.jdbc.Driver");

    val prepareStatement = myConn.prepareStatement("")

// Submit the query
    var executeQuery = prepareStatement.executeQuery()
}

