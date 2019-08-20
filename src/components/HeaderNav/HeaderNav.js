import React from 'react';
import './HeaderNav.scss';

const iconList = ['images/support-icon.svg', 'images/message-icon.svg', 'images/notification-icon.svg'];

export class HeaderNav extends React.Component {
    render() {
        return (
            <ul className="header__nav">
                {iconList.map((url, index) => {
                    return <li key={index} className="header__nav-item">
                        <div className="header__nav-pic">
                            <img src={url} className="header__nav-img" />
                        </div>
                    </li>
                })}
            </ul>
        );
    }
}