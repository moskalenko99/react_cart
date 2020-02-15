import React from 'react'
import Input from './Input'

class Shipping extends React.Component{

  state = {
    errorForename: "",
    errorAddress: "",
    errorPhone: "",
    errorEmail: "",
  }

  validForename = (e) => {
      
    const valid = /[a-zA-Z]/.test(e.target.value);

      if(!valid){                        
        this.setState({ errorForename: "error-forename" })
      }else{
        this.setState({ errorForename: "" })
      }
  }

  validAddress = (e) => {
      
    const valid = /[a-zA-Z0-9_-]/.test(e.target.value);

      if(!valid){                        
        this.setState({ errorAddress: "error-address" })
      }else{
        this.setState({ errorAddress: "" })
      }
  }

  validPhone = (e) => {
      
    const valid = /[0-9]/.test(e.target.value);

      if(!valid){                        
        this.setState({ errorPhone: "error-phone" })
      }else{
        this.setState({ errorPhone: "" })
      }
  }


  validEmail = (e) => {

    const email = e.target.value;
    const valid = ((email.indexOf(".") > 0) && (email.indexOf("@") > 0)) || /[^a-zA-Z0-9.@_-]/.test(email);

      if(!valid){                        
        this.setState({ errorEmail: "error-email" })
      }else{
        this.setState({ errorEmail: "" })
      }
  }

    render() {
        return(
          <div className="form"> 
            <form className="form-shipping" action="" method="post">
              <Input class="forename" type="name" title="Name*" errorName="Некорректное имя" classError={this.state.errorForename} valid={this.validForename}/>
              <Input class="address" type="address" title="Address*" errorName="Некорректный адрес" classError={this.state.errorAddress} valid={this.validAddress}/>
              <Input class="phone" type="number" title="Phone" errorName="Некорректный номер телефона" classError={this.state.errorPhone} valid={this.validPhone}/>
              <Input class="email" type="email" title="E-mail" errorName="Некорректный емайл" classError={this.state.errorEmail} valid={this.validEmail}/>

              <div className="form-group">
                  <div className="name" >Shipping options</div>
                  <div className="delivery">
                      <select className="select">
                          <option value="Free shipping" selected>Free shipping</option>
                          <option value="Express shipping- additional 9.99 €">Express shipping- additional 9.99 €</option>
                          <option value="Courier shipping - additional 19.99 €">Courier shipping - additional 19.99 €</option>
                      </select>    
                  </div>
              </div>
              <button className="btn" type="submit">PAY</button>
              </form>
          </div>
        )
    }
}

export default Shipping
