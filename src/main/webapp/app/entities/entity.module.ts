import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PondgateLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { PondgateTankMySuffixModule } from './tank-my-suffix/tank-my-suffix.module';
import { PondgateDeviceMySuffixModule } from './device-my-suffix/device-my-suffix.module';
import { PondgateTempMeterMySuffixModule } from './temp-meter-my-suffix/temp-meter-my-suffix.module';
import { PondgateMeterReadingMySuffixModule } from './meter-reading-my-suffix/meter-reading-my-suffix.module';
import { PondgateFilterPumpCleaningMySuffixModule } from './filter-pump-cleaning-my-suffix/filter-pump-cleaning-my-suffix.module';
import { PondgateWaterChangeMySuffixModule } from './water-change-my-suffix/water-change-my-suffix.module';
import { PondgateLiveStockMySuffixModule } from './live-stock-my-suffix/live-stock-my-suffix.module';
import { PondgateChemicalAnalysisMySuffixModule } from './chemical-analysis-my-suffix/chemical-analysis-my-suffix.module';
import { PondgateChemicalsMySuffixModule } from './chemicals-my-suffix/chemicals-my-suffix.module';
import { PondgateOtherWorksMySuffixModule } from './other-works-my-suffix/other-works-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        PondgateLocationMySuffixModule,
        PondgateTankMySuffixModule,
        PondgateDeviceMySuffixModule,
        PondgateTempMeterMySuffixModule,
        PondgateMeterReadingMySuffixModule,
        PondgateFilterPumpCleaningMySuffixModule,
        PondgateWaterChangeMySuffixModule,
        PondgateLiveStockMySuffixModule,
        PondgateChemicalAnalysisMySuffixModule,
        PondgateChemicalsMySuffixModule,
        PondgateOtherWorksMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PondgateEntityModule {}
