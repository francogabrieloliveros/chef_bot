function upperFirst(string) {
  const formattedString = string
    .trim()
    .split(" ")
    .filter((word) => word !== "")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  return formattedString;
}

export default upperFirst;
