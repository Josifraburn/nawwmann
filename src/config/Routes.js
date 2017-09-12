import React from 'react';
import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom';
import HomeContainer from '../Containers/HomeContainer';
import StyleContainer from '../Containers/StyleContainer';
import AboutContainer from '../Containers/AboutContainer';

export default function Routes() {
    return (
        <HashRouter>
            <main>
                <Route path = '/home' component={HomeContainer} />
                <Route path = '/about' component={AboutContainer} />
                <Route path = '/style' component={StyleContainer} />
            </main>
        </HashRouter>
    )
}