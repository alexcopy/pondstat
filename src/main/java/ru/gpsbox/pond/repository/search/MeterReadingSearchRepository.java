package ru.gpsbox.pond.repository.search;

import ru.gpsbox.pond.domain.MeterReading;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the MeterReading entity.
 */
public interface MeterReadingSearchRepository extends ElasticsearchRepository<MeterReading, String> {
}
