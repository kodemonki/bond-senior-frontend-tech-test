const onShift = (input: string, shift: number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let shiftedString = "";
  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    const isUppercase = char === char.toUpperCase();
    const currentChar = char.toLowerCase();
    const currentPosition = alphabet.indexOf(currentChar);
    let shiftedChar = "";
    if (currentPosition === -1) {
      shiftedChar = currentChar;
    } else {
      let currentPositionAfterShift = currentPosition + Number(shift);
      while (currentPositionAfterShift < 0) {
        currentPositionAfterShift += alphabet.length;
      }
      while (currentPositionAfterShift > alphabet.length) {
        currentPositionAfterShift -= alphabet.length;
      }
      shiftedChar = alphabet.charAt(currentPositionAfterShift);
    }
    if (isUppercase) {
      shiftedChar = shiftedChar.toUpperCase();
    }
    shiftedString += shiftedChar;
  }
  return shiftedString;
};

export default onShift;
