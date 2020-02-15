"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var command_1 = require("@oclif/command");
const CLI = require('cli-flags')
 
const {flags, args} = CLI.parse({
  flags: {
    'output-file': CLI.flags.string({char: 'o'}),
    force: CLI.flags.boolean({char: 'f'})
  },
  args: [
    {name: 'input', required: true}
  ]
})
 
if (flags.force) {
  console.log('--force was set')
}
 
if (flags['output-file']) {
  console.log(`output file is: ${flags['output-file']}`)
}
 
console.log(`input arg: ${args.input}`)
 
// $ node example.js -f myinput --output-file=myexample.txt
// --force was set
// output file is: myexample.txt
// input arg: myinput
exports.run = command_1.run;
