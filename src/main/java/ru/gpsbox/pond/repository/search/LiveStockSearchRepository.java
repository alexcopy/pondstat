package ru.gpsbox.pond.repository.search;

import ru.gpsbox.pond.domain.LiveStock;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the LiveStock entity.
 */
public interface LiveStockSearchRepository extends ElasticsearchRepository<LiveStock, String> {
}
