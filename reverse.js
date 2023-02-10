const inputString = process.argv[2];
try {
  const reversedString = inputString.split("").reverse().join("");
  console.log(reversedString);
} catch (error) {
  console.log("Enter some string please");
}
