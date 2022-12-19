import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-carouselaccueil',
   standalone: true,
	 imports: [NgbCarouselModule, NgIf],
  templateUrl: './carouselaccueil.component.html',
  styleUrls: ['./carouselaccueil.component.css'],
  providers:[NgbCarousel], // add NgbCarouselConfig to the component providers
})
export class CarouselaccueilComponent implements OnInit {

	constructor(carousel: NgbCarousel) {
		// customize default values of carousels used by this component tree
		carousel.showNavigationArrows = true;
		carousel.showNavigationIndicators = true;
	}


  ngOnInit(): void {
  }

  showNavigationArrows = false;
	showNavigationIndicators = false;
	images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);


}
