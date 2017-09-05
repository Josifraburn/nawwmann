import React from 'react';
import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom';
import HomeContainer from '../Containers/HomeContainer';


export default function Routes() {
    return (
        <HashRouter>
            <main>
                <Route path="/home" component={HomeContainer} />
                <Route path='/about' component={AboutContainer} />
            </main>
        </HashRouter>
    )
}