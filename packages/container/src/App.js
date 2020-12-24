import React from 'react';
import MarketingAppRef from './components/MarketingAppRef';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <MarketingAppRef />
            </div>
        </BrowserRouter>
    );
}