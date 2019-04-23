import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SkyDropdownMessageType } from '@skyux/popovers/modules/dropdown';
import { SkySortService } from './sort.service';
var nextId = 0;
var SkySortComponent = (function () {
    function SkySortComponent() {
        this.sortByHeadingId = "sky-sort-heading-" + ++nextId;
        this.showButtonText = false;
        this.dropdownController = new Subject();
    }
    SkySortComponent.prototype.dropdownClicked = function () {
        this.dropdownController.next({
            type: SkyDropdownMessageType.Close
        });
    };
    return SkySortComponent;
}());
export { SkySortComponent };
SkySortComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-sort',
                styles: [".sky-sort-menu-heading{background-color:transparent;border:none;display:block;margin:4px;min-width:160px;text-align:left;transition:background-color 150ms;padding:3px 20px;text-align:left;width:100%}.sky-sort-heading-divider{margin:0;height:1px;overflow:hidden;background-color:#eeeeef}@media (max-width: 767px){.sky-sort-btn-text{width:0;height:0;padding:0;opacity:0;position:absolute;margin:-1px;border:0;overflow:hidden;clip:rect(0, 0, 0, 0);outline:none;white-space:nowrap}}\n"],
                template: "<div class=\"sky-sort\">\n  <sky-dropdown\n    buttonType=\"select\"\n    [label]=\"'skyux_sort_button_label' | skyLibResources\"\n    [messageStream]=\"dropdownController\"\n    [title]=\"'skyux_sort_button_label' | skyLibResources\">\n    <sky-dropdown-button>\n      <sky-icon icon=\"sort\"></sky-icon>\n      <span\n        *ngIf=\"showButtonText\"\n        class=\"sky-sort-btn-text\">\n        {{ 'skyux_sort_button_label' | skyLibResources }}\n      </span>\n    </sky-dropdown-button>\n    <sky-dropdown-menu\n      ariaRole=\"menu\"\n      [ariaLabelledBy]=\"sortByHeadingId\"\n      (click)=\"dropdownClicked()\">\n      <div\n        class=\"sky-sort-menu-heading sky-subsection-heading\"\n        [id]=\"sortByHeadingId\">\n        {{ 'skyux_sort_menu_heading' | skyLibResources }}\n      </div>\n      <div class=\"sky-sort-heading-divider\">\n      </div>\n      <ng-content></ng-content>\n    </sky-dropdown-menu>\n  </sky-dropdown>\n</div>\n",
                providers: [
                    SkySortService
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkySortComponent.ctorParameters = function () { return []; };
SkySortComponent.propDecorators = {
    'showButtonText': [{ type: Input },],
};
//# sourceMappingURL=sort.component.js.map