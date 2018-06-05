package ru.gpsbox.pond.repository.search;

import ru.gpsbox.pond.domain.Chemicals;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Chemicals entity.
 */
public interface ChemicalsSearchRepository extends ElasticsearchRepository<Chemicals, String> {
}
