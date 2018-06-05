package ru.gpsbox.pond.repository.search;

import ru.gpsbox.pond.domain.ChemicalAnalysis;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the ChemicalAnalysis entity.
 */
public interface ChemicalAnalysisSearchRepository extends ElasticsearchRepository<ChemicalAnalysis, String> {
}
