import React from 'react';
import './EventPopupControl.scss';

export class EventPopupDate extends React.Component {
    render() {
        const { value, updateDate, errorMessage } = this.props;

        return (
            <div className="event-popup__control">
                <span className="event-popup__title">event date</span>
                <input className="event-popup__input" type="date" defaultValue={value} name="start" onChange={updateDate} />
                <div className="event-popup__error">{errorMessage}</div>
            </div>
        );
    }
}