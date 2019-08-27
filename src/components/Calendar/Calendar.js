import React from 'react';
import './Calendar.scss';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import moment from 'moment';
import { EventPopup } from '../EventPopup/EventPopup';
import { ToolBar } from '../ToolBar/ToolBar';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);
const now = moment().toDate();
const mockEvents = [
    {
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2015, 3, 0),
        end: new Date(2015, 3, 1),
    },
    {
        title: 'Long Event',
        start: new Date(2015, 3, 7),
        end: new Date(2015, 3, 10),
    },

    {
        title: 'DTS STARTS',
        start: new Date(2016, 2, 13, 0, 0, 0),
        end: new Date(2016, 2, 20, 0, 0, 0),
    },

    {
        title: 'DTS ENDS',
        start: new Date(2019, 10, 6, 0, 0, 0),
        end: new Date(2019, 10, 13, 0, 0, 0),
    },

    {
        title: 'Some Event',
        start: new Date(2019, 3, 9, 0, 0, 0),
        end: new Date(2019, 3, 10, 0, 0, 0),
    },
    {
        title: 'Conference',
        start: new Date(2019, 3, 11),
        end: new Date(2019, 3, 13),
        desc: 'Big conference for important people',
    },
    {
        title: 'Meeting',
        start: new Date(2019, 3, 12, 10, 30, 0, 0),
        end: new Date(2019, 3, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        title: 'Lunch',
        start: new Date(2019, 3, 12, 12, 0, 0, 0),
        end: new Date(2019, 3, 12, 13, 0, 0, 0),
        desc: 'Power lunch',
    },
    {
        title: 'Meeting',
        start: new Date(2019, 3, 12, 14, 0, 0, 0),
        end: new Date(2019, 3, 12, 15, 0, 0, 0),
    },
    {
        title: 'Happy Hour',
        start: new Date(2019, 3, 12, 17, 0, 0, 0),
        end: new Date(2019, 3, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        title: 'Dinner',
        start: new Date(2019, 3, 12, 20, 0, 0, 0),
        end: new Date(2019, 3, 12, 21, 0, 0, 0),
    },
    {
        title: 'Birthday Party',
        start: new Date(2019, 3, 13, 7, 0, 0),
        end: new Date(2019, 3, 13, 10, 30, 0),
    },
    {
        title: 'Late Night Event',
        start: new Date(2019, 3, 17, 19, 30, 0),
        end: new Date(2019, 3, 18, 2, 0, 0),
    },
    {
        title: 'Late Same Night Event',
        start: new Date(2019, 3, 17, 19, 30, 0),
        end: new Date(2019, 3, 17, 23, 30, 0),
    },
    {
        title: 'Multi-day Event',
        start: new Date(2019, 3, 20, 19, 30, 0),
        end: new Date(2019, 3, 22, 2, 0, 0),
    },
    {
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
        color: '#864027'
    },
    {
        title: 'Point in Time Event',
        start: now,
        end: now,
        color: '#334509'
    }
];

export class BigCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: mockEvents,
            isModalVisible: false,
            isCreateNewEvent: false,
            eventInfo: {},
            modalCoords: {
                pageX: 0,
                pageY: 0
            }
        };
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
    };

    onSelectSlot = (slotInfo) => {
        this.setState({
            isModalVisible: true,
            isCreateNewEvent: true,
            eventInfo: slotInfo
        });
    }

    onSelectEvent = (event) => {
        this.setState({
            isModalVisible: true,
            isEditEvent: true,
            eventInfo: event
        });
    }

    onEventSave = (event) => {
        this.setState({
            events: [...this.state.events, event],
            isModalVisible: false,
            isCreateNewEvent: false,
            eventInfo: {}
        });
    }

    onEventUpdate = (event) => {
        const { events, eventInfo } = this.state;
        const currentEventIndex = events.indexOf(eventInfo);
        const nextEvents = [...events];
        nextEvents.splice(currentEventIndex, 1, event);

        this.setState({
            events: nextEvents,
            isModalVisible: false,
            isCreateNewEvent: false,
            eventInfo: {}
        });
    }

    onEventDelete = () => {
        const { events, eventInfo } = this.state;
        const updatedEvents = events.filter((event) => {
            return event !== eventInfo;
        });
        this.setState({
            events: updatedEvents,
            isModalVisible: false,
            eventInfo: {}
        });
    }

    closeModal = () => {
        this.setState({
            isModalVisible: false,
            isCreateNewEvent: false,
            eventInfo: {}
        });
    }

    eventStyleGetter = (event) => {
        const backgroundColor = event.color;
        const style = {
            backgroundColor: backgroundColor
        };

        return {
            style: style
        };
    }

    eventClickHandler = (e) => {
        const { pageX, pageY } = e;

        this.setState({
            modalCoords: { ...this.state.modalCoords, pageX, pageY }
        })
    }

    render() {
        const { isModalVisible, isCreateNewEvent, eventInfo } = this.state;

        return (
            <section className="calendar" onClick={this.eventClickHandler}>
                <EventPopup
                    isVisible={isModalVisible}
                    isNewEvent={isCreateNewEvent}
                    eventInfo={eventInfo}
                    closeModal={this.closeModal}
                    onEventSave={this.onEventSave}
                    onEventUpdate={this.onEventUpdate}
                    onEventDelete={this.onEventDelete}
                    modalCoords={this.state.modalCoords}
                />
                <div className="container">
                    <h1 className="calendar__title">
                        Calendar
                    </h1>
                    <div className="calendar__wrap">
                        {/* <h3 className="calendar__subtitle">Calendar View</h3> */}
                        <DnDCalendar
                            selectable
                            events={this.state.events}
                            startAccessor="start"
                            endAccessor="end"
                            defaultDate={moment().toDate()}
                            localizer={localizer}
                            onEventDrop={this.onEventDrop}
                            onSelectEvent={this.onSelectEvent}
                            onSelectSlot={this.onSelectSlot}
                            eventPropGetter={this.eventStyleGetter}
                            components={{ toolbar: ToolBar }}
                            style={{ height: "859px" }}
                        />
                    </div>
                </div>
            </section >
        );
    }
}