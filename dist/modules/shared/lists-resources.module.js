import { NgModule } from '@angular/core';
import { SKY_LIB_RESOURCES_PROVIDERS } from '@skyux/i18n';
import { SkyListsResourcesProvider } from '../../plugin-resources/lists-resources-provider';
var SkyListsResourcesModule = (function () {
    function SkyListsResourcesModule() {
    }
    return SkyListsResourcesModule;
}());
export { SkyListsResourcesModule };
SkyListsResourcesModule.decorators = [
    { type: NgModule, args: [{
                providers: [{
                        provide: SKY_LIB_RESOURCES_PROVIDERS,
                        useClass: SkyListsResourcesProvider,
                        multi: true
                    }]
            },] },
];
/** @nocollapse */
SkyListsResourcesModule.ctorParameters = function () { return []; };
//# sourceMappingURL=lists-resources.module.js.map