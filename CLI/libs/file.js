const fs = require('fs')

exports.readMarkdownFileSync = (filePath) => {
  const markdownStr = fs.readFileSync(filePath, 'utf-8')
  return markdownStr
}

exports.writeHtmlFileSync = (filePath, html) => {
  fs.writeFileSync(filePath, html, 'utf-8')
}
