package ru.gpsbox.pond.repository;

import ru.gpsbox.pond.domain.LiveStock;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the LiveStock entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LiveStockRepository extends MongoRepository<LiveStock, String> {

}
