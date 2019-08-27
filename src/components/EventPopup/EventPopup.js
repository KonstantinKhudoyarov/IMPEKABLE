import React from 'react';
import './EventPopup.scss';
import { EventPopupClose } from './EventPopupClose';
import { EventPopupTitle } from './EventPopupTitle';
import { EventPopupDate } from './EventPopupDate';
import { EventPopupTime } from './EventPopupTime';
import { EventPopupColor } from './EventPopupColor';
import { Button } from '../Button/Button';
import moment from 'moment';

export class EventPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentEvent: {},
            errors: {},
            isEventUpdated: false
        }
    }

    eventDateFormat = (date) => {
        return moment(date).format().substring(0, 10);
    }

    onSaveNewEvent = () => {
        const error = this.validate();
        if (!error) {
            this.props.onEventSave(this.state.currentEvent);

            this.setState({
                currentEvent: {},
                errors: {}
            });
        }
    }

    onUpdateEvent = () => {
        if (!this.state.isEventUpdated) return;

        this.props.onEventUpdate(this.state.currentEvent);
        this.setState({
            currentEvent: {},
            titleError: "",
            isEventUpdated: false
        });
    }

    updateTitle = (e) => {
        this.setState({
            currentEvent: { ...this.props.eventInfo, ...this.state.currentEvent, [e.target.name]: e.target.value },
            isEventUpdated: true
        });
    }

    updateDate = (e) => {
        const year = Number(e.target.value.substring(0, 4));
        const month = Number(e.target.value.substring(5, 7)) - 1;
        const day = Number(e.target.value.substring(8, 10));

        this.setState({
            currentEvent: { ...this.props.eventInfo, ...this.state.currentEvent, [e.target.name]: new Date(year, month, day), "end": new Date(year, month, day) },
            isEventUpdated: true
        });
    }

    updateColor = (e) => {
        this.setState({
            currentEvent: { ...this.props.eventInfo, ...this.state.currentEvent, [e.target.name]: e.target.value },
            isEventUpdated: true
        });
    }

    validate = () => {
        let isError = false;
        let errorMessages = {};

        if (this.state.currentEvent.title === undefined || this.state.currentEvent.title.length > 30) {
            isError = true;
            errorMessages.errorTitle = "min 1 and max 30 characters";
        }

        if (this.state.currentEvent.start === undefined) {
            isError = true;
            errorMessages.errorDate = "Please, select the correct date";
        }

        if (isError) {
            this.setState({
                errors: { ...this.state.errors, ...errorMessages }
            });
        }

        return isError;
    }

    positioningStyles = () => {
        const { pageX, pageY } = this.props.modalCoords;

        const positioningStyles = {
            top: `${pageY}px`,
            left: `${pageX}px`,
            transform: "translateX(-50%)"
        }

        return positioningStyles;
    }

    render() {
        const { isVisible, isNewEvent, closeModal, onEventDelete } = this.props;
        const { title, start } = this.props.eventInfo;
        const { errorTitle, errorDate } = this.state.errors;

        if (!isVisible) return null;

        return (
            <div className="event-popup" style={this.positioningStyles()} onClick={e => e.stopPropagation()}>
                <EventPopupClose closeModal={closeModal} />
                <EventPopupTitle
                    value={isNewEvent ? "" : title}
                    updateTitle={this.updateTitle}
                    errorMessage={errorTitle}
                />
                <EventPopupDate
                    value={isNewEvent ? "" : this.eventDateFormat(start)}
                    updateDate={this.updateDate}
                    errorMessage={errorDate}
                />
                <EventPopupTime />
                <EventPopupColor
                    updateColor={this.updateColor}
                />
                <div className="event-popup__btns">
                    <Button
                        label={isNewEvent ? "Cancel" : "DISCARD"}
                        className="btn btn_dismiss"
                        buttonHandler={isNewEvent ? closeModal : onEventDelete}
                    />
                    <Button
                        label={isNewEvent ? "Save" : "EDIT"}
                        className="btn"
                        buttonHandler={isNewEvent ? this.onSaveNewEvent : this.onUpdateEvent}
                    />
                </div>
            </div>
        );
    }
}