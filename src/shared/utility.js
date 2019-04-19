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

  if (rules.emailFormat)
    isValid = rules.emailFormat.test(value) && isValid;

    return isValid;
}