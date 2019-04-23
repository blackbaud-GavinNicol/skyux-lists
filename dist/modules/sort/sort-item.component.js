import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SkySortService } from './sort.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var SORT_ITEM_ID_PREFIX = 'sky-sort-item-';
var sortItemIdNumber = 0;
var SkySortItemComponent = (function () {
    function SkySortItemComponent(sortService, detector) {
        this.sortService = sortService;
        this.detector = detector;
        this.itemSelect = new EventEmitter();
        this.isSelected = new BehaviorSubject(false);
    }
    SkySortItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        sortItemIdNumber++;
        this.sortItemId = SORT_ITEM_ID_PREFIX + sortItemIdNumber.toString();
        this.subscription = this.sortService.selectedItem.subscribe(function (itemId) {
            _this.isSelected.next(itemId === _this.sortItemId);
            _this.detector.detectChanges();
        });
        if (this.active) {
            this.sortService.selectItem(this.sortItemId);
        }
    };
    SkySortItemComponent.prototype.ngOnChanges = function (changes) {
        if (changes && changes['active']
            && changes['active'].currentValue
            && changes['active'].currentValue !== changes['active'].previousValue) {
            this.sortService.selectItem(this.sortItemId);
        }
    };
    SkySortItemComponent.prototype.itemClicked = function () {
        this.sortService.selectItem(this.sortItemId);
        this.itemSelect.emit();
    };
    SkySortItemComponent.prototype.ngOnDestroy = function () {
        /* istanbul ignore else */
        /* sanity check */
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    return SkySortItemComponent;
}());
export { SkySortItemComponent };
SkySortItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-sort-item',
                styles: [".sky-sort-item{background-color:transparent;border:none;display:block;margin:4px;min-width:160px;text-align:left;transition:background-color 150ms}.sky-sort-item.sky-dropdown-item-active,.sky-sort-item:hover{background-color:#eeeeef}.sky-sort-item.sky-dropdown-item-disabled{cursor:default}.sky-sort-item.sky-dropdown-item-disabled:hover{background-color:transparent}.sky-sort-item ::ng-deep>button{background-color:transparent;border:none;color:#212327;cursor:pointer;display:block;padding:3px 20px;text-align:left;width:100%}.sky-sort-item ::ng-deep>button[disabled]{color:#686c73}.sky-sort-item ::ng-deep>button[disabled]:hover{cursor:default}.sky-sort-item-selected{background-color:#f1eef6;padding:4px;margin:0}\n"],
                template: "<div\n    class=\"sky-sort-item\"\n    role=\"menuitemradio\"\n    [attr.aria-checked]=\"isSelected | async\"\n    [ngClass]=\"{'sky-sort-item-selected': (isSelected | async)}\">\n    <button\n      type=\"button\"\n      [ngClass]=\"{'sky-emphasized': (isSelected | async)}\"\n      (click)=\"itemClicked()\">\n        <ng-content></ng-content>\n    </button>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkySortItemComponent.ctorParameters = function () { return [
    { type: SkySortService, },
    { type: ChangeDetectorRef, },
]; };
SkySortItemComponent.propDecorators = {
    'active': [{ type: Input },],
    'itemSelect': [{ type: Output },],
};
//# sourceMappingURL=sort-item.component.js.map