import React from 'react';
import { render } from 'react-dom';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

require('../css/style.css');

class App extends React.Component {
    render() {
        return(
            <div>
                <div className="container">
                    React WebPack Template
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));