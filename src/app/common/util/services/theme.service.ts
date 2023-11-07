import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(private overlayContainer: OverlayContainer) { }

  darkTheme() {
    this.overlayContainer.getContainerElement().classList.add('dark-theme');
  }

  lightTheme() {
    this.overlayContainer.getContainerElement().classList.add('light-theme');
  }
}
