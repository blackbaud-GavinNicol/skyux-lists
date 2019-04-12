import {
  Component,
  ViewChild
} from '@angular/core';

import {
  SkyRepeaterComponent
} from '../repeater.component';

@Component({
  selector: 'sky-test-repeater-inline-form',
  templateUrl: './repeater-inline-form.component.fixture.html'
})
export class RepeaterInlineFormFixtureComponent {
  @ViewChild(SkyRepeaterComponent)
  public repeater: SkyRepeaterComponent;

  public showContextMenu: boolean;

  public removeLastItem: boolean;

  public expandMode = 'single';

  public lastItemExpanded: boolean;

  public lastItemSelected = false;

  public onCollapse(): void {}

  public onExpand(): void {}
}