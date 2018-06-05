package ru.gpsbox.pond.service.mapper;

import ru.gpsbox.pond.domain.*;
import ru.gpsbox.pond.service.dto.WaterChangeDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity WaterChange and its DTO WaterChangeDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface WaterChangeMapper extends EntityMapper<WaterChangeDTO, WaterChange> {


}
