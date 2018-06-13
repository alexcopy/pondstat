import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GateLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { GateTankMySuffixModule } from './tank-my-suffix/tank-my-suffix.module';
import { GateTempMeterMySuffixModule } from './temp-meter-my-suffix/temp-meter-my-suffix.module';
import { GateMeterReadingMySuffixModule } from './meter-reading-my-suffix/meter-reading-my-suffix.module';
import { GateFilterPumpCleaningMySuffixModule } from './filter-pump-cleaning-my-suffix/filter-pump-cleaning-my-suffix.module';
import { GateWaterChangeMySuffixModule } from './water-change-my-suffix/water-change-my-suffix.module';
import { GateLiveStockMySuffixModule } from './live-stock-my-suffix/live-stock-my-suffix.module';
import { GateChemicalAnalysisMySuffixModule } from './chemical-analysis-my-suffix/chemical-analysis-my-suffix.module';
import { GateChemicalsMySuffixModule } from './chemicals-my-suffix/chemicals-my-suffix.module';
import { GateOtherWorksMySuffixModule } from './other-works-my-suffix/other-works-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        GateLocationMySuffixModule,
        GateTankMySuffixModule,
        GateTempMeterMySuffixModule,
        GateMeterReadingMySuffixModule,
        GateFilterPumpCleaningMySuffixModule,
        GateWaterChangeMySuffixModule,
        GateLiveStockMySuffixModule,
        GateChemicalAnalysisMySuffixModule,
        GateChemicalsMySuffixModule,
        GateOtherWorksMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GateEntityModule {}
