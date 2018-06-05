package ru.gpsbox.pond.repository.search;

import ru.gpsbox.pond.domain.TempMeter;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the TempMeter entity.
 */
public interface TempMeterSearchRepository extends ElasticsearchRepository<TempMeter, String> {
}
