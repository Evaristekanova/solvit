const orginalString = process.argv.slice(2).join(" ");
try {
  const reversedString = orginalString.split("").reverse().join("");
  console.log(reversedString);
} catch (error) {
  console.log("Enter some string please");
}
