export const add = (numbers) => {
  // Handle different delimiters like //;\n
  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    delimiter = numbers.slice(2, delimiterEnd);
    numbers = numbers.slice(delimiterEnd + 1);
  }

  // Replace the custom delimiter or newlines with commas
  const normalizedNumbers = numbers.replace(
    new RegExp(`[${delimiter}\\n]`, "g"),
    ","
  );

  // Split the numbers into an array
  const numberArray = normalizedNumbers.split(",").map((num) => num.trim());

  // Check for negative numbers and throw an exception with the list
  const negativeNumbers = numberArray.filter((num) => parseInt(num) < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  // Sum the numbers and return the result
  return numberArray.reduce((sum, num) => sum + (parseInt(num) || 0), 0);
};
