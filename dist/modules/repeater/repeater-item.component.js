import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { skyAnimationSlide } from '@skyux/animations/slide';
import { SkyLogService } from '@skyux/core/modules/log/log.service';
import { SkyRepeaterService } from './repeater.service';
var nextId = 0;
var SkyRepeaterItemComponent = (function () {
    function SkyRepeaterItemComponent(repeaterService, changeDetector, logService) {
        this.repeaterService = repeaterService;
        this.changeDetector = changeDetector;
        this.logService = logService;
        this.contentId = "sky-radio-content-" + ++nextId;
        this.showInlineForm = false;
        this.inlineFormClose = new EventEmitter();
        this.selectable = false;
        this.collapse = new EventEmitter();
        this.expand = new EventEmitter();
        this._isCollapsible = true;
        this._isExpanded = true;
        this._isSelected = false;
        this.slideForExpanded(false);
    }
    Object.defineProperty(SkyRepeaterItemComponent.prototype, "isExpanded", {
        get: function () {
            return this._isExpanded;
        },
        set: function (value) {
            this.updateForExpanded(value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyRepeaterItemComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        set: function (value) {
            this._isSelected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyRepeaterItemComponent.prototype, "isCollapsible", {
        get: function () {
            return this._isCollapsible;
        },
        set: function (value) {
            if (this.isCollapsible !== value) {
                this._isCollapsible = value;
                /*istanbul ignore else */
                if (!value) {
                    this.updateForExpanded(true, false);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    SkyRepeaterItemComponent.prototype.ngOnDestroy = function () {
        this.collapse.complete();
        this.expand.complete();
        this.inlineFormClose.complete();
    };
    SkyRepeaterItemComponent.prototype.headerClick = function () {
        if (this.isCollapsible) {
            this.updateForExpanded(!this.isExpanded, true);
        }
    };
    SkyRepeaterItemComponent.prototype.chevronDirectionChange = function (direction) {
        this.updateForExpanded(direction === 'up', true);
    };
    SkyRepeaterItemComponent.prototype.updateForExpanded = function (value, animate) {
        if (this.isCollapsible === false && value === false) {
            this.logService.warn("Setting isExpanded to false when the repeater item is not collapsible\n        will have no effect.");
        }
        else if (this._isExpanded !== value) {
            this._isExpanded = value;
            if (this._isExpanded) {
                this.expand.emit();
            }
            else {
                this.collapse.emit();
            }
            this.repeaterService.onItemCollapseStateChange(this);
            this.slideForExpanded(animate);
            this.changeDetector.markForCheck();
        }
    };
    SkyRepeaterItemComponent.prototype.updateIsSelected = function (value) {
        this._isSelected = value.checked;
    };
    SkyRepeaterItemComponent.prototype.onInlineFormClose = function (inlineFormCloseArgs) {
        this.inlineFormClose.emit(inlineFormCloseArgs);
    };
    SkyRepeaterItemComponent.prototype.slideForExpanded = function (animate) {
        this.slideDirection = this.isExpanded ? 'down' : 'up';
    };
    return SkyRepeaterItemComponent;
}());
export { SkyRepeaterItemComponent };
SkyRepeaterItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-repeater-item',
                styles: [".sky-repeater-item{display:flex;border-bottom:1px dotted #cdcfd2;padding-top:0}.sky-repeater-item sky-inline-form{display:block;width:100%}.sky-repeater-item sky-inline-form ::ng-deep>:first-child,.sky-repeater-item sky-inline-form ::ng-deep .sky-slide-dissolve-first,.sky-repeater-item sky-inline-form ::ng-deep .sky-slide-dissolve-last{display:flex;flex:1 0 auto;width:100%}.sky-repeater-item sky-inline-form ::ng-deep .sky-slide-dissolve-last{padding-top:10px}.sky-repeater-item-left{margin-top:-2px;padding-top:10px}.sky-repeater-item-right{max-width:100%;flex-grow:1}.sky-repeater-item-header{align-items:center;display:flex;padding-top:10px}.sky-repeater-item-chevron{margin-left:10px}.sky-repeater-item-checkbox,.sky-repeater-item-context-menu{padding:0 10px 0 0}.sky-repeater-item-selected{background-color:#f1eef6;transition:background-color 150ms}.sky-repeater-item-title{margin:0;flex-grow:1;line-height:1.1;color:#212327}::ng-deep sky-repeater-item-content{display:block;margin:10px 0 0}.sky-repeater-item-collapsible .sky-repeater-item-header{cursor:pointer}.sky-repeater-item-collapsible .sky-repeater-item-content{padding-right:34px}.sky-repeater-item-collapsed .sky-repeater-item-content{display:none}\n"],
                template: "<div\n  class=\"sky-repeater-item sky-padding-even-default\"\n  [ngClass]=\"{\n    'sky-repeater-item-collapsible': isCollapsible,\n    'sky-repeater-item-selected': isSelected\n  }\"\n>\n\n  <ng-container *ngIf=\"inlineFormTemplate\">\n    <sky-inline-form\n      [showForm]=\"showInlineForm\"\n      [template]=\"inlineFormTemplate\"\n      (close)=\"onInlineFormClose($event)\"\n    >\n      <ng-container *ngTemplateOutlet=\"skyRepeaterItemLeft\"></ng-container>\n      <ng-container *ngTemplateOutlet=\"skyRepeaterItemRight\"></ng-container>\n    </sky-inline-form>\n  </ng-container>\n\n  <ng-container *ngIf=\"!inlineFormTemplate\">\n    <ng-container *ngTemplateOutlet=\"skyRepeaterItemLeft\"></ng-container>\n    <ng-container *ngTemplateOutlet=\"skyRepeaterItemRight\"></ng-container>\n  </ng-container>\n\n</div>\n\n<ng-template\n  #skyRepeaterItemLeft\n>\n  <div class=\"sky-repeater-item-left\">\n    <sky-checkbox\n      *ngIf=\"selectable\"\n      class=\"sky-repeater-item-checkbox\"\n      [checked]=\"isSelected\"\n      [label]=\"'skyux_repeater_item_checkbox_label' | skyLibResources\"\n      (change)=\"updateIsSelected($event)\"\n    >\n    </sky-checkbox>\n    <div\n        class=\"sky-repeater-item-context-menu\"\n        [hidden]=\"contextMenuEl.children.length === 0\"\n        #contextMenuEl\n    >\n      <ng-content select=\"sky-repeater-item-context-menu\"></ng-content>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template\n  #skyRepeaterItemRight\n>\n  <div class=\"sky-repeater-item-right\">\n    <header\n        class=\"sky-repeater-item-header\"\n        [hidden]=\"titleEl.children.length === 0\"\n        (click)=\"headerClick()\"\n    >\n      <div class=\"sky-repeater-item-title sky-emphasized\" #titleEl>\n        <ng-content select=\"sky-repeater-item-title\"></ng-content>\n      </div>\n      <div class=\"sky-repeater-item-chevron\" [hidden]=\"!isCollapsible\">\n        <sky-chevron\n            [attr.aria-controls]=\"contentId\"\n            [attr.aria-expanded]=\"isExpanded\"\n            [direction]=\"isExpanded ? 'up' : 'down'\"\n            (directionChange)=\"chevronDirectionChange($event)\"\n        >\n        </sky-chevron>\n      </div>\n    </header>\n    <div\n      class=\"sky-repeater-item-content\"\n      [id]=\"contentId\"\n      [@skyAnimationSlide]=\"slideDirection\">\n      <ng-content select=\"sky-repeater-item-content\"></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
                animations: [skyAnimationSlide]
            },] },
];
/** @nocollapse */
SkyRepeaterItemComponent.ctorParameters = function () { return [
    { type: SkyRepeaterService, },
    { type: ChangeDetectorRef, },
    { type: SkyLogService, },
]; };
SkyRepeaterItemComponent.propDecorators = {
    'isExpanded': [{ type: Input },],
    'isSelected': [{ type: Input },],
    'showInlineForm': [{ type: Input },],
    'inlineFormConfig': [{ type: Input },],
    'inlineFormTemplate': [{ type: Input },],
    'inlineFormClose': [{ type: Output },],
    'selectable': [{ type: Input },],
    'collapse': [{ type: Output },],
    'expand': [{ type: Output },],
};
//# sourceMappingURL=repeater-item.component.js.map