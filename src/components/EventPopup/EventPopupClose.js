import React from 'react';
import './EventPopupClose.scss';

export class EventPopupClose extends React.Component {

    render() {
        const { closeModal } = this.props;

        return (
            <button className="event-popup__close" onClick={closeModal}></button>
        );
    }
}