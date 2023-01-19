package ch.bbw.hosenhosen.db

import com.typesafe.config.ConfigFactory
import io.ktor.server.config.*
import org.ktorm.database.Database
import org.ktorm.logging.ConsoleLogger
import org.ktorm.logging.LogLevel

object DatabaseConnection {
    val database = Database.connect(
        url =  HoconApplicationConfig(ConfigFactory.load()).config("ktor").property("dbUrl").getString(),
        driver = "com.mysql.cj.jdbc.Driver",
        user = "root",
        password = "1234",
        logger = ConsoleLogger(threshold = LogLevel.DEBUG)
    )

}