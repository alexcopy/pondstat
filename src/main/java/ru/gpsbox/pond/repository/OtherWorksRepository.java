package ru.gpsbox.pond.repository;

import ru.gpsbox.pond.domain.OtherWorks;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the OtherWorks entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OtherWorksRepository extends MongoRepository<OtherWorks, String> {

}
