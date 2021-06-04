#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

const options = {
  padding: 1,
  margin: 2,
  borderStyle: 'double',
  borderColor: '#163db7',
};

const data = {
  logo: chalk.white(`
          ......             ............
          ......                .........
          ......                   ......
          ......      .........      ....
          ......    ..............      .
          ......   ......    
          ......    ...........
          ......      ............
          ......             .....
          ......   ...............
          ......     ...........
  `),
  name: chalk.white(' luizdopc /'),
  mail: chalk.hex('#163db7')('luizotavioasoares@gmail.com'),
  work: chalk.white('React Native @ ❤\n              ReactJS      @ olist'),
  twitter: chalk.hex('#163db7')('https://twitter.com/luizdopc'),
  github: chalk.hex('#163db7')('https://github.com/luizdopc'),
  web: chalk.hex('#163db7')('https://bit.ly/3vWPQUD'),
  card: chalk.white('npx luizdopc'),
};

const label = {
  work: chalk.white.bold('      Stack:'),
  twitter: chalk.white.bold('   Twitter:'),
  github: chalk.white.bold('    GitHub:'),
  web: chalk.white.bold('       Web:'),
  card: chalk.white.bold('      Card:'),
};

const output = `${data.logo}
${data.name} ${data.mail}

${label.work}  ${data.work}
${label.web}  ${data.web}
${label.twitter}  ${data.twitter}
${label.github}  ${data.github}
${label.card}  ${data.card}`;

console.clear();
console.log(chalk.magenta(boxen(output, options)));
