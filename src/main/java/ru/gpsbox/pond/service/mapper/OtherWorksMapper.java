package ru.gpsbox.pond.service.mapper;

import ru.gpsbox.pond.domain.*;
import ru.gpsbox.pond.service.dto.OtherWorksDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity OtherWorks and its DTO OtherWorksDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface OtherWorksMapper extends EntityMapper<OtherWorksDTO, OtherWorks> {


}
