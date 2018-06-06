package ru.gpsbox.gate.config;

import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableFeignClients(basePackages = "ru.gpsbox.gate")
public class FeignConfiguration {

}
