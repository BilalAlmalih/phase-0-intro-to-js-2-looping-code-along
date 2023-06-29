function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
function writeCards(names) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
