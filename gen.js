const fs = require("fs");

const MIN_NUMBER = 0;
const MAX_NUMBER = 10;
const SIGNS = ["+", "-", "/", "*"];

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

SIGNS.forEach((sign) => {
  for (let i = MIN_NUMBER; i < MAX_NUMBER + 1; i++) {
    for (let j = MIN_NUMBER; j < MAX_NUMBER + 1; j++) {
      calcCode += `
    ${
      i === MIN_NUMBER && j === MIN_NUMBER ? "" : "else "
    }if (a == ${i} && operation == "${sign}" && b == ${j}) { ${
        sign === "/" && (i === 0 || j === 0)
          ? 'cout << "Zero division! Exit!" << endl; return 1;'
          : `cout << ${i} ${sign} ${j} << endl;`
      } }`;
    }
  }
});

calcCode += `
  else if (${SIGNS.map(sign => `operation != "${sign}"`).join(" && ")}) {
    cout << "Unknown operation (allowed - '${SIGNS.join("', '")}')" << endl;
    return 1;
  }
  else {
    cout << "Out of range (Min - ${MIN_NUMBER}, max - ${MAX_NUMBER})" << endl;
    return 1;
  }
  return 0;
}
`;

fs.writeFile("calc.cpp", calcCode, (err) => {
  if (err) throw err;
  console.log("Writted succesfully!");
});
