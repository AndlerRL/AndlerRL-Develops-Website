import React from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponenet, axios) => {
  return class extends React.Component {
    state = {
      error: null
    }

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.ListeningStateChangedEvent({
          error: null
        })

        return req;
      })
      this.resInterceptor = axios.interceptors.response.use(res => res, err => {
        this.ListeningStateChangedEvent({
          error: err
        })
      })
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.ListeningStateChangedEvent({
        error: null
      })
    }

    render () {
      return (
        <React.Fragment>
          <Modal 
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler} >
            <div style={{
              transform: 'rotateZ(90deg)',
              margin: '1rem auto',
            width: '24px',
            height: '24px'
            }}> :(</div>
            <h4 align="center">Something went wrong!</h4>
            <code style={{margin: '5rem'}}>[ERROR] { this.state.error ? this.state.error.message : null }</code>
          </Modal>
          <WrappedComponenet {...this.props} />
        </React.Fragment>
      )
    }
  } 
}

export default withErrorHandler;