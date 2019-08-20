import React from 'react';
import './User.scss';

export class User extends React.Component {
    render() {
        return (
            <div className="user">
                <span className="user__name">John Doe</span>
                <div className="user__dropdown">
                    <div className="user__arrow">
                        <img src="images/user-arrow.svg" className="user__arrow-img" alt="dropdown-arrow" />
                    </div>
                    <div className="user__pic">
                        <img src="images/avatar.png" className="user__pic-img" alt="avatar" />
                    </div>
                </div>
            </div>
        );
    }
}