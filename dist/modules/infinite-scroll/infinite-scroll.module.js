// #region imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyI18nModule } from '@skyux/i18n/modules/i18n';
import { SkyWaitModule } from '@skyux/indicators/modules/wait';
import { SkyListsResourcesModule } from '../shared';
import { SkyInfiniteScrollComponent } from './infinite-scroll.component';
// #endregion
var SkyInfiniteScrollModule = (function () {
    function SkyInfiniteScrollModule() {
    }
    return SkyInfiniteScrollModule;
}());
export { SkyInfiniteScrollModule };
SkyInfiniteScrollModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyInfiniteScrollComponent
                ],
                imports: [
                    CommonModule,
                    SkyI18nModule,
                    SkyListsResourcesModule,
                    SkyWaitModule
                ],
                exports: [
                    SkyInfiniteScrollComponent
                ]
            },] },
];
/** @nocollapse */
SkyInfiniteScrollModule.ctorParameters = function () { return []; };
//# sourceMappingURL=infinite-scroll.module.js.map