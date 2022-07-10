import Swiper, {Pagination, Navigation} from 'swiper';

Swiper.use([Pagination, Navigation]);

const reviewsSlider = new Swiper('.history__slider-items', {
  slidesPerView: 1,
  pagination: {
    el: '.history__pagination',
    clickable: true,
  },
});
