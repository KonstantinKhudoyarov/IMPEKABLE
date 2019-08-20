import React from 'react';
import './HeaderNav.scss';

const iconList = ['support-icon', 'message-icon', 'notification-icon'];

export class HeaderNav extends React.Component {
    render() {
        return (
            <ul className="header__nav">
                {iconList.map((name, index) => {
                    return <li key={index} className="header__nav-item">
                        <div className="header__nav-pic">
                            <img src={`images/${name}.svg`} className="header__nav-img" alt={name} />
                        </div>
                    </li>
                })}
            </ul>
        );
    }
}