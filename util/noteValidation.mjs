function validateNote(note) {
  // Check for missing inputs
  if (!(note).hasOwnProperty("username") || !(note).hasOwnProperty("content") || !(note).hasOwnProperty("collection"))
    return false;

  // Check if additional / disallowed fields are present
  const allowedFields = ["username", "content", "collection"];
  const receivedFields = Object.keys(note);
  const invalidFields = receivedFields.filter(field => !allowedFields.includes(field));
  if (invalidFields.length > 0) {
    return false;
  }

  return true;
}

export { validateNote };