import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../../components/Header/header.component";
import { TabsComponent } from "../../components/Tabs/tabs.component";
import { NasaService } from "../../services/nasa.service";
import Tab from "../../models/Tab";
import Image from "../../models/Image";

@Component({
  standalone: true,
  selector: 'gallery-component',
  templateUrl: './gallery.component.html',
  imports: [HeaderComponent, TabsComponent, CommonModule],
})
export class GalleryComponent {
  public loading: boolean = false;
  public apod: Image | null = null;
  public images: Image[] = [];
  public currentTab: Tab;
  public tabs: Tab[];

  constructor(private nasaService: NasaService) {
    this.tabs = [
      {
        id: 1,
        tabName: 'Imagen del Día'
      },
      {
        id: 2,
        tabName: 'Galeria',
      }
    ];
    this.currentTab = this.tabs[0];
  }

  ngOnInit(): void {
    this.getApod();
  }

  /**
   * @param tab Tab
   */
  public handleTabChanged(tab: Tab) {
    this.currentTab = tab;
    if (this.currentTab.id > 1 && this.images?.length === 0) {
      this.getImages();
    } else if (!this.apod) {
      this.getApod();
    }
  }

  public getApod(): void {
    this.loading = true;
    this.nasaService.getImageOfTheDay().subscribe((response: Image) => {
      this.apod = response;
      this.loading = false;
    });
  }

  public getImages(): void {
    this.loading = true;
    this.nasaService.getImageGallery().subscribe((response: Image[]) => {
      this.images = response;
      this.loading = false;
    });
  }
};
