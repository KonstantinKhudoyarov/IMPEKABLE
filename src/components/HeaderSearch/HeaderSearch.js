import React from 'react';
import './HeaderSearch.scss';

export class HeaderSearch extends React.Component {
    render() {
        return (
            <div className="header__search">
                <label className="header__search-label">
                    <div className="header__search-pic">
                        <img src='images/icon_search.svg' className="header__search-img" alt="search-icon" />
                    </div>
                    <input type="text" className="header__input" placeholder="Search transactions, invoices or help" />
                </label>
            </div>
        );
    }
}