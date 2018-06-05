package ru.gpsbox.pond.config;

import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableFeignClients(basePackages = "ru.gpsbox.pond")
public class FeignConfiguration {

}
