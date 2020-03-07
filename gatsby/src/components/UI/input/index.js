import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styled, { themeGet } from 'util/styles';
import { TextField, MenuItem } from '@material-ui/core';
import { Translate } from 'store'

const Input = styled(TextField)`
  width: 100%;
  margin: 1rem auto !important;

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
    color: #212121;
  }

  .Mui-error {
    color: ${themeGet('colors.error.900')} !important;
  }
`;

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

export default InputComponent;
