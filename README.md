# generated-calc

Node.js скрипт генерирующий немножко неоптимизированный калькулятор на C++.

Идея взята [отсюда](https://github.com/AceLewis/my_first_calculator.py).

Пример сгенерированного кода:

```cpp

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

  if (a == 0 && b == 0) { cout << 0 << endl; }
  else if (a == 0 && b == 1) { cout << 1 << endl; }
  else if (a == 0 && b == 2) { cout << 2 << endl; }
  else if (a == 0 && b == 3) { cout << 3 << endl; }
  else if (a == 0 && b == 4) { cout << 4 << endl; }
  else if (a == 1 && b == 0) { cout << 1 << endl; }
  else if (a == 1 && b == 1) { cout << 2 << endl; }
  else if (a == 1 && b == 2) { cout << 3 << endl; }
  else if (a == 1 && b == 3) { cout << 4 << endl; }
  else if (a == 1 && b == 4) { cout << 5 << endl; }
  else if (a == 2 && b == 0) { cout << 2 << endl; }
  else if (a == 2 && b == 1) { cout << 3 << endl; }
  else if (a == 2 && b == 2) { cout << 4 << endl; }
  else if (a == 2 && b == 3) { cout << 5 << endl; }
  else if (a == 2 && b == 4) { cout << 6 << endl; }
  else if (a == 3 && b == 0) { cout << 3 << endl; }
  else if (a == 3 && b == 1) { cout << 4 << endl; }
  else if (a == 3 && b == 2) { cout << 5 << endl; }
  else if (a == 3 && b == 3) { cout << 6 << endl; }
  else if (a == 3 && b == 4) { cout << 7 << endl; }
  else if (a == 4 && b == 0) { cout << 4 << endl; }
  else if (a == 4 && b == 1) { cout << 5 << endl; }
  else if (a == 4 && b == 2) { cout << 6 << endl; }
  else if (a == 4 && b == 3) { cout << 7 << endl; }
  else if (a == 4 && b == 4) { cout << 8 << endl; }
  else {
    cout << "Out of range (Min - 0, max - 4)" << endl;
  }
  return 0;
}
```
