import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
var nextId = 0;
var SkyFilterButtonComponent = (function () {
    function SkyFilterButtonComponent() {
        this.active = false;
        this.showButtonText = false;
        this.disabled = false;
        this.filterButtonClick = new EventEmitter();
    }
    Object.defineProperty(SkyFilterButtonComponent.prototype, "filterButtonId", {
        get: function () {
            return this._filterButtonId || "sky-filter-button-" + ++nextId;
        },
        set: function (value) {
            this._filterButtonId = value;
        },
        enumerable: true,
        configurable: true
    });
    SkyFilterButtonComponent.prototype.filterButtonOnClick = function () {
        this.filterButtonClick.emit(undefined);
    };
    return SkyFilterButtonComponent;
}());
export { SkyFilterButtonComponent };
SkyFilterButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-filter-button',
                styles: [".sky-filter-btn-active,.sky-filter-btn-active:hover,.sky-filter-btn-active:focus{color:#71bf43;border:2px solid #71bf43;padding:5px 11px}.sky-filter-btn-active:hover,.sky-filter-btn-active:focus{color:#212327}@media (max-width: 767px){.sky-filter-btn-text{display:none}::ng-deep .sky-dropdown-caret{display:none}}\n"],
                template: "<button\n  class=\"sky-btn sky-btn-default sky-filter-btn\"\n  type=\"button\"\n  [attr.aria-controls]=\"ariaControls\"\n  [attr.aria-expanded]=\"ariaExpanded\"\n  [attr.title]=\"'skyux_filter_button_title' | skyLibResources\"\n  [disabled]=\"disabled\"\n  [id]=\"filterButtonId\"\n  [ngClass]=\"{'sky-filter-btn-active sky-rounded-corners': active}\"\n  (click)=\"filterButtonOnClick()\"\n>\n  <sky-icon\n    icon=\"filter\"\n    size=\"lg\"\n  >\n</sky-icon>\n  <span\n    *ngIf=\"showButtonText\"\n    class=\"sky-filter-btn-text\"\n  >\n    {{ 'skyux_filter_button_title' | skyLibResources }}\n  </span>\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyFilterButtonComponent.ctorParameters = function () { return []; };
SkyFilterButtonComponent.propDecorators = {
    'filterButtonId': [{ type: Input },],
    'ariaControls': [{ type: Input },],
    'ariaExpanded': [{ type: Input },],
    'active': [{ type: Input },],
    'showButtonText': [{ type: Input },],
    'disabled': [{ type: Input },],
    'filterButtonClick': [{ type: Output },],
};
//# sourceMappingURL=filter-button.component.js.map