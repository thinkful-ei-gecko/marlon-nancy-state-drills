import React from 'react';
import './Accordion.css'

class Accordion extends React.Component{
  static defaultProp = {sections: []}
  state = {
      currentDisplayIndex: null
  }

  handleButtonClick = currentIndex => {
      this.setState({currentDisplayIndex: currentIndex})
  }

  render(){
     const listItem = this.props.sections.map((section, index) => (
         <li key={index}>
             <button onClick = {() => this.handleButtonClick(index)}>{section.title}</button>
             {this.state.currentDisplayIndex === index && <p>{section.content}</p>}
         </li>
      )
     )
    console.log(this.state.currentDisplayIndex) 
     return (
        <ul>
            {listItem}
        </ul>
     )     
    }
}

export default Accordion