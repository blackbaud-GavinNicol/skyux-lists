import { SkyAppLocaleInfo, SkyLibResourcesProvider } from '@skyux/i18n';
export declare class SkyListsResourcesProvider implements SkyLibResourcesProvider {
    private resources;
    getString(localeInfo: SkyAppLocaleInfo, name: string): string;
}
