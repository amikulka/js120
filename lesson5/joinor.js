function joinOr(arr, delim = ',', word = 'or') {
  if (arr.length === 1) {
    return String(arr[0]);
  } else if (arr.length === 2) {
    return `${arr[0]} ${word} ${arr[1]}`;
  } else {
    let lastIndex = arr[arr.length -1];
    let result = choices.slice(0, -1).join(delim);
    return `${result}${delim} ${word} ${lastIndex}`;
  }
}