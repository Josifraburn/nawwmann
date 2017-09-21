import React from 'react';
import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom';
import HomeContainer from '../Containers/HomeContainer';
import SizeContainer from '../Containers/SizeContainer';
import AboutContainer from '../Containers/AboutContainer';
export default function Routes() {
    return (
        <HashRouter>
            <main>
                <Route path = '/home' component={HomeContainer} />
                <Route path = '/about' component={AboutContainer} />
                <Route path = '/size' component={SizeContainer} />
            </main>
        </HashRouter>
    )
}