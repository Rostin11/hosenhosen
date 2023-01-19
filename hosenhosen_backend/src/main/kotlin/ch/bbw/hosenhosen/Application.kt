package ch.bbw.hosenhosen

import ch.bbw.hosenhosen.plugins.configureRouting
import ch.bbw.hosenhosen.plugins.configureSecurity
import io.ktor.server.application.*
import io.ktor.server.netty.*
import kti.ti8m.ch.api.routes.configureSerialization
import kti.ti8m.ch.util.plugins.configureKoin

fun main(args: Array<String>): Unit = EngineMain.main(args)

fun Application.module() {
    configureSecurity()
    configureKoin()
    configureSerialization()
    configureRouting()
}
