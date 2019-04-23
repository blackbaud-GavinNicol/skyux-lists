import { Subject } from 'rxjs/Subject';
import { SkyDropdownMessage } from '@skyux/popovers/modules/dropdown';
export declare class SkySortComponent {
    sortByHeadingId: string;
    showButtonText: boolean;
    dropdownController: Subject<SkyDropdownMessage>;
    dropdownClicked(): void;
}
