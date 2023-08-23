/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {}; // 1 * 1 = O(1)
  const unique = []; // 1 * 1 = O(1)
  for (
    let i = 0; // 1 * n = O(n) NESTED LOOP!
    i < words.length; // 2 * n = O(2n) ~= O(n)
    i++ // 1 * n = O(n)
  ) {
    const word = words[i]; // 1 * 1 = O(1)
    if (!seen[word]) {
      // 1 * 1 = O(1)
      seen[word] = true; // 1 * 1 = O(1)
      unique[unique.length] = word; // 1 * 1 = O(1)
    }
  }
  return unique; // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = []; // 1 * 1 = O(1)

  for (
    let i = 0; // 1 * n     = O(n) NESTED LOOP!
    i < words.length; // 2 * n * n = O(2n^2) ~= O(n^2)
    i++ // 1 * n * n = O(n^2)
  ) {
    const word = words[i]; // 1 * 1 = O(1)
    let isUnique = true; // 1 * 1 = O(1)
    for (
      let c = 0; // 1 * 1 = O(1)
      c < i; // 2 * n = O(2n) ~= O(n)
      c++ // 1 * n = O(n)
    ) {
      const comparing = words[c]; // 1 * n = O(n)
      if (comparing === word) {
        // 1 * n = O(n)
        isUnique = false; // 1 * n = O(n)
      }
    }
    if (isUnique) {
      // 1 * 1 = O(1)
      unique[unique.length] = word; // 1 * 1 = O(1)
    }
  }
  return unique; // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
