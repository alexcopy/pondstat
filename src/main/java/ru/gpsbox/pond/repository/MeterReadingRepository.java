package ru.gpsbox.pond.repository;

import ru.gpsbox.pond.domain.MeterReading;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the MeterReading entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MeterReadingRepository extends MongoRepository<MeterReading, String> {

}
