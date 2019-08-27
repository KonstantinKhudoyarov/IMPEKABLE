import React from 'react';
import './EventPopupControl.scss';

export class EventPopupTime extends React.Component {
    render() {
        const { updateCurrentEvent, errorMessage } = this.props;

        return (
            <div className="event-popup__control">
                <span className="event-popup__title">event time</span>
                <input className="event-popup__input" type="time" name="time" onChange={updateCurrentEvent} />
                <div className="event-popup__error">{errorMessage}</div>
            </div>
        );
    }
}