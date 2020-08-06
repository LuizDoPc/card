#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

const options = {
  padding: 1,
  margin: 2,
  borderStyle: 'double',
  borderColor: '#F20089',
};

const data = {
  logo: chalk.white(`
  
 _       _   _   _   ______       _____   _____       ___   _____     _____   _____  
| |     | | | | | | |___  /      /  ___/ /  _  \\     /   | |  _  |   | ____| /  ___/ 
| |     | | | | | |    / /       | |___  | | | |    / /| | | |_| |   | |__   | |___  
| |     | | | | | |   / /        |___  \\ | | | |   / / | | |  __ |   |  __|  |___  \\ 
| |___  | |_| | | |  / /__        ___| | | |_| |  / /  | | | |  \\ \\  | |___   ___| | 
|_____| |_____/ |_| /_____|      /_____/ |_____/ /_/   |_| |_|   \\ \\ |_____| /_____/ 


  `),
  name: chalk.white(' luizdopc /'),
  mail: chalk.hex('#F20089')('luizsoares@ioasys.com.br'),
  work: chalk.white('React Native @ ioasys'),
  twitter: chalk.hex('#F20089')('https://twitter.com/luizdopc'),
  github: chalk.hex('#F20089')('https://github.com/luizdopc'),
  web: chalk.hex('#F20089')('https://luizdopc.github.io'),
  card: chalk.white('npx luizdopc'),
};

const label = {
  work: chalk.white.bold('      Work:'),
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
