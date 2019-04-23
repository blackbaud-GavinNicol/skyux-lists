import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/takeWhile';
import { SkyInfiniteScrollDomAdapterService } from './infinite-scroll-dom-adapter.service';
export declare class SkyInfiniteScrollComponent implements OnDestroy {
    private changeDetector;
    private elementRef;
    private domAdapter;
    enabled: boolean;
    scrollEnd: EventEmitter<void>;
    isWaiting: boolean;
    private ngUnsubscribe;
    private _enabled;
    constructor(changeDetector: ChangeDetectorRef, elementRef: ElementRef, domAdapter: SkyInfiniteScrollDomAdapterService);
    ngOnDestroy(): void;
    startInfiniteScrollLoad(): void;
    private notifyScrollEnd();
    private setListeners();
}
