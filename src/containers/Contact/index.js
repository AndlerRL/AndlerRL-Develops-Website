import { connect } from 'react-redux';
import React from 'react';
import AOS from 'aos';
import Axios from 'axios-contact';

import { updateObject, checkValidity } from 'shared/utility';
import * as action from 'store/actions/index';
import withErrorHandler from 'hoc/withErrorHandler';
import Modal from 'components/UI/Modal';
import Input from 'components/UI/Input';
import IconFA from 'components/UI/Icons/IconsFA';
import ContactData from 'components/Contact';
import Loader from 'components/UI/Loader';

class Contact extends React.Component {
  state = {
    contactForm: {
      email: {
        elementType: 'email',
        elementConfig: {
          type: 'text',
          placeholder: 'example@example.com'
        },
        label: 'E-mail Address',
        value: '',
        validation: {
          required: true,
          valid: false,
          touched: false,
          emailFormat: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          minLength: 6
        }
      },
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Jane Doe'
        },
        label: 'Name / Company',
        value: '',
        validation: {
          required: true,
          valid: false,
          touched: false
        }
      },
      bodyText: {
        elementType: 'textarea',
        elementConfig: {
          type: 'textarea',
          placeholder: 'Reason to make contact'
        },
        label: 'Main Subject',
        value: '',
        validation: {
          required: true,
          valid: false,
          touched: false,
          minLength: 20
        }
      }
    },
    formIsValid: false
  }

  componentDidMount () {
    AOS.init({
      delay: 250,
      duration: 1000,
      offset: 250
    })
  }

  componentDidUpdate () {
    AOS.refresh();
  }

  contactReqHandler = e => {
    e.preventDefault();
    const formData = {};

    for (let formEleId in this.state.contactForm) {
      formData[formEleId] = this.state.contactForm[formEleId].value;
    }

    const contactReq = {
      contactData: formData
    }
    console.log(contactReq);
    this.props.onContactReq(contactReq);
  }

  inputChangedHandler = (e, inputId) => {
    let formIsValid = true;
    const updatedFormEle = updateObject(this.state.contactForm[inputId], {
      value: e.target.value,
      validation: {...this.state.contactForm[inputId].validation,
        valid: checkValidity(e.target.value, this.state.contactForm[inputId].validation),
        touched: true
      }
    });
    const updatedContactForm = updateObject(this.state.contactForm, {
      [inputId]: updatedFormEle
    });

    for (let inputIds in updatedContactForm)
      formIsValid = updatedContactForm[inputIds].validation.valid && formIsValid;

    this.setState({
      contactForm: updatedContactForm,
      formIsValid: formIsValid
    })
  }

  completeCloseHandler = () => {
    this.props.onContactReqClose(false)
  }
  
  render () {
    const success = {
      backgroundColor: 'transparent',
      padding: '64px',
      height: '100%',
      textAlign: 'center'
    }
    const formElementsArray = [];

    for (let key in this.state.contactForm)
      formElementsArray.push({
        id: key,
        config: this.state.contactForm[key]
      });

    let form = formElementsArray.map(formEle => (
      <Input 
        inputRef={this.inputRef}
        invalid={!formEle.config.validation.valid}
        shouldValidate={formEle.config.validation}
        touched={formEle.config.validation.touched}
        key={formEle.id}
        elementType={formEle.config.elementType}
        elementConfig={formEle.config.elementConfig}
        value={formEle.config.value}
        label={formEle.config.label}
        id={formEle.id}
        name={formEle.id}
        for={formEle.id}
        changed={e => this.inputChangedHandler(e, formEle.id)} />
    ))

    if (this.props.isLoading)
      form = <Loader />

    let complete = null;

    if (this.props.contactComplete)
      complete = (
        <div style={success}>
          <h1>Thank you! <IconFA type="fas" icon="heart" size="6rem" margin="0 2rem"></IconFA></h1>
          <p style={{fontSize: '1.5rem'}}>I received your submission. Soon enough I will reach you via email – stay tuned!</p>
        </div>
      )

    return (
      <React.Fragment>
        <Modal
          modalClosed={this.completeCloseHandler}
          show={this.props.contactComplete}>
          { complete }
        </Modal>
        <ContactData
          submit={this.contactReqHandler}
          disabled={!this.state.formIsValid}>
          { form }
        </ContactData>
      </React.Fragment>
      
    )
  }
};

const mapStateToProps = state => {
  return {
    isLoading: state.contact.isLoading,
    contactComplete: state.contact.contactComplete
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onContactReq: contactData => dispatch(action.contactRequest(contactData)),
    onContactReqClose: close => dispatch(action.contactCompleteClose(close))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Contact, Axios));