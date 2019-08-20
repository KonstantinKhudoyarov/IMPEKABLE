import React from 'react';
import './Sidebar.scss';
import { SidebarTitle } from '../SidebarTitle/SidebarTitle';
import { SidebarItem } from '../SidebarItem/SidebarItem';

const listItems = [
    {
        name: 'Home'
    },
    {
        name: 'Dashboard'
    },
    {
        name: 'Inbox'
    },
    {
        name: 'Products'
    },
    {
        name: 'Invoices'
    },
    {
        name: 'Customers'
    },
    {
        name: 'Chat Room'
    },
    {
        name: 'Calendar'
    },
    {
        name: 'Help Center'
    },
    {
        name: 'Settings'
    }
];

export class Sidebar extends React.Component {
    render() {
        const { activeItem } = this.props;

        return (
            <nav className="sidebar">
                <SidebarTitle>
                    IMPEKABLE
                </SidebarTitle>
                <ul className="sidebar__list">
                    {listItems.map((item, index) => {
                        return <SidebarItem key={index} name={item.name} activeItem={activeItem} />;
                    })}
                </ul>
            </nav>
        );
    }
}