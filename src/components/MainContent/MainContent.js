import React from 'react';
import './MainContent.scss';
import { Header } from '../Header/Header';
import { BigCalendar } from '../Calendar/Calendar';

export class MainContent extends React.Component {
    render() {
        return (
            <main className="main">
                <Header />
                <BigCalendar />
            </main>
        );
    }
}