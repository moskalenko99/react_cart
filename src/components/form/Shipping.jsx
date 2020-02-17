import React from 'react';
import FormGroup from './FormGroup';

const emptyValidator = value => {
  const valid = /[a-zA-Z]/.test(value);
  return valid ? null : 'The value is required';
};

const emailValidator = email => {
	const valid = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:+)\])$/.test(email);
  return valid ? null : 'Email has incorrect format';
};

const addressValidator = address => {
  const valid = /[a-zA-Z0-9_-]/.test(address);
  return valid ? null : 'Address has incorrect format';
};

const phoneValidator = phone => {
  const valid = /[0-9]/.test(phone);
  return valid ? null : 'Phone has incorrect format';
};


class Shipping extends React.Component {
  state = {
		sum: 32,
    inputs: [
      {
        id: '1',
        cls: 'forename',
        type: 'forename',
        title: 'Name*',
        classError: '',
        validators: [emptyValidator],
        error: null,
      },
      {
        id: '2',
        cls: 'address',
        type: 'address',
        title: 'Address*',
        classError: '',
        validators: [emptyValidator, addressValidator],
        error: null,
      },
      {
        id: '3',
        cls: 'phone',
        type: 'number',
        title: 'Phone',
        classError: '',
        validators: [phoneValidator],
        error: null,
      },
      {
        id: '4',
        cls: 'email',
        type: 'email',
        title: 'E-mail*',
        classError: '',
        validators: [emailValidator],
        error: null,
      },
    ],
  };

  updateValue(input, value) {
    let errorMessage = null;
    
    for (const i in input.validators) {
			const result = input.validators[i](value.target.value );
      
      if (result) {
        errorMessage = result;
        break;
      }
    }

    const inputs = this.state.inputs.map(def => {
      
      if (def.cls === input.cls) {
        if (errorMessage === null) {
					def.value = value;
          def.error = "";
          def.classError = "";					
        } else {
          def.error = errorMessage;
          def.classError = def.cls;
          return def;
        }
      }
      return def;
    });

    this.setState({ inputs });
	}
	
	checkSum(){
		if(this.state.sum >= 300){
			return false;
		}
		return true;
	}

  render() {
    return (
      <div className="form">
        <form className="form-shipping" action="" method="post">
          {this.state.inputs.map(definition => {
            return(
            
            <FormGroup
              key={definition.id}
              class={definition.cls}
              type={definition.type}
              title={definition.title}
              errorName={definition.error}
              classError={definition.classError}
              onChange={value => this.updateValue(definition, value)}
            />
          )})}
					<div className="form-group">
						{ this.checkSum() ?
							(
								<>
									<div className="name">Shipping options</div>
									<div className="delivery">
										<select className="select">
											<option>
												Free shipping
											</option>
											<option>
												Express shipping- additional 9.99 €
											</option>
											<option>
												Courier shipping - additional 19.99 €
											</option>
										</select>
									</div>
								</>
							) : 
							(
								<>
									<div className="name">Shipping options</div>
									<input type="delivery" disabled="disabled" name="delivery" value="Free express shipping"></input>
								</>
							)
						}
					</div>
          <button className="btn" type="submit">
              PAY
          </button>
        </form>
      </div>
    );
  }
}

export default Shipping;