import { trigger, transition, style, query, animateChild, group, animate, stagger } from '@angular/animations';

export const slideAnimation =
trigger('routeAnimations', [
  transition('home => aboutus', [
    group([
    query(':enter', style({ opacity: 0 })),
    query(':leave', [
      animate('300ms ease-out', style({opacity: 0})),
    ]),
    query(':enter', [
      animate('300ms ease-out', style({opacity: 1})),
    ]),
  ]),
  ]),
]);
