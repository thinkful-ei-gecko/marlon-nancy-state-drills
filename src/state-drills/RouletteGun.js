import React from 'react'

class RouletteGun extends React.Component{
    static defaultProp = {bulletInChamber: 8}
    state = {
        chamber: null,
        spinningTheChamber: false
    }

    timeoutEvents = () => {
        let bulletNum = Math.ceil(Math.random() * 8);
        this.setState({
            chamber: bulletNum,
            spinningTheChamber: false
        })
 
    }

    handleButtonClick = e => {
        console.log('Button clicked!')
        this.setState({spinningTheChamber: true})
    
        this.timeout = setTimeout(this.timeoutEvents, 2000)
    
    }

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }

    render(){
        console.log(this.state)
        let displayText = ''
        if (this.state.spinningTheChamber === true){
            displayText = 'Spinning the chamber and pulling the trigger!...'             
        }
        else if(this.state.chamber === this.props.bulletInChamber){
            displayText = 'BANG!!!!'
        }
        else if(this.state.chamber !== this.props.bulletInChamber){
            displayText = 'You\'re safe!!'
        }
        console.log(displayText)
        return(
            <div>
                <button className="pullTrigger" onClick = {() => this.handleButtonClick()}>Pull the trigger!</button>
                <p>{displayText}</p>
            </div>
        )
    }
}

export default RouletteGun