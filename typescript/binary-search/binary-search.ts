export function find(haystack: number[], needle: number): number | never {
  let middleIndex: number = Math.floor(haystack.length / 2);
  let splitHaystack: number[] = haystack

  while (needle != splitHaystack[middleIndex]) {
    if (splitHaystack.length <= 1) {
        throw new Error('Value not in array')
    }
    if (needle > splitHaystack[middleIndex]) {
        if (middleIndex == splitHaystack.length + 1) {
            splitHaystack = splitHaystack.slice(middleIndex);
        } else {
            splitHaystack = splitHaystack.slice(middleIndex + 1);            
        }
    }
    if (needle < splitHaystack[middleIndex]) {
        splitHaystack = splitHaystack.slice(0, middleIndex);
    }

    middleIndex = Math.floor(splitHaystack.length / 2);
  }

  return haystack.findIndex((element) => element == needle);
}
