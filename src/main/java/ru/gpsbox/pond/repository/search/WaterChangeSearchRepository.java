package ru.gpsbox.pond.repository.search;

import ru.gpsbox.pond.domain.WaterChange;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the WaterChange entity.
 */
public interface WaterChangeSearchRepository extends ElasticsearchRepository<WaterChange, String> {
}
