import React from 'react'

class Input extends React.Component{
    
    render(){
        return(
            <>
                <div className={"form-group " + this.props.class}>
                    <div className="name" > {this.props.title} </div>
                    <input className={this.props.class} type={this.props.type} name={this.props.type} onChange={this.props.valid}/>
                </div>
                <span className={"error " + this.props.classError}>{this.props.errorName}</span>
            </>
        )
    }
}

export default Input