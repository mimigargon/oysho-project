import { Spectator, createComponentFactory, byTestId } from '@ngneat/spectator';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let spectator: Spectator<FooterComponent>;
  const createComponent = createComponentFactory(FooterComponent);

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
    const footerContainer: Element = spectator.query(byTestId('footerContainer')) as Element;
    expect(footerContainer).toBeTruthy();
  });
});
