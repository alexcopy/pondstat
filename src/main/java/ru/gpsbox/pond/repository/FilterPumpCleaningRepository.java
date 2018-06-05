package ru.gpsbox.pond.repository;

import ru.gpsbox.pond.domain.FilterPumpCleaning;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the FilterPumpCleaning entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FilterPumpCleaningRepository extends MongoRepository<FilterPumpCleaning, String> {

}
