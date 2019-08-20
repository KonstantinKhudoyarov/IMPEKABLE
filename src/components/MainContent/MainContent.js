import React from 'react';
import './MainContent.scss';
import { Header } from '../Header/Header'

export class MainContent extends React.Component {
    render() {
        return (
            <main className="main">
                <Header />
            </main>
        );
    }
}