package ru.gpsbox.pond.repository;

import ru.gpsbox.pond.domain.TempMeter;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the TempMeter entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TempMeterRepository extends MongoRepository<TempMeter, String> {

}
