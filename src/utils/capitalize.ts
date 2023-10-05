function capitalizeString(str: string) {
  const words = str.split("-");

  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalizedWords.join(" ");
}

export default capitalizeString;
