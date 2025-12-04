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

    // Dispose previous instance (avoid conflicts)
    const existing = bootstrap.Carousel.getInstance(element);
    if (existing) {
      existing.dispose();
    }

    // Faster sliding: 2000ms
    const carousel = new bootstrap.Carousel(element, {
      interval: 2000,  // speed improved
      ride: 'carousel',
      pause: 'hover',
      wrap: true
    });

    carousel.cycle();
  }
}
