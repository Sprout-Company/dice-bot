
/**
 * Check if the string is emoji
 */
const hasEmoji = (char) => {
  let regex = /<a?:.+?:\d{18}>|\p{Extended_Pictographic}/gu;
  return regex.test(char);
}

module.exports = {
  hasEmoji,
}