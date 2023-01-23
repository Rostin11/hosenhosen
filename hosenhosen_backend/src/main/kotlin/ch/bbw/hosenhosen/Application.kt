package ch.bbw.hosenhosen

import ch.bbw.hosenhosen.plugins.configureRouting
import ch.bbw.hosenhosen.plugins.configureSecurity
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.cors.routing.*
import kti.ti8m.ch.api.routes.configureSerialization
import kti.ti8m.ch.util.plugins.configureKoin

fun main(args: Array<String>): Unit = EngineMain.main(args)

fun Application.module() {
    install(CORS) {
        allowMethod(HttpMethod.Options)
        allowMethod(HttpMethod.Put)
        allowMethod(HttpMethod.Delete)
        allowMethod(HttpMethod.Patch)
        allowHeader(HttpHeaders.Authorization)
        allowHeader("MyCustomHeader")
        anyHost() // @TODO: Don't do this in production if possible. Try to limit it.
    }
    configureSecurity()
    configureKoin()
    configureSerialization()
    configureRouting()
}
