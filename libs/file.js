const fs = require('fs')

// 引数にファイルの絶対パスを受け取る
exports.readMarkdownFilesync = (filePath) => {
  const mdStr = fs.readFileSync(filePath, 'utf-8')
  return mdStr
}
