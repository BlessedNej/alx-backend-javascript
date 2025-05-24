/* eslint-disable no-unused-vars */
/*  */
export default function returnHowManyArguments(...args) {
  let number = 0;
  for (const x of args) {
    number += 1;
  }
  return number;
}
