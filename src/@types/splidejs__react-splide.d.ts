declare module '@splidejs/react-splide' {
  import { ComponentType } from 'react';
  import { Splide as SplideType, SplideSlide as SplideSlideType } from '@splidejs/splide';

  export const Splide: ComponentType<SplideType['props']>;
  export const SplideSlide: ComponentType<SplideSlideType['props']>;
} 