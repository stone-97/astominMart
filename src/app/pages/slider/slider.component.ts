import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {

  @ViewChild('myCarousel') myCarousel!: ElementRef;

  ngAfterViewInit(): void {
    const element = this.myCarousel.nativeElement;

    // Dispose any previous instance to avoid conflicts
    const existing = bootstrap.Carousel.getInstance(element);
    if (existing) {
      existing.dispose();
    }

    // Force initialize carousel
    const carousel = new bootstrap.Carousel(element, {
      interval: 3000,
      ride: 'carousel',
      pause: 'hover',
      wrap: true
    });

    carousel.cycle(); // Start sliding
  }
}
