import React from 'react';
import './SidebarItem.scss';

export class SidebarItem extends React.Component {
    render() {
        const { id, name, activeItem } = this.props;
        let className = 'sidebar__item';

        if (activeItem === name) {
            className += ' sidebar__item_active';
        }

        return (
            <li key={id} className={className} data-name={name}>
                <a href="" className="sidebar__link">
                    {/* <img className="sidebar__img" alt="item-image" /> */}
                    <span className="sidebar__item-name">{name}</span>
                </a>
            </li>
        );
    }
}