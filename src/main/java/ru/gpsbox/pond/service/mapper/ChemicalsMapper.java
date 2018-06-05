package ru.gpsbox.pond.service.mapper;

import ru.gpsbox.pond.domain.*;
import ru.gpsbox.pond.service.dto.ChemicalsDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Chemicals and its DTO ChemicalsDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ChemicalsMapper extends EntityMapper<ChemicalsDTO, Chemicals> {


}
