function validateUser(user) {
  // Check for missing inputs
  if (!(user).hasOwnProperty("username") || !(user).hasOwnProperty("password"))
    return false;

  // Check if additional / disallowed fields are present
  const allowedFields = ['username', 'password'];
  const receivedFields = Object.keys(user);
  const invalidFields = receivedFields.filter(field => !allowedFields.includes(field));
  if (invalidFields.length > 0) {
    return false;
  }

  return true;
}

export { validateUser };