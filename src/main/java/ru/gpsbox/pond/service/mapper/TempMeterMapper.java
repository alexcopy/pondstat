package ru.gpsbox.pond.service.mapper;

import ru.gpsbox.pond.domain.*;
import ru.gpsbox.pond.service.dto.TempMeterDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity TempMeter and its DTO TempMeterDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface TempMeterMapper extends EntityMapper<TempMeterDTO, TempMeter> {


}
