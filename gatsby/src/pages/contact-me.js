import React, { useState } from "react"
import { Translate } from 'store'
import Layout from "components/layout"
import SEO from "components/seo"
import ContactMe from "components/contact-me"
import Axios from 'axios'
import Snackbar from 'components/UI/snackbar'

const ContactMePage = ({ pageContext: { locale }, location }) => {
  const [submitting, setSubmitting] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: ''
  })

  const submitHandler = (e, form) => {
    e.preventDefault();
    setSubmitting(true);

    const { name, company, email, message } = form
    
    const clientInfo = {
      name: name.value,
      company: company.value,
      email: email.value,
      message: message.value
    }

    Axios.post('https://formcarry.com/s/cekGFuhSwgT', clientInfo)
      .then(response => {
        setSnackbar({
          open: true,
          message: `${response.data.title} ${response.data.message}`
        });

        setSubmitting(false)
      })
      .catch(err => {
        setSnackbar({
          open: true,
          message: `${err.data.title} ${err.data.message}`
        });
      })
  }

  const closeSnackbarHandler = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar({
      ...snackbar,
      open: false
    });
  };

  return (
    <Layout location={location} locale={locale}>
      <SEO title="Contact Me" lang={locale} pageView={`${locale === 'es' ? '/es/' : '/'}projects`}/>
      <Translate.Provider>
        <ContactMe 
          locale={locale}
          submit={submitHandler}
          submitting={submitting}
        />
        <Snackbar
          open={snackbar.open}
          message={snackbar.message}
          onClose={closeSnackbarHandler}
        />
      </Translate.Provider>
    </Layout>
  )
}

export default ContactMePage
