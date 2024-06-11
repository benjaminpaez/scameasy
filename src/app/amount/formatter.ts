export function formatterDot(number: any): string {
  let numberStg = number.toString();
  let numberArr = numberStg.split("");

  let formattedArr = [];

  for (let i = 0; i < numberArr.length; i++) {
    formattedArr.push(numberArr[numberArr.length - 1 - i]);
    if ((i + 1) % 3 === 0 && i !== numberArr.length - 1) {
      formattedArr.push(".");
    }
  }

  formattedArr.reverse();

  return formattedArr.join("");
}
