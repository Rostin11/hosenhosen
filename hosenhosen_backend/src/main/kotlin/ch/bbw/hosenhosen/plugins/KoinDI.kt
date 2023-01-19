package kti.ti8m.ch.util.plugins

import ch.bbw.hosenhosen.plugins.productModule
import io.ktor.server.application.*
import org.koin.core.context.startKoin

fun Application.configureKoin() {
    startKoin {
        modules(productModule)
    }
}