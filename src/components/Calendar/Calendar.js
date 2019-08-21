import React from 'react';
import './Calendar.scss';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import moment from 'moment'

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);
const now = new Date();
const events = [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2015, 3, 0),
        end: new Date(2015, 3, 1),
    },
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2015, 3, 7),
        end: new Date(2015, 3, 10),
    },

    {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2016, 2, 13, 0, 0, 0),
        end: new Date(2016, 2, 20, 0, 0, 0),
    },

    {
        id: 3,
        title: 'DTS ENDS',
        start: new Date(2019, 10, 6, 0, 0, 0),
        end: new Date(2019, 10, 13, 0, 0, 0),
    },

    {
        id: 4,
        title: 'Some Event',
        start: new Date(2019, 3, 9, 0, 0, 0),
        end: new Date(2019, 3, 10, 0, 0, 0),
    },
    {
        id: 5,
        title: 'Conference',
        start: new Date(2019, 3, 11),
        end: new Date(2019, 3, 13),
        desc: 'Big conference for important people',
    },
    {
        id: 6,
        title: 'Meeting',
        start: new Date(2019, 3, 12, 10, 30, 0, 0),
        end: new Date(2019, 3, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        id: 7,
        title: 'Lunch',
        start: new Date(2019, 3, 12, 12, 0, 0, 0),
        end: new Date(2019, 3, 12, 13, 0, 0, 0),
        desc: 'Power lunch',
    },
    {
        id: 8,
        title: 'Meeting',
        start: new Date(2019, 3, 12, 14, 0, 0, 0),
        end: new Date(2019, 3, 12, 15, 0, 0, 0),
    },
    {
        id: 9,
        title: 'Happy Hour',
        start: new Date(2019, 3, 12, 17, 0, 0, 0),
        end: new Date(2019, 3, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 10,
        title: 'Dinner',
        start: new Date(2019, 3, 12, 20, 0, 0, 0),
        end: new Date(2019, 3, 12, 21, 0, 0, 0),
    },
    {
        id: 11,
        title: 'Birthday Party',
        start: new Date(2019, 3, 13, 7, 0, 0),
        end: new Date(2019, 3, 13, 10, 30, 0),
    },
    {
        id: 12,
        title: 'Late Night Event',
        start: new Date(2019, 3, 17, 19, 30, 0),
        end: new Date(2019, 3, 18, 2, 0, 0),
    },
    {
        id: 13,
        title: 'Late Same Night Event',
        start: new Date(2019, 3, 17, 19, 30, 0),
        end: new Date(2019, 3, 17, 23, 30, 0),
    },
    {
        id: 14,
        title: 'Multi-day Event',
        start: new Date(2019, 3, 20, 19, 30, 0),
        end: new Date(2019, 3, 22, 2, 0, 0),
    },
    {
        id: 15,
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
    {
        id: 16,
        title: 'Point in Time Event',
        start: now,
        end: now,
    }
];

export class BigCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: events
        };
        this.onEventDrop = this.onEventDrop.bind(this);
    }

    onEventDrop = ({ event, start, end }) => {
        const { events } = this.state;
        const currentEventIndex = events.indexOf(event);
        const updatedEvent = { ...event, start, end };

        const nextEvents = [...events];
        nextEvents.splice(currentEventIndex, 1, updatedEvent);

        this.setState({
            events: nextEvents
        });
        console.log(this.state.events);
    };

    render() {
        return (
            <section className="calendar">
                <div className="container">
                    <h1 className="calendar__title">
                        Calendar
                    </h1>
                    <div className="calendar__wrap">
                        <h3 className="calendar__subtitle">Calendar View</h3>
                        <DnDCalendar
                            events={this.state.events}
                            startAccessor="start"
                            endAccessor="end"
                            defaultDate={moment().toDate()}
                            localizer={localizer}
                            onEventDrop={this.onEventDrop}
                            style={{ height: '859px' }}
                        />
                    </div>
                </div>
            </section >
        );
    }
}