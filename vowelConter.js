const orginalString = process.argv.slice(2).join(' ');
try {
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelCount = orginalString
    .split("")
    .filter((letter) => vowels.includes(letter)).length;
  console.log(vowelCount);
} catch (error) {
  console.log("Enter a string please!");
}
