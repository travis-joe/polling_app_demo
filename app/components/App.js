/**
 * Created by apple on 5/22/16.
 */
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default App;