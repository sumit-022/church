function capitalizeString(str: string) {
  const words = str.split("-");
  console.log("Words", words);

  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalizedWords.join(" ");
}

export default capitalizeString;
