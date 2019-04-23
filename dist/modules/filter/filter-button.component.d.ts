import { EventEmitter } from '@angular/core';
export declare class SkyFilterButtonComponent {
    private _filterButtonId;
    filterButtonId: string;
    ariaControls: string;
    ariaExpanded: boolean;
    active: boolean;
    showButtonText: boolean;
    disabled: boolean;
    filterButtonClick: EventEmitter<any>;
    filterButtonOnClick(): void;
}
