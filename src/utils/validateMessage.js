// Example utility: validate message
export function validateMessage(message) {
  return typeof message === 'string' && message.trim().length > 0;
}
