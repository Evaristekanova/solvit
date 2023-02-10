const inputString = process.argv[2];
try {
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelCount = inputString
    .split("")
    .filter((letter) => vowels.includes(letter)).length;
  console.log(vowelCount);
} catch (error) {
  console.log("Enter a string please!");
}
