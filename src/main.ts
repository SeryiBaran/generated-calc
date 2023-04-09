import fs from 'node:fs'
import { generateCalcCode } from './utils'

fs.writeFile(
  'calc.cpp',
  generateCalcCode(0, 10, ['+', '-', '/', '*']),
  (err) => {
    if (err)
      throw err
    console.log('Writted succesfully!')
  },
)
