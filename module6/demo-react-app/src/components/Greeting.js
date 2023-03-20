// import React, { Component } from 'react'


// export default class Greeting extends Component {
//   render() {
//     const name = "Amber";
//     return (
//       <div><h1>hello, {name}!</h1></div>
//     )
//   }
// }

import React, { Component } from "react";

class Greeting extends Component {

    constructor(props){

        super(props);


        this.state = {name:'World'}

    }


    greetName = () =>{
        this.setState({name:'dum dum'})
    }

    
    render(){
        return(
        <div>
            <h3>Hello {this.state.name}!!</h3>
            <button onClick={() => this.greetName()}>Change Name</button>
        </div>
            )
    }
}

export default Greeting



