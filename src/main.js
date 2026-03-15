import TripPresenter from './presenter/presenter.js';

const headerContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');

const presenter = new TripPresenter({
  headerContainer: headerContainer,
  eventsContainer: eventsContainer
});

presenter.init();
