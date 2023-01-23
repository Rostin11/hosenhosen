plugins {
    application
    kotlin("jvm") version "1.6.0"
    kotlin("plugin.serialization") version "1.6.0"
    java
}

group = "kti.ti8m.ch"
version = "0.0.1"
repositories {
    mavenCentral()
    maven {
        url = uri("https://maven.pkg.jetbrains.space/public/p/ktor/eap")
        name = "ktor-eap"
    }
}

dependencies {

    //testing
    implementation(kotlin("stdlib"))
    implementation("org.hamcrest:hamcrest:2.2")
    implementation("io.ktor:ktor-serialization-kotlinx-json:2.1.3")
    implementation ("com.google.code.gson:gson:2.10")
    implementation("org.jetbrains.kotlinx:kotlinx-datetime:0.4.0")
    implementation("io.ktor:ktor-serialization:2.1.3")
    implementation("io.ktor:ktor-server:2.1.3")
    implementation("io.ktor:ktor-server-core:2.1.3")
    implementation("io.ktor:ktor-server-netty:2.1.3")
    implementation("ch.qos.logback:logback-classic:1.4.5")
    implementation("org.ktorm:ktorm-core:3.5.0")
    implementation("mysql:mysql-connector-java:8.0.30")
    implementation("org.mindrot:jbcrypt:0.4")
    implementation("io.insert-koin:koin-ktor:3.2.2")
    implementation("io.ktor:ktor-server-cors-jvm:2.1.3")

    testImplementation("io.mockk:mockk:1.13.2")
    testImplementation("org.junit.jupiter:junit-jupiter:5.9.0")
    testImplementation("io.insert-koin:koin-test-junit5:3.2.2")
    testImplementation ("io.insert-koin:koin-test:3.2.2")
    testImplementation(kotlin("script-runtime"))
    testImplementation ("io.ktor:ktor-server-test-host:2.1.3")
    testImplementation ("org.mockito.kotlin:mockito-kotlin:4.1.0")
    testImplementation("io.ktor:ktor-server-tests:2.1.3")
    testImplementation("org.mockito:mockito-core:4.11.0")
    testImplementation("io.rest-assured:kotlin-extensions:4.4.0")
}

tasks.test {
    useJUnitPlatform()
    testLogging {
        events(org.gradle.api.tasks.testing.logging.TestLogEvent.PASSED, org.gradle.api.tasks.testing.logging.TestLogEvent.SKIPPED, org.gradle.api.tasks.testing.logging.TestLogEvent.FAILED)
        exceptionFormat = org.gradle.api.tasks.testing.logging.TestExceptionFormat.SHORT
        showCauses = true
        showExceptions = true
        showStackTraces = true
    }
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile>().configureEach {
    kotlinOptions.jvmTarget = "11"
}
