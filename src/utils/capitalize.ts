function capitalizeString(str: string) {
  return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
}

export default capitalizeString;
