/*
 * Move the characters forward till the Kth Characters.
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
  let input = s.split("");

  return input
    .map((character) =>
      isLetter(character) ? nextKthCharacter(character, k) : character
    )
    .join("");
}

function isLetter(character) {
  return character.length === 1 && !!character.match(/[a-z]/i);
}

function nextKthCharacter(character, k) {
  let numberOfCharsToBeShifted = k % 26;

  const charCode = character.charCodeAt();

  // 97 - 122 === a - z
  if (charCode >= 97 && charCode <= 122) {
    if (numberOfCharsToBeShifted > 122 - charCode) {
      numberOfCharsToBeShifted =
        numberOfCharsToBeShifted - (122 - charCode) + 96;
    } else {
      numberOfCharsToBeShifted = numberOfCharsToBeShifted + charCode;
    }
    return String.fromCharCode(numberOfCharsToBeShifted);
  }

  // 65 - 90 === A - Z
  if (charCode >= 65 && charCode <= 90) {
    if (numberOfCharsToBeShifted > 90 - charCode) {
      numberOfCharsToBeShifted =
        numberOfCharsToBeShifted - (90 - charCode) + 64;
    } else {
      numberOfCharsToBeShifted = numberOfCharsToBeShifted + charCode;
    }

    return String.fromCharCode(numberOfCharsToBeShifted);
  }

  return String.fromCharCode(charCode);
}

console.log({
  result: caesarCipher("www.abc.xyz", 27),
  expected: "xxx.bcd.yza",
});

console.log({ result: caesarCipher("Ww", 62), expected: "Gg" });

console.log({
  result: caesarCipher(
    "!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U",
    62
  ),
  expected:
    "!w-bL`-yX!.G`mVKmFlX/MaCyyvSS!CSwts.!g/`He`eJk1DGZBa`eBLdyu`hZD`vV-jZDm.LCBSre..-!.!dmv!-E",
});
