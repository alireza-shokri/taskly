function generateUniqueId() {
  // return crypto.randomUUID();
  return Math.round(Math.random() * 1000);
}
export { generateUniqueId };
