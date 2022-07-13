export const validateInput = (value: string): string => {
  let error = '';
  if (!value) {
    error = "This field is required";
  } else if (value.length < 3 || value.length > 30) {
    error = "The value must be at least 3 characters but less then 30 characters";
  }
  return error;
}
