/* exported truncate */
function truncate(length, string) {
  if (string === '') {
    return '...';
  } else if (string.length > length || string.length < length) {
    return string.slice(0, length) + '...';
  }

  return string;
}
