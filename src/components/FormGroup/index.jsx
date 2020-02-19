import React from 'react'

class FormGroup extends React.Component {
  render() {
    return (
      <>
        <div className={'form-group ' + this.props.class}>
          <div className="name"> {this.props.title} </div>
          <input
            className={this.props.class}
            type={this.props.type}
            name={this.props.type}
            onChange={value => this.props.onChange && this.props.onChange(value)}
          />
        </div>
        <span className={'error error-' + this.props.classError}>{this.props.errorName}</span>
      </>
    );
  }
}


export default FormGroup