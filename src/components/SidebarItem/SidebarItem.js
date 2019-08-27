import React from 'react';
import './SidebarItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class SidebarItem extends React.Component {
    render() {
        const { id, name, activeItem, icon } = this.props;
        let className = 'sidebar__item';

        if (activeItem === name) {
            className += ' sidebar__item_active';
        }

        return (
            <li key={id} className={className} data-name={name}>
                <a href="#" className="sidebar__link">
                    <FontAwesomeIcon icon={icon} />
                    <span className="sidebar__item-name">{name}</span>
                </a>
            </li >
        );
    }
}