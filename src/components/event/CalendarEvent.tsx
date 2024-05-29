import React from 'react';
import { EventData } from '../../models/Event';
import "./CalendarEvent.css"

const CalendarEvent = ({
  event,
  handleEvent,
}: {
  event: EventData;
  handleEvent: Function;
}) => {
  return (
    <div className='event' onClick={() => handleEvent(event)}>
      {event.title}
    </div>
  );
};

export default CalendarEvent;
