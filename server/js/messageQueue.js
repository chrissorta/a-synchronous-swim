const messages = []; // the storage unit for messages

module.exports.enqueue = (message) => {
  console.log(`Enqueing message: ${message}`);
  messages.push(message);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  return messages.shift();
};

module.exports.length = () => {
  // returns undefined if messages array is empty
  return messages.length;
};

module.exports.display = () => {
  // returns undefined if messages array is empty
  console.log(messages)
};