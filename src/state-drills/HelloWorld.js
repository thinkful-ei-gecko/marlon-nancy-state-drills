import React from 'react'

class HelloWorld extends React.Component {
    state = {
        who: ''
    };

    handleClick = () => {
        this.setState({

        })
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }

}