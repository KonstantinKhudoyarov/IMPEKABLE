import React from 'react';
import './Header.scss';
import { HeaderSearch } from '../HeaderSearch/HeaderSearch';
import { HeaderRight } from '../HeaderRight/HeaderRight';

export class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <HeaderSearch />
                <HeaderRight />
            </header>
        );
    }
}