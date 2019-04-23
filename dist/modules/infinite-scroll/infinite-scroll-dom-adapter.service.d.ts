import { ElementRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import { SkyWindowRefService } from '@skyux/core/modules/window';
export declare class SkyInfiniteScrollDomAdapterService implements OnDestroy {
    private windowRef;
    private ngUnsubscribe;
    private observer;
    private _parentChanges;
    constructor(windowRef: SkyWindowRefService);
    ngOnDestroy(): void;
    /**
     * This event is triggered when child nodes are added to the infinite
     * scroll parent container. e.g., A repeating list of elements was added.
     * @param elementRef The infinite scroll element reference.
     */
    parentChanges(elementRef: ElementRef): Observable<void>;
    /**
     * This event is triggered when the provided element reference
     * is visible (or scrolled to) within its scrollable parent container.
     * @param elementRef The infinite scroll element reference.
     */
    scrollTo(elementRef: ElementRef): Observable<void>;
    private createObserver(element);
    private findScrollableParent(element);
    private isElementScrolledInView(element, parentElement);
}
