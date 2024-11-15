const path = require('path')
const fs = require('fs')
const yargs = require('yargs')
const { marked } = require('marked')
const { hideBin } = require('yargs/helpers')
const { getPackageName } = require('./libs/name')
const { readMarkdownFilesync, writeHtmlFileSync } = require('./libs/file')

const { argv } = yargs(hideBin(process.argv))
  .option('name', {
    type: 'string',
    describe: '名前を表示します',
  })
  .option('file', {
    type: 'string',
    describe: 'MarkDownファイルのパス',
  })
  .option('out', {
    describe: '出力するファイルのパス',
    default: 'article.html',
  })

if (argv.name) {
  console.log(getPackageName())
  process.exit(0)
} 

const markdownStr = readMarkdownFilesync(argv.file)
console.log(markdownStr)

const html = marked(markdownStr)
writeHtmlFileSync(argv.out, html)
