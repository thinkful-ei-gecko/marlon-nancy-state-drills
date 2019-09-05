import React from 'react'

class Bomb extends React.Component{

    state = {
        count: 0
    }

    componentDidMount() {
        this.interval = setInterval( () => {
            this.setState({count: this.state.count + 1})
        }, 1000)
        console.log(this.interval);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }


    render() {
        let wordDisplay = '';

        if(this.state.count % 2 === 0){
            wordDisplay = 'tick';
        } 
        if(this.state.count % 2 !== 0){
            wordDisplay = 'tock'
        }
        if(this.state.count >= 8){
            clearInterval(this.interval);
            wordDisplay ='BOOM!!!!!!';
    
        }

        console.log(this.state.count);   
        return (
            <div>
                <p>{wordDisplay}</p>
            </div>
        )
    }
}

export default Bomb;