package ru.gpsbox.pond.repository.search;

import ru.gpsbox.pond.domain.OtherWorks;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the OtherWorks entity.
 */
public interface OtherWorksSearchRepository extends ElasticsearchRepository<OtherWorks, String> {
}
