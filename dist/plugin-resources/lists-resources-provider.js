import { Injectable } from '@angular/core';
import { getStringForLocale } from '@skyux/i18n/modules/i18n/get-string-for-locale';
var SkyListsResourcesProvider = (function () {
    function SkyListsResourcesProvider() {
        this.resources = { "EN-US": { "skyux_filter_button_title": "Filter", "skyux_filter_summary_close": "Remove filter", "skyux_filter_summary_header": "Filter", "skyux_infinite_scroll_load_more_button": "Load more", "skyux_paging_label": "Pagination", "skyux_paging_next": "Next", "skyux_paging_previous": "Previous", "skyux_repeater_item_checkbox_label": "Select row", "skyux_sort_button_label": "Sort", "skyux_sort_menu_heading": "Sort by" } };
    }
    SkyListsResourcesProvider.prototype.getString = function (localeInfo, name) {
        return getStringForLocale(this.resources, localeInfo.locale, name);
    };
    return SkyListsResourcesProvider;
}());
export { SkyListsResourcesProvider };
SkyListsResourcesProvider.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyListsResourcesProvider.ctorParameters = function () { return []; };
//# sourceMappingURL=lists-resources-provider.js.map