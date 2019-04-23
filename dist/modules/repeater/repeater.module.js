import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkyLogModule } from '@skyux/core/modules/log';
import { SkyCheckboxModule } from '@skyux/forms/modules/checkbox';
import { SkyI18nModule } from '@skyux/i18n/modules/i18n';
import { SkyChevronModule } from '@skyux/indicators/modules/chevron';
import { SkyInlineFormModule } from '@skyux/inline-form';
import { SkyRepeaterComponent } from './repeater.component';
import { SkyRepeaterItemContentComponent } from './repeater-item-content.component';
import { SkyRepeaterItemContextMenuComponent } from './repeater-item-context-menu.component';
import { SkyRepeaterItemComponent } from './repeater-item.component';
import { SkyRepeaterItemTitleComponent } from './repeater-item-title.component';
import { SkyRepeaterService } from './repeater.service';
import { SkyListsResourcesModule } from '../shared';
var SkyRepeaterModule = (function () {
    function SkyRepeaterModule() {
    }
    return SkyRepeaterModule;
}());
export { SkyRepeaterModule };
SkyRepeaterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyRepeaterComponent,
                    SkyRepeaterItemComponent,
                    SkyRepeaterItemContentComponent,
                    SkyRepeaterItemContextMenuComponent,
                    SkyRepeaterItemTitleComponent
                ],
                providers: [
                    SkyRepeaterService
                ],
                imports: [
                    BrowserAnimationsModule,
                    CommonModule,
                    SkyChevronModule,
                    SkyLogModule,
                    SkyCheckboxModule,
                    SkyI18nModule,
                    SkyListsResourcesModule,
                    SkyInlineFormModule
                ],
                exports: [
                    SkyRepeaterComponent,
                    SkyRepeaterItemComponent,
                    SkyRepeaterItemContentComponent,
                    SkyRepeaterItemContextMenuComponent,
                    SkyRepeaterItemTitleComponent
                ]
            },] },
];
/** @nocollapse */
SkyRepeaterModule.ctorParameters = function () { return []; };
//# sourceMappingURL=repeater.module.js.map