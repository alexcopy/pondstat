package ru.gpsbox.pond.repository;

import ru.gpsbox.pond.domain.Chemicals;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Chemicals entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ChemicalsRepository extends MongoRepository<Chemicals, String> {

}
