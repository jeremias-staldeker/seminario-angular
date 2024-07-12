import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/Header/header.component";

@Component({
  standalone: true,
  selector: 'artemis-component',
  templateUrl: './artemis.component.html',
  imports: [HeaderComponent],
})
export class ArtemisComponent { };
