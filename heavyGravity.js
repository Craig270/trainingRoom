"use strict";

class EventOrganizer extends Event {
  constructor() {
    this.events = [];
  }
  addNewEvent(event, date) {
    if (event in this.title) {
      throw new Error(
        `You can only add that are not already in ${this.events}`
      );
    } else {
      this.events.push(new Event(title, date));
    }
  }
  removeEvent(eventTitleString) {
    for (let i = 0; i < this.events.length; i++) {
      if (eventTitleString == this.events[i]) {
        splice(this.events[i], 1);
      }
    }
  }
}
