const fs = require('fs')

// 引数にファイルの絶対パスを受け取る
exports.readMarkdownFilesync = (filePath) => {
  // 指定されたMarkdownファイルを読み込む
  const markdownStr = fs.readFileSync(filePath, 'utf-8')
  return markdownStr
}

// 指定したパスにhtmlを書き出す
exports.writeHtmlFileSync = (filePath, html) => {
  fs.writeFileSync(filePath, html, 'utf-8')
}
