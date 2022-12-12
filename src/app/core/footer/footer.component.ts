import { Component } from '@angular/core';
import { links } from './footer-links';
import { Links } from './models/footer-links.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  allLinks: Links[] = links;
}
