import React from 'react';
import ReactDOM from 'react-dom';
import css from '../styles/index.css';
import Routes from './config/Routes';


class App extends React.Component {
    render () {
        return (
            <Routes />
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)

 