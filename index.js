const path = require('path')
const fs = require('fs')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const { getPackageName } = require('./libs/name')
const { getFile } = require('./libs/file')

const { argv } = yargs(hideBin(process.argv))
  .option('name', {
    type: 'string',
    describe: '名前を表示します',
  })
  .option('file', {
    type: 'string',
    describe: 'MarkDownファイルのパス',
  })

if (argv.name) {
  console.log(getPackageName())
  process.exit(0)
} 

console.log(getFile(argv.file))
