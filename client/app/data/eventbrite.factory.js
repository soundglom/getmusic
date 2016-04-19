
class Eventbrite {
  constructor() {
    this.baseUrl = 'https://www.eventbriteapi.com/v3/events/search/';
    this.options = '?sort_by=date';
    this.location = '&venue.city=Oakland&venue.region=CA&'
    this.music = 'categories=103&';
    this.token = '';
  }

  createUrl() {
    let url = this.baseUrl + this.options
              + this.location + this.music;
    
    return url
  }
}

const EventbriteFactory = function () {
  const eventbrite = {
    baseUrl: 'https://www.eventbriteapi.com/v3/events/search/',
    options: '?sort_by=date',
    location: '&venue.city=Oakland&venue.region=CA&',
    music: 'categories=103&',
    token: ''
  };

  let getQuery = () => {
    return eventbrite;
  };

  let getToken = (token) => {
    eventbrite.token = token;
  }

  return { eventbrite, getQuery, getToken};
};

export default EventbriteFactory;
