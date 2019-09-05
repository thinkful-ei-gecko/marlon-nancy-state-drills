import React from 'react'

class HelloWorld extends React.Component {
    static defaultWhos = { whos : [] };
    state = {
        whoIndex: 0
    };

    handleClick(index){
        this.setState({whoIndex: index})
    }
   
    render() {
        const buttons = this.props.whos.map((who, index) => (
            <button key={index} onClick={this.handleClick}>
            {this.props.whos(index)}
            </button>
          ))
        const currentWho = this.props.whos[this.state.index]
        return (
            <div>
                {buttons}
                <p>Hello, {currentWho}</p>
            </div>
        )
    }

}

export default HelloWorld