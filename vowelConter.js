const orginalString = process.argv[2];
try {
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelCount = orginalString
    .split("")
    .filter((letter) => vowels.includes(letter)).length;
  console.log(vowelCount);
} catch (error) {
  console.log("Enter a string please!");
}
