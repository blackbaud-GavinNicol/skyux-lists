// #region imports
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeWhile';
import { SkyInfiniteScrollDomAdapterService } from './infinite-scroll-dom-adapter.service';
// #endregion
var SkyInfiniteScrollComponent = (function () {
    function SkyInfiniteScrollComponent(changeDetector, elementRef, domAdapter) {
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.domAdapter = domAdapter;
        this.scrollEnd = new EventEmitter();
        this.isWaiting = false;
        this.ngUnsubscribe = new Subject();
        this._enabled = false;
    }
    Object.defineProperty(SkyInfiniteScrollComponent.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (value) {
            if (this._enabled !== value) {
                this._enabled = value;
                this.setListeners();
            }
        },
        enumerable: true,
        configurable: true
    });
    SkyInfiniteScrollComponent.prototype.ngOnDestroy = function () {
        this.enabled = false;
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    SkyInfiniteScrollComponent.prototype.startInfiniteScrollLoad = function () {
        this.notifyScrollEnd();
    };
    SkyInfiniteScrollComponent.prototype.notifyScrollEnd = function () {
        this.isWaiting = true;
        this.scrollEnd.emit();
        this.changeDetector.markForCheck();
    };
    SkyInfiniteScrollComponent.prototype.setListeners = function () {
        var _this = this;
        if (this.enabled) {
            // The user has scrolled to the infinite scroll element.
            this.domAdapter.scrollTo(this.elementRef)
                .takeUntil(this.ngUnsubscribe)
                .subscribe(function () {
                if (!_this.isWaiting && _this.enabled) {
                    _this.notifyScrollEnd();
                }
            });
            // New items have been loaded into the parent element.
            this.domAdapter.parentChanges(this.elementRef)
                .takeUntil(this.ngUnsubscribe)
                .subscribe(function () {
                if (_this.isWaiting) {
                    _this.isWaiting = false;
                    _this.changeDetector.markForCheck();
                }
            });
        }
        else {
            this.ngUnsubscribe.next();
        }
    };
    return SkyInfiniteScrollComponent;
}());
export { SkyInfiniteScrollComponent };
SkyInfiniteScrollComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-infinite-scroll',
                template: "<div *ngIf=\"enabled\"\n  class=\"sky-infinite-scroll\"\n>\n  <button *ngIf=\"!isWaiting && enabled\"\n    class=\"sky-btn sky-btn-default\"\n    type=\"button\"\n    (click)=\"startInfiniteScrollLoad()\"\n  >\n    {{ 'skyux_infinite_scroll_load_more_button' | skyLibResources }}\n  </button>\n  <sky-wait\n    [isWaiting]=\"isWaiting\"\n  >\n  </sky-wait>\n</div>\n",
                styles: [".sky-infinite-scroll{margin-top:20px;text-align:center;min-height:75px}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    SkyInfiniteScrollDomAdapterService
                ]
            },] },
];
/** @nocollapse */
SkyInfiniteScrollComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: SkyInfiniteScrollDomAdapterService, },
]; };
SkyInfiniteScrollComponent.propDecorators = {
    'enabled': [{ type: Input },],
    'scrollEnd': [{ type: Output },],
};
//# sourceMappingURL=infinite-scroll.component.js.map