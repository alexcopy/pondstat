package ru.gpsbox.pond.repository.search;

import ru.gpsbox.pond.domain.Tank;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tank entity.
 */
public interface TankSearchRepository extends ElasticsearchRepository<Tank, String> {
}
