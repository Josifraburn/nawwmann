import React from 'react';
import ReactDOM from 'react-dom';
import phrases from './phrases';
import randomNumber from './randomNumber';
import Box from './box';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            phrase: 'No Phrase Yet...'
        }
    }
    componentDidMount() {
        setInterval(() => {
            const index = randomNumber(0, phrases.length - 1);

            this.setState({
                phrase: phrases[index]
            })
        }, 2000)
    }
    render() {
        return (
            <div>
                <h1>Hello world!!</h1>
                <h3>Cool Phrase: {this.state.phrase}</h3>
                <Box 
                    width={300}
                    color={'coral'}
                />
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)

if (module.hot) {
    module.hot.accept();
}