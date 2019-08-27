import React from 'react';
import './EventPopupControl.scss';

export class EventPopupTitle extends React.Component {
    render() {
        const { value, updateTitle, errorMessage } = this.props;

        return (
            <div className="event-popup__control">
                <span className="event-popup__title">event name</span>
                <input className="event-popup__input" type="text" defaultValue={value} name="title" onChange={updateTitle} />
                <div className="event-popup__error">{errorMessage}</div>
            </div>
        );
    }
}