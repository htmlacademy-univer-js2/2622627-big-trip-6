import EventCreationFormView from '../view/event-creation-form-view.js';
import EventEditFormView from '../view/event-edit-form-view.js';
import TripFilterView from '../view/trip-filter-view.js';
import TripPointView from '../view/trip-point-view.js';
import TripSortView from '../view/trip-sort-view.js';
import { render } from '../render.js';

export default class TripPresenter {
  constructor({ headerContainer, eventsContainer }) {
    this.headerContainer = headerContainer;
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(new TripFilterView(), this.headerContainer);

    render(new TripSortView(), this.eventsContainer);
    render(new EventEditFormView(), this.eventsContainer);
    render(new EventCreationFormView(), this.eventsContainer);
    render(new TripPointView(), this.eventsContainer);
    render(new TripPointView(), this.eventsContainer);
    render(new TripPointView(), this.eventsContainer);
  }
}
