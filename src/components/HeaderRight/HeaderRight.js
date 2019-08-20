import React from 'react';
import './HeaderRight.scss';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import { User } from '../User/User';

export class HeaderRight extends React.Component {
    render() {
        return (
            <div className="header__right">
                <HeaderNav />
                <div className="header__right-divider"></div>
                <User />
            </div>
        );
    }
}