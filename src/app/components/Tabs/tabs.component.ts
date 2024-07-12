import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import Tab from "../../models/Tab";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'tabs-component',
  templateUrl: './tabs.component.html',
})
export class TabsComponent {
  @Input() currentTab: Tab | null = null;
  @Input() tabs: Tab[] = [];
  @Output('handleTabSelected') tabChanged = new EventEmitter<Tab>();

  constructor() { }

  public handleTabSelected(tab: Tab) {
    this.tabChanged.emit(tab);
  }

}
