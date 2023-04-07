const fs = require("fs");

const MIN_NUMBER = 0;
const MAX_NUMBER = 4;

let calcCode = "";

calcCode += `
// Generated calc program

#include <iostream>
using namespace std;

int main() {

  int a;
  int b;

  cout << "Enter an a: ";
  cin >> a;

  cout << "Enter an b: ";
  cin >> b;
`;

for (let i = MIN_NUMBER; i < MAX_NUMBER + 1; i++) {
  for (let j = MIN_NUMBER; j < MAX_NUMBER + 1; j++) {
    calcCode += `
  ${
    i === MIN_NUMBER && j === MIN_NUMBER ? "" : "else "
  }if (a == ${i} && b == ${j}) { cout << ${i + j} << endl; }`;
  }
}

calcCode += `
  else {
    cout << "Out of range (Min - ${MIN_NUMBER}, max - ${MAX_NUMBER})" << endl;
  }
  return 0;
}
`;

fs.writeFile("calc.cpp", calcCode, (err) => {
  if (err) throw err;
  console.log("Writted succesfully!");
});
