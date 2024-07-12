import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  selector: 'header-component',
  templateUrl: './header.component.html',
})
export class HeaderComponent { }
