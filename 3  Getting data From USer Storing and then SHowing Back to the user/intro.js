
// simple project 1
// lets create a simple project where user puts his asked information and then 
// shows those values on the screen

import React from 'react'

class Intro extends React.Component {
    constructor() {
        super();

    };

    state = {
        getValues: ['name', 'address', 'phone', 'Education'],
        i: 0,
        obtainedValues: [],
    };

    // function to set the inputed data inside state
    setValuesData = (e) => {
        if (this.state.i === this.state.getValues.length - 1) { console.log(this.state.obtainedValues) }
        e.preventDefault();

        const valueHolder = document.getElementById('valueHolder');
        let i = this.state.i;
        this.setState({
            obtainedValues: this.state.obtainedValues.concat(valueHolder.value),
            i: this.state.i + 1,
        })
        valueHolder.value = "";

    }


    render() {
        const getCurrent = this.state.getValues[this.state.i];
        if ( this.state.i < this.state.getValues.length ) {

            return (<div>
                <form onSubmit={this.setValuesData} >
                    <h1> What is Your {getCurrent} </h1>
                    <input id={'valueHolder'} placeholder={` Enter the ${getCurrent} `} />
                    <button> Submit </button>
                </form>
            </div>)
        }
        else{
            console.log(this.state.obtainedValues)
            const values=this.state.getValues;
           const displayValues= values.map((item , index)=>{
                return(
                    <div>
                        <h1> Your {item} is {this.state.obtainedValues[index]} </h1>
                    </div>
                )
            });
            return(displayValues);
            
        }
    }
};

export default Intro;