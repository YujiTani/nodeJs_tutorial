# 学習メモ

## 2024/11/19

### 学習内容

- Express を使って API サーバーを作成
  - Express の基本機能を理解できる
    - ルーティング
    - ミドルウェア ... ミドルウェアは express を使う上で作成せざるを得ないものになるが、氾濫しないように大きな共通化ができるか、必要最小限な数になっているか意識が必要
      例えば、下記のミドルウェアは汎用的な処理のため、参考にすると良い
      - helmet https://www.npmjs.com/package/helmet
      - body-parser https://www.npmjs.com/package/body-parser
      - cookie-parser https://www.npmjs.com/package/cookie-parser
    - 包括的エラーハンドリング
      - 4 つの引数を持つミドルウェアとして定義する
      - app.use の中でも最後に定義する
      - Express でアプリケーション開発する場合、自分で包括的エラーハンドリング用のミドルウェアを設定します
    - redis について
      - NoSQL のデータベース
      - メモリ上にデータを保存するため、高速なデータアクセスが可能
      - データの整合性を保証しないため、データの一貫性が必要な場合には使用しない
      - 操作方法
        - server2.js を Redis を使ったサーバーとして構築している
        - DB 接続用の password は、環境変数としてあらかじめ指定する必要がある
          - コマンド例) `REDIS_PASSWORD=password node server2.js`
        - 初期データの確認は、`docker run -it --rm --net host redis redis-cli -h localhost -p 6379` でコンテナ内に入ることで確認できる
          - コマンド例) `keys *` で全てのキーを確認できる
          - コマンド例) `get users:1` でキーに紐づくデータを確認できる

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
