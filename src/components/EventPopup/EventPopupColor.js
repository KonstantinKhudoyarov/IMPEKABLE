import React from 'react';
import './EventPopupControl.scss';

export class EventPopupColor extends React.Component {
    render() {
        const { updateColor, errorMessage } = this.props;

        return (
            <div className="event-popup__control">
                <span className="event-popup__title">color</span>
                <input className="event-popup__input" type="color" name="color" onChange={updateColor} />
                <div className="event-popup__error">{errorMessage}</div>
            </div>
        );
    }
}