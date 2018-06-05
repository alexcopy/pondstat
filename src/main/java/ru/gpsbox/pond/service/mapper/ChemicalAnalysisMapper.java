package ru.gpsbox.pond.service.mapper;

import ru.gpsbox.pond.domain.*;
import ru.gpsbox.pond.service.dto.ChemicalAnalysisDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity ChemicalAnalysis and its DTO ChemicalAnalysisDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ChemicalAnalysisMapper extends EntityMapper<ChemicalAnalysisDTO, ChemicalAnalysis> {


}
