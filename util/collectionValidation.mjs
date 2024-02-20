function validateCollection(note) {
  // Check for missing inputs
  if (!(note).hasOwnProperty("username") || !(note).hasOwnProperty("collectionName"))
    return false;

  // Check if additional / disallowed fields are present
  const allowedFields = ["username", "collectionName"];
  const receivedFields = Object.keys(note);
  const invalidFields = receivedFields.filter(field => !allowedFields.includes(field));
  if (invalidFields.length > 0) {
    return false;
  }

  return true;
}

export { validateCollection };