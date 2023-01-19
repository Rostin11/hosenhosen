package ch.bbw.hosenhosen.plugins

import ch.bbw.hosenhosen.db.DatabaseConnection
import ch.bbw.hosenhosen.repository.Repository
import ch.bbw.hosenhosen.service.ProductService
import ch.bbw.hosenhosen.service.ProductServiceImpl
import org.koin.dsl.module

val productModule = module{
    single<ProductService> { ProductServiceImpl(get()) }
    single { Repository(DatabaseConnection.database) }
}