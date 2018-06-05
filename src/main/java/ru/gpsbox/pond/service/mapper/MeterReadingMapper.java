package ru.gpsbox.pond.service.mapper;

import ru.gpsbox.pond.domain.*;
import ru.gpsbox.pond.service.dto.MeterReadingDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity MeterReading and its DTO MeterReadingDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface MeterReadingMapper extends EntityMapper<MeterReadingDTO, MeterReading> {


}
