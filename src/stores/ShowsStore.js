import alt from '../utils/alt';
import makeHot from 'alt/utils/makeHot';

import ShowsActions from '../actions/ShowsActions';
import ShowsSource from '../sources/ShowsSource';

class ShowsStore {
  constructor() {
    this.shows = [];
    this.errorMessage = null;

    this.bindListeners({
      onUpdateShows: ShowsActions.UPDATE_SHOWS,
      onFetchShows: ShowsActions.FETCH_SHOWS,
      onShowsFailed: ShowsActions.SHOWS_FAILED
    });

    this.exportAsync(ShowsSource);
  }

  onUpdateShows(shows) {
    this.shows = shows;
    this.error = null;
    // optionally return false to suppress the store change event
  }

  onFetchShows() {
    // reset the array while we're fetching new locations so React can
    // be smart and render a spinner for us since the data is empty.
    this.shows = [];
  }

  onShowsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

}

export default makeHot(alt, ShowsStore);