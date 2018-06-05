package ru.gpsbox.pond.repository;

import ru.gpsbox.pond.domain.WaterChange;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the WaterChange entity.
 */
@SuppressWarnings("unused")
@Repository
public interface WaterChangeRepository extends MongoRepository<WaterChange, String> {

}
