export function commands(num: number): string[] {
  /*
    00001 = wink
    00010 = double blink
    00100 = close your eyes
    01000 = jump
    10000 = Reverse the order of the operations in the secret handshake.
    */
  const binaryInput: string = dec2bin(num);
  const binaryActions: string = binaryInput.substring(1);
  const actions: string[] = ["jump", "close your eyes", "double blink", "wink"];
  let output: string[] = [];

  for (let i = binaryActions.length; i >= 0; i--) {
    if (binaryActions[i] == "1") {
      const action = actions.at(i);
      if (action) {
        output.push(action);
      }
    }
  }

  if (isReverse(binaryInput)) {
    return output.reverse();
  }
  return output;
}

function dec2bin(dec: number): string {
  return dec.toString(2).padStart(5, "0");
}

function isReverse(binaryInput: string): boolean {
  return binaryInput.substring(0, 1) == "1";
}
