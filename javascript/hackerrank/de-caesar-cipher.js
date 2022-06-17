/*
 * Move the characters backwords till the Kth Characters.
 * Complete the 'deCaesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function deCaesarCipher(s, k) {
  let input = s.split("");

  return input
    .map((character) =>
      isLetter(character) ? prevKthCharacter(character, k) : character
    )
    .join("");
}

function isLetter(character) {
  return character.length === 1 && !!character.match(/[a-z]/i);
}

function prevKthCharacter(character, k) {
  let numberOfCharsToBeShifted = k % 26;

  let charCode = character.charCodeAt();

  // 97 - 122 === a - z
  if (charCode >= 97 && charCode <= 122) {
    charCode = charCode - numberOfCharsToBeShifted;

    if (charCode < 97) {
      const diff = 96 - charCode;
      charCode = 122 - diff;
    }

    return String.fromCharCode(charCode);
  }

  // 65 - 90 === A - Z
  if (charCode >= 65 && charCode <= 90) {
    charCode = charCode - numberOfCharsToBeShifted;

    if (charCode < 65) {
      const diff = 64 - charCode;
      charCode = 90 - diff;
    }

    return String.fromCharCode(charCode);
  }

  return String.fromCharCode(charCode);
}

console.log({
  result: deCaesarCipher("xxx.bcd.yza", 27),
  expected: "www.abc.xyz",
});

console.log({ result: deCaesarCipher("Gg", 10), expected: "Ww" });

console.log({
  result: deCaesarCipher(
    "!w-bL`-yX!.G`mVKmFlX/MaCyyvSS!CSwts.!g/`He`eJk1DGZBa`eBLdyu`hZD`vV-jZDm.LCBSre..-!.!dmv!-E",
    62
  ),
  expected:
    "!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U",
});
