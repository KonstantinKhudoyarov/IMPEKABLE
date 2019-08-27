import React from 'react';
import './Button.scss';

export class Button extends React.Component {
    render() {
        const { label, className, buttonHandler } = this.props;

        return (
            <button className={className} onClick={buttonHandler}>{label}</button>
        );
    }
}