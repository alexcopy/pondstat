package ru.gpsbox.pond.service.mapper;

import ru.gpsbox.pond.domain.*;
import ru.gpsbox.pond.service.dto.TankDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Tank and its DTO TankDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface TankMapper extends EntityMapper<TankDTO, Tank> {


}
