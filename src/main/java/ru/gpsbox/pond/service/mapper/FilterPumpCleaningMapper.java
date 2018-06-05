package ru.gpsbox.pond.service.mapper;

import ru.gpsbox.pond.domain.*;
import ru.gpsbox.pond.service.dto.FilterPumpCleaningDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity FilterPumpCleaning and its DTO FilterPumpCleaningDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface FilterPumpCleaningMapper extends EntityMapper<FilterPumpCleaningDTO, FilterPumpCleaning> {


}
