package ru.gpsbox.pond.repository;

import ru.gpsbox.pond.domain.Tank;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Tank entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TankRepository extends MongoRepository<Tank, String> {

}
