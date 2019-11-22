import React from 'react';

import IconFA from '../../components/UI/Icons/IconsFA';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponenet, axios) => {
  return class extends React.Component {
    state = {
      error: null
    }

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({
          error: null
        })

        return req;
      })
      this.resInterceptor = axios.interceptors.response.use(res => res, err => {
        this.setState({
          error: err
        })
      })
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({
        error: null
      })
    }

    render () {
      return (
        <React.Fragment>
          <Modal 
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler} >
            <div align="center"
              style={{
                backgroundColor: 'transparent',
                margin: '0 auto',
                padding: '32px',
                height: '100%'
              }}>
              <IconFA
                type="far"
                icon="frown"
                size="5rem"
                margin="0.5rem auto"></IconFA>
              <h4 align="center">Something went wrong!</h4>
              <code style={{margin: '5rem auto'}}>[ERROR] { this.state.error ? this.state.error.message : null }</code>
            </div>
          </Modal>
          <WrappedComponenet {...this.props} />
        </React.Fragment>
      )
    }
  } 
}

export default withErrorHandler;