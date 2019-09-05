import React from 'react'

class HelloWorld extends React.Component {
    static defaultProps = { whos : [] };
    state = {
        who: 'World'
    };

    handleClick = newWho => {
        console.log(newWho)
        this.setState({who: newWho})
    }
   
    render() {
        const buttons = this.props.whos.map((who, index) => (
            <button key={index} onClick={() => this.handleClick(who)}>
            {who}
            </button>
          ))
        const currentWho = this.state.who
        return (
            <div>
                {buttons}
                <p>Hello,{currentWho}</p>
            </div>
        )
    }
}

export default HelloWorld