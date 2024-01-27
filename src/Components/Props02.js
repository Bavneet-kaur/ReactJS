import React from 'react'

/**
 ** using props with class components
 */
// not neccessary to import '{Component}'instead we can use 'React.Component' while extending
class CarGarage extends React.Component  {
    render(){
    const{color} = this.props;
        return(
            <div>
                <hr/>
                {/* <h3 style={{backgroundColor: "lightblue"}}>I am a {this.color} car!</h3> */}
                <h3 style={{backgroundColor: "lightblue"}}>I am a {color} car!</h3>
            </div>
        )
    }
}
export default CarGarage;