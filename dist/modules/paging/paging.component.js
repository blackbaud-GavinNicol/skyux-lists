import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
var SkyPagingComponent = (function () {
    function SkyPagingComponent() {
        this.pageSize = 10;
        this.maxPages = 5;
        this.currentPage = 1;
        this.itemCount = 0;
        this.currentPageChange = new EventEmitter();
        this.displayedPages = [];
        this.pageCount = 0;
    }
    SkyPagingComponent.prototype.ngOnChanges = function (changes) {
        this.setPage(this.currentPage);
    };
    SkyPagingComponent.prototype.setPage = function (pageNumber) {
        var previousPage = this.currentPage;
        this.setPageCount();
        if (pageNumber < 1 || this.pageCount < 1) {
            this.currentPage = 1;
        }
        else if (pageNumber > this.pageCount) {
            this.currentPage = this.pageCount;
        }
        else {
            this.currentPage = pageNumber;
        }
        this.setDisplayedPages();
        if (previousPage !== this.currentPage) {
            this.currentPageChange.emit(this.currentPage);
        }
    };
    SkyPagingComponent.prototype.nextPage = function () {
        this.setPage(this.currentPage + 1);
    };
    SkyPagingComponent.prototype.previousPage = function () {
        this.setPage(this.currentPage - 1);
    };
    Object.defineProperty(SkyPagingComponent.prototype, "isPreviousButtonDisabled", {
        get: function () {
            return (this.currentPage === 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyPagingComponent.prototype, "isNextButtonDisabled", {
        get: function () {
            return (this.currentPage === this.pageCount);
        },
        enumerable: true,
        configurable: true
    });
    SkyPagingComponent.prototype.getDisplayedPageNumbers = function (pageCount, maxDisplayedPages, pageNumber) {
        var pageIndex = pageNumber - 1;
        var pageBounds = Math.floor(maxDisplayedPages / 2);
        var upperBound = pageIndex + pageBounds;
        var lowerBound = pageIndex - pageBounds;
        if (maxDisplayedPages % 2 !== 0) {
            upperBound += 1;
        }
        // Wrap negative values to increase the upperbound
        if (lowerBound < 0) {
            upperBound -= lowerBound;
            lowerBound = 0;
        }
        // Wrap overflow to decrease the lowerbound
        if (upperBound > pageCount) {
            lowerBound -= upperBound - pageCount;
            upperBound = pageCount;
        }
        // If both are the same ignore everything else and just display it all
        if (pageCount < maxDisplayedPages) {
            lowerBound = 0;
            upperBound = pageCount;
        }
        var displayedPageNumbers = [];
        for (var i = lowerBound; i < upperBound; i++) {
            displayedPageNumbers.push(i + 1);
        }
        return displayedPageNumbers;
    };
    SkyPagingComponent.prototype.setPageCount = function () {
        if (this.itemCount === 0 || this.pageSize === 0) {
            this.pageCount = 0;
            return;
        }
        this.pageCount = Math.ceil(this.itemCount / this.pageSize);
    };
    SkyPagingComponent.prototype.setDisplayedPages = function () {
        this.displayedPages =
            this.getDisplayedPageNumbers(this.pageCount, this.maxPages, this.currentPage);
    };
    return SkyPagingComponent;
}());
export { SkyPagingComponent };
SkyPagingComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-paging',
                template: "<ul *ngIf=\"pageCount > 1\"\n  role=\"navigation\"\n  [attr.aria-label]=\"pagingLabel || ('skyux_paging_label' | skyLibResources)\"\n>\n  <li>\n    <button\n      class=\"sky-btn sky-btn-default sky-paging-btn sky-paging-btn-previous\"\n      sky-cmp-id=\"previous\"\n      type=\"button\"\n      [attr.aria-label]=\"'skyux_paging_previous' | skyLibResources\"\n      [disabled]=\"isPreviousButtonDisabled\"\n      (click)=\"previousPage()\"\n    >\n      <sky-icon icon=\"caret-left \"></sky-icon>\n    </button>\n  </li>\n  <li *ngFor=\"let pageNumber of displayedPages\"\n    class=\"sky-list-paging-link\"\n  >\n    <button\n      class=\"sky-btn sky-btn-default sky-paging-btn\"\n      type=\"button\"\n      [attr.aria-current]=\"currentPage === pageNumber\"\n      [attr.sky-cmp-id]=\"pageNumber\"\n      [disabled]=\"currentPage === pageNumber\"\n      [ngClass]=\"{ 'sky-paging-current': currentPage === pageNumber }\"\n      (click)=\"setPage(pageNumber)\"\n    >\n      {{ pageNumber }}\n    </button>\n  </li>\n  <li>\n    <button\n      class=\"sky-btn sky-btn-default sky-paging-btn sky-paging-btn-next\"\n      sky-cmp-id=\"next\"\n      type=\"button\"\n      [attr.aria-label]=\"'skyux_paging_next' | skyLibResources\"\n      [disabled]=\"isNextButtonDisabled\"\n      (click)=\"nextPage()\"\n    >\n      <sky-icon icon=\"caret-right \"></sky-icon>\n    </button>\n  </li>\n</ul>\n",
                styles: [":host{display:block}ul{margin:15px 0 0 0;display:inline-block;padding-left:0;border-radius:4px}li{display:inline}.sky-paging-btn{border-top:1px solid #e2e3e4;border-right:1px solid #e2e3e4;border-bottom:1px solid #e2e3e4;border-left:1px solid #e2e3e4;border-radius:0;background-color:#fff;color:inherit;float:left;margin-left:-1px;padding:4px 10px;text-decoration:none;line-height:1.42857;font-size:15px;cursor:pointer}.sky-paging-btn.sky-paging-caret{transform:none}.sky-paging-btn.sky-paging-current,.sky-paging-btn.sky-paging-current:disabled,.sky-paging-btn.sky-paging-current[disabled]{background-color:#eeeeef;cursor:default;color:inherit;opacity:1}.sky-paging-btn:hover{background-color:#d4d4d6}.sky-paging-btn:disabled{color:#686c73;cursor:not-allowed;pointer-events:none}.sky-paging-btn.sky-paging-btn-previous,.sky-paging-btn.sky-paging-btn-next{padding-left:8.5px;padding-right:8.5px}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyPagingComponent.ctorParameters = function () { return []; };
SkyPagingComponent.propDecorators = {
    'pageSize': [{ type: Input },],
    'maxPages': [{ type: Input },],
    'currentPage': [{ type: Input },],
    'itemCount': [{ type: Input },],
    'pagingLabel': [{ type: Input },],
    'currentPageChange': [{ type: Output },],
};
//# sourceMappingURL=paging.component.js.map