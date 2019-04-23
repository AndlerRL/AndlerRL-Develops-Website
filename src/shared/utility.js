export const updateObject = (oldObj, updatedProps) => {
  return {
    ...oldObj,
    ...updatedProps
  };
}

export const checkValidity = (value, rules) => {
  let isValid = true;

  if (rules.required)
    isValid = value.trim() !== '' && isValid;

  if (rules.minLength) 
    isValid = value.length >= rules.minLength && isValid;

  if (rules.maxLength) 
    isValid = value.length <= rules.maxLength && isValid;

  if (rules.emailFormat)
    isValid = rules.emailFormat.test(value) && isValid;

    return isValid;
}