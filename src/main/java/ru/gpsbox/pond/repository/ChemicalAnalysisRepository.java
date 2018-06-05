package ru.gpsbox.pond.repository;

import ru.gpsbox.pond.domain.ChemicalAnalysis;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the ChemicalAnalysis entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ChemicalAnalysisRepository extends MongoRepository<ChemicalAnalysis, String> {

}
