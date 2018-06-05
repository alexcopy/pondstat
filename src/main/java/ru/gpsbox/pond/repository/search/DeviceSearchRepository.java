package ru.gpsbox.pond.repository.search;

import ru.gpsbox.pond.domain.Device;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Device entity.
 */
public interface DeviceSearchRepository extends ElasticsearchRepository<Device, String> {
}
