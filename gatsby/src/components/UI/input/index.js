import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styled, { themeGet } from 'util/styles';
import { TextField, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Translate } from 'store'

const Input = styled(TextField)`
  width: 100%;
  margin: 1rem auto !important;

  label {
    color: #f5f5f5;

    @media screen and (min-width: ${themeGet('breakpoints.0')}) {
      color: #212121;
    }
  }

  &.MuiFormControl-root {
    height: 100%;

    .MuiInputBase-multiline.MuiInput-multiline {
      height: 100%;

      textarea {
        height: 100%;
      }
    }
  }

  & .MuiInputBase-input {
    color: #f5f5f5;

    @media screen and (min-width: ${themeGet('breakpoints.0')}) {
      color: #212121;
    }
  }

  .Mui-error {
    color: ${themeGet('colors.error.900')} !important;
  }
`;

const styles = {
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: 'relative',
        '& $notchedOutline': {
          borderColor: '#f5f5f5',
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: '#f5f5f5',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderColor: '#f5f5f5',
          },
        },
        '&$focused $notchedOutline': {
          borderColor: '#f5f5f5',
          borderWidth: 1,
        },
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: '#f5f5f5'
        }
      }
    }
  }
}

const InputComponent = React.memo(({
  shouldValidate,
  touched,
  invalid,
  label,
  changed,
  value,
  htmlFor,
  inputRef,
  elementType,
  elementConfig,
  disabled,
  locale,
}) => {
  const { t, checkLang } = Translate.useContainer();
  let inputElement = null;
  let errorHelperText = null;

  useEffect(() => {
    checkLang(locale, 'contact-me')
  }, [])

  if (invalid && touched)
    errorHelperText = `${t('form.error.0')}${label.toLowerCase()}${t('form.error.1')}${t('form.error.2')}${shouldValidate.minLength}`;

  switch (elementType) {
  case 'input':
    inputElement = (
      <Input
        classes={{
          root: styles.overrides
        }}
        {...elementConfig}
        value={value}
        defaultValue=""
        id={htmlFor}
        label={label}
        onChange={changed}
        ref={inputRef}
        error={invalid && touched}
        helperText={errorHelperText}
        required={shouldValidate.required}
        disabled={disabled}
      />
    );
    break;
  case 'email':
    inputElement = (
      <Input
        classes={styles.overrides}
        {...elementConfig}
        value={value}
        defaultValue=""
        id={htmlFor}
        label={label}
        onChange={changed}
        ref={inputRef}
        error={invalid && touched}
        helperText={errorHelperText}
        required={shouldValidate.required}
        disabled={disabled}
      />
    );
    break;
  case 'textarea':
    inputElement = (
      <Input
        {...elementConfig}
        value={value}
        defaultValue=""
        id={htmlFor}
        label={label}
        onChange={changed}
        ref={inputRef}
        multiline
        error={invalid && touched}
        helperText={errorHelperText}
        required={shouldValidate.required}
        rows="5"
        disabled={disabled}
      />
    );
    break;
  case 'select':
    inputElement = (
      <Input
        {...elementConfig}
        select
        value={value}
        defaultValue=""
        id={htmlFor}
        label={label}
        onChange={changed}
        ref={inputRef}
        error={invalid && touched}
        required={shouldValidate.required}
        helperText={errorHelperText || 'Please, select your option'}
        disabled={disabled}
      >
        {elementConfig.options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.displayValue}
          </MenuItem>
        ))}
      </Input>
    );
    break;
  case 'password':
    inputElement = (
      <Input
        {...elementConfig}
        value={value}
        defaultValue=""
        id={htmlFor}
        label={label}
        onChange={changed}
        ref={inputRef}
        error={invalid && touched}
        helperText={errorHelperText}
        required={shouldValidate.required}
        disabled={disabled}
      />
    );
    break;
  default:
    inputElement = (
      <Input
        {...elementConfig}
        value={value}
        defaultValue=""
        id={htmlFor}
        label={label}
        onChange={changed}
        ref={inputRef}
        error={invalid && touched}
        helperText={errorHelperText}
        required={shouldValidate.required}
        disabled={disabled}
      />
    );
  }

  return (
    inputElement
  );
});

InputComponent.propTypes = {
  touched: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  elementType: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  shouldValidate: PropTypes.object.isRequired,
  elementConfig: PropTypes.object.isRequired,
  inputRef: PropTypes.func,
  disabled: PropTypes.bool
};

export default withStyles(styles)(InputComponent);
