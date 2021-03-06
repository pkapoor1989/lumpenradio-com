import React from 'react';
import styles from './EventList.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import EventItem from '../EventItem';

@withStyles(styles)
class EventList extends React.Component {

  render() {
    let eventItems = this.props.data.map((eventItems, i) => {
      return (
        <EventItem key={i} data={eventItems} />
      )
    });

    return (
      <div className="EventList">
        <div className="EventList-container">
          <div className="EventList-header">
            <h1>Events</h1>
          </div>
          <div className="EventList-newsItems">
            {eventItems}
          </div>
          <a className="EventList-moreLink" href="/events">More Events →</a>
        </div>
      </div>
    );
  }

}

export default EventList;

