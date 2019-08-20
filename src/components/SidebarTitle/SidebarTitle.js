import React from 'react';
import './SidebarTitle.scss';

export class SidebarTitle extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <div className="sidebar__head">
                <h1 className="sidebar__title">
                    {children}
                </h1>
            </div>
        );
    }
}