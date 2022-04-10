import { hello, tes } from './scripts/import-example';

import { multiply } from './modules/multiply';

import './styles/style.css';
import './styles/style.scss';
import './styles/style.sass';

const print = (arrayVal) => {
  document.write("result: ")
  for (let elements of arrayVal) {

    document.write("</span>&nbsp" + elements);
  }
}

async function run() {
  const val = multiply();
  print(val)

}

run();


