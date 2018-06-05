package ru.gpsbox.pond.service.mapper;

import ru.gpsbox.pond.domain.*;
import ru.gpsbox.pond.service.dto.LiveStockDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity LiveStock and its DTO LiveStockDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface LiveStockMapper extends EntityMapper<LiveStockDTO, LiveStock> {


}
