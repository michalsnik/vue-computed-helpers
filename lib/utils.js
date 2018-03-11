const invalidChars = /[^a-zA-Z0-9:]+/g

/**
 * Convert text to kebab-case
 * @param {string} str Text to be converted
 * @return {string}
 */
export function kebabCase (str) {
  return str
    .replace(/([a-z])([A-Z])/g, match => match[0] + '-' + match[1])
    .replace(invalidChars, '-')
    .toLowerCase()
}
