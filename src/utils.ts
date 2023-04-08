type Sign = "+" | "-" | "/" | "*";
type Signs = Sign[];

export function generateCalcCode(
  minNumber: number,
  maxNumber: number,
  signs: Signs
) {
  let calcCode = "";

  calcCode += `
// Generated calc program

#include <iostream>
using namespace std;

int main() {

  string operation;
  int a;
  int b;

  cout << "Enter an operation: ";
  cin >> operation;

  cout << "Enter an a: ";
  cin >> a;

  cout << "Enter an b: ";
  cin >> b;
`;

  signs.forEach((sign) => {
    for (let i = minNumber; i < maxNumber + 1; i++) {
      for (let j = minNumber; j < maxNumber + 1; j++) {
        calcCode += `
  ${
    i === minNumber && j === minNumber ? "" : "else "
  }if (a == ${i} && operation == "${sign}" && b == ${j}) { ${
        sign === "/" && (i === 0 || j === 0)
          ? 'cout << "Zero division! Exit!" << endl; return 1;'
          : `cout << ${i} ${sign} ${j} << endl;`
      } }`;
      }
    }
  });

  calcCode += `
  else if (${signs.map((sign) => `operation != "${sign}"`).join(" && ")}) {
    cout << "Unknown operation (allowed - '${signs.join("', '")}')" << endl;
    return 1;
  }
  else if (a < ${minNumber} || a > ${maxNumber} || b < ${minNumber} || b > ${maxNumber}) {
    cout << "Out of range (Min - ${minNumber}, max - ${maxNumber})" << endl;
    return 1;
  }
  return 0;
}
`;

  return calcCode;
}
