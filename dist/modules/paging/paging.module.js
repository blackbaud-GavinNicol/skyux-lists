import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyPagingComponent } from './paging.component';
import { SkyI18nModule } from '@skyux/i18n/modules/i18n';
import { SkyIconModule } from '@skyux/indicators/modules/icon';
import { SkyListsResourcesModule } from '../shared';
var SkyPagingModule = (function () {
    function SkyPagingModule() {
    }
    return SkyPagingModule;
}());
export { SkyPagingModule };
SkyPagingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyPagingComponent
                ],
                imports: [
                    CommonModule,
                    SkyI18nModule,
                    SkyIconModule,
                    SkyListsResourcesModule
                ],
                exports: [
                    SkyPagingComponent
                ]
            },] },
];
/** @nocollapse */
SkyPagingModule.ctorParameters = function () { return []; };
//# sourceMappingURL=paging.module.js.map