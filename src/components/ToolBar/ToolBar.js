import React from 'react';
import './ToolBar.scss';

const navigate = {
    PREVIOUS: 'PREV',
    NEXT: 'NEXT',
    TODAY: 'TODAY',
    DATE: 'DATE'
}

const views = {
    MONTH: 'month',
    WEEK: 'week',
    WORK_WEEK: 'work_week',
    DAY: 'day',
    AGENDA: 'agenda'
}

export class ToolBar extends React.Component {

    navigate = (action) => {
        this.props.onNavigate(action);
    }

    viewItem = (view) => {
        this.props.onView(view);
    }

    render() {

        return (
            <div className="rbc-toolbar">
                <div className="rbc-toolbar__section">
                    <h3 className="calendar__subtitle">Calendar View</h3>
                    <span className="rbc-btn-group">
                        <button type="button" className="" onClick={this.viewItem.bind(null, views.MONTH)}>Month</button>
                        <button type="button" className="" onClick={this.viewItem.bind(null, views.WEEK)}>Week</button>
                        <button type="button" className="" onClick={this.viewItem.bind(null, views.DAY)}>Day</button>
                        <button type="button" className="" onClick={this.viewItem.bind(null, views.AGENDA)}>Agenda</button>
                    </span>
                </div>
                <div className="rbc-toolbar__section">
                    <span className="rbc-btn-group">
                        <button type="button" onClick={this.navigate.bind(null, navigate.TODAY)}>Today</button>
                        <button type="button" onClick={this.navigate.bind(null, navigate.PREVIOUS)}>Back</button>
                        <button type="button" onClick={this.navigate.bind(null, navigate.NEXT)}>Next</button>
                    </span>
                    <span className="rbc-toolbar-label">August 2019</span>
                </div>
            </div>
        );
    }
}