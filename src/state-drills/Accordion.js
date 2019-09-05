import React from 'react';
import './Accordion.css'

class Accordion extends React.Component{
  static defaultProp = {sections: []}
  state = {
      currentTab: ''
  }

  handleButtonClick = display => {
      console.log('Button Clicked!')
      this.props.displaying = !this.props.displaying
  }

  displayContent = e => {
      if(this.props.displaying === true){
      }
  }

  render(){
    

     const list = this.props.sections.map((section, index) => (
         <li key={index}>
             <button key={index} onClick = {() => this.handleButtonClick()}>{section.title}</button>
             <p>{section.content}</p>
         </li>
     )
     )
     return (
        <ul>
            {list}
        </ul>

      )
    }
}

export default Accordion