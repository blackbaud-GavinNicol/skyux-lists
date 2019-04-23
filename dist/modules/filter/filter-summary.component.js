import { Component, ChangeDetectionStrategy } from '@angular/core';
var SkyFilterSummaryComponent = (function () {
    function SkyFilterSummaryComponent() {
    }
    return SkyFilterSummaryComponent;
}());
export { SkyFilterSummaryComponent };
SkyFilterSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-filter-summary',
                styles: [".sky-filter-summary-header{margin-right:10px;font-weight:600}.sky-filter-summary{background-color:#fff;overflow-x:auto;display:flex;align-items:center}.sky-filter-summary-items{white-space:nowrap}\n"],
                template: "<div class=\"sky-filter-summary\">\n  <span class=\"sky-filter-summary-header\">{{'skyux_filter_summary_header' | skyLibResources}}:</span>\n  <div class=\"sky-filter-summary-items\">\n      <ng-content></ng-content>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyFilterSummaryComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=filter-summary.component.js.map