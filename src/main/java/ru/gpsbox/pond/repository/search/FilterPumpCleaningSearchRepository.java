package ru.gpsbox.pond.repository.search;

import ru.gpsbox.pond.domain.FilterPumpCleaning;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the FilterPumpCleaning entity.
 */
public interface FilterPumpCleaningSearchRepository extends ElasticsearchRepository<FilterPumpCleaning, String> {
}
