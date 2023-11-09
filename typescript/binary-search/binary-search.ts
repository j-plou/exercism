export function find(haystack: number[], needle: number): number {
  let middleIndex: number = Math.floor(haystack.length / 2);
  let splittedHaystack: number[] = haystack

  while (needle != splittedHaystack[middleIndex]) {
    if (splittedHaystack.length <= 1) {
        throw new Error('Value not in array')
    }

    if (needle > splittedHaystack[middleIndex]) {
        splittedHaystack = splittedHaystack.slice(middleIndex);
    } else {
        splittedHaystack = splittedHaystack.slice(0, middleIndex);
    }
    middleIndex = Math.floor(splittedHaystack.length / 2);
  }

  return haystack.findIndex((element) => element == needle);
}
