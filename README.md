lonero-cli
==========

### Please note this is still under construction and needs to be further developed

The CLI for the Decentralized Internet and LonScript

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/lonero-cli.svg)](https://npmjs.org/package/lonero-cli)
[![Downloads/week](https://img.shields.io/npm/dw/lonero-cli.svg)](https://npmjs.org/package/lonero-cli)
[![License](https://img.shields.io/npm/l/lonero-cli.svg)](https://github.com/Lonero-Team/lonero-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g lonero-cli
$ lonero-cli COMMAND
running command...
$ lonero-cli (-v|--version|version)
lonero-cli/0.0.3 linux-x64 node-v12.4.0
$ lonero-cli --help [COMMAND]
USAGE
  $ lonero-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`lonero-cli hello [FILE]`](#lonero-cli-hello-file)
* [`lonero-cli help [COMMAND]`](#lonero-cli-help-command)

## `lonero-cli hello [FILE]`

describe the command here

```
USAGE
  $ lonero-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ lonero-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Lonero-Team/lonero-cli/blob/v0.0.3/src/commands/hello.ts)_

## `lonero-cli help [COMMAND]`

display help for lonero-cli

```
USAGE
  $ lonero-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
