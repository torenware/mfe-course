import React from 'react';
import MarketingAppRef from './components/MarketingAppRef';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import {
    StylesProvider,
    createGenerateClassName,
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <MarketingAppRef />
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
}