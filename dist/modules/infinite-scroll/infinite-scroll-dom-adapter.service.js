// #region imports
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import { Subject } from 'rxjs/Subject';
import { SkyWindowRefService } from '@skyux/core/modules/window';
// #endregion
var SkyInfiniteScrollDomAdapterService = (function () {
    function SkyInfiniteScrollDomAdapterService(windowRef) {
        this.windowRef = windowRef;
        this.ngUnsubscribe = new Subject();
        this._parentChanges = new EventEmitter();
    }
    SkyInfiniteScrollDomAdapterService.prototype.ngOnDestroy = function () {
        this._parentChanges.complete();
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    /**
     * This event is triggered when child nodes are added to the infinite
     * scroll parent container. e.g., A repeating list of elements was added.
     * @param elementRef The infinite scroll element reference.
     */
    SkyInfiniteScrollDomAdapterService.prototype.parentChanges = function (elementRef) {
        this.createObserver(elementRef.nativeElement);
        return this._parentChanges;
    };
    /**
     * This event is triggered when the provided element reference
     * is visible (or scrolled to) within its scrollable parent container.
     * @param elementRef The infinite scroll element reference.
     */
    SkyInfiniteScrollDomAdapterService.prototype.scrollTo = function (elementRef) {
        var _this = this;
        var parent = this.findScrollableParent(elementRef.nativeElement);
        return Observable
            .fromEvent(parent, 'scroll')
            .takeUntil(this.ngUnsubscribe)
            .filter(function () {
            return _this.isElementScrolledInView(elementRef.nativeElement, parent);
        }).map(function () { return undefined; }); // Change to void return type
    };
    SkyInfiniteScrollDomAdapterService.prototype.createObserver = function (element) {
        var _this = this;
        this.observer = new MutationObserver(function (mutations) {
            var hasUpdates = !!mutations.find(function (mutation) {
                return (!element.contains(mutation.target) &&
                    mutation.addedNodes.length > 0);
            });
            if (hasUpdates) {
                _this._parentChanges.emit();
            }
        });
        var windowObj = this.windowRef.getWindow();
        var parent = this.findScrollableParent(element);
        var observedParent = (parent === windowObj) ? windowObj.document.body : parent;
        this.observer.observe(observedParent, {
            childList: true,
            subtree: true
        });
    };
    SkyInfiniteScrollDomAdapterService.prototype.findScrollableParent = function (element) {
        var regex = /(auto|scroll)/;
        var windowObj = this.windowRef.getWindow();
        var bodyObj = windowObj.document.body;
        var style = windowObj.getComputedStyle(element);
        var parent = element;
        do {
            parent = parent.parentNode;
            style = windowObj.getComputedStyle(parent);
        } while (!regex.test(style.overflow) &&
            !regex.test(style.overflowY) &&
            parent !== bodyObj);
        if (parent === bodyObj) {
            return windowObj;
        }
        return parent;
    };
    SkyInfiniteScrollDomAdapterService.prototype.isElementScrolledInView = function (element, parentElement) {
        var windowObj = this.windowRef.getWindow();
        if (parentElement === windowObj) {
            return (parentElement.pageYOffset + parentElement.innerHeight > element.offsetTop);
        }
        var elementRect = element.getBoundingClientRect();
        var parentRect = parentElement.getBoundingClientRect();
        return (elementRect.top < parentRect.top + parentRect.height);
    };
    return SkyInfiniteScrollDomAdapterService;
}());
export { SkyInfiniteScrollDomAdapterService };
SkyInfiniteScrollDomAdapterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyInfiniteScrollDomAdapterService.ctorParameters = function () { return [
    { type: SkyWindowRefService, },
]; };
//# sourceMappingURL=infinite-scroll-dom-adapter.service.js.map