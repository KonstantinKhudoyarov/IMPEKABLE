import React from 'react';
import './Sidebar.scss';
import { SidebarTitle } from '../SidebarTitle/SidebarTitle';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { faHome, faChartBar, faEnvelope, faFlag, faReceipt, faUsers, faComments, faCalendarAlt, faLifeRing, faCog } from '@fortawesome/free-solid-svg-icons';

const listItems = [
    {
        name: 'Home',
        icon: faHome
    },
    {
        name: 'Dashboard',
        icon: faChartBar
    },
    {
        name: 'Inbox',
        icon: faEnvelope
    },
    {
        name: 'Products',
        icon: faFlag
    },
    {
        name: 'Invoices',
        icon: faReceipt
    },
    {
        name: 'Customers',
        icon: faUsers
    },
    {
        name: 'Chat Room',
        icon: faComments
    },
    {
        name: 'Calendar',
        icon: faCalendarAlt
    },
    {
        name: 'Help Center',
        icon: faLifeRing
    },
    {
        name: 'Settings',
        icon: faCog
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
                        return <SidebarItem key={index} name={item.name} activeItem={activeItem} icon={item.icon} />;
                    })}
                </ul>
            </nav>
        );
    }
}