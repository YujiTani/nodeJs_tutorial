# 学習メモ

## 2024/11/17

### 学習内容

- CLI ツールを作成
- テストコードを書く
- commonjs と esm が混ざることでエラーが発生したので解消した
  - 基本的には esm を使うようにした
    テストコードで import.meta.url が使えなかったため 別ファイルを 拡張子 .cjs で作成し、そこで \_\_dirname を export させる という力技で解決させた(babel や jest の設定が不明のためこういう形式にした)
  - ※ 今回は、Jest の学習はスコープ外のため
- 参考
  - https://stackoverflow.com/questions/64961387/how-to-use-import-meta-when-testing-with-jest

### 感想

CLI ツールを作成するというアウトプットをしてみたいと思った
この Markdown ファイルのように、学習記録をサクッと応対型の CLI ツールでつけられると便利だと思った
