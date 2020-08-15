# スクリプト入門

CraftTweaker uses a custom scripting Language called `ZenScript`, ZenScript is read from `.zs` files that are stored in the `<gamedir>/scripts` folder, if you aren't sure where this folder is, just run `/ct scripts` when in the game and the folder will open.

Zenscriptは"トップダウン型"のプログラミング言語です。つまり、`Import`をファイルの一番上に書かなければいけません。また、`変数の宣言`も書く必要があります。しかし、それには制限がありません。`変数の宣言`はどこの行でも書くことができますが、その行の前までの行では`変数`にアクセスすることはできません。


スクリプト ファイルは `.zs` 接頭辞を持っています。 `.zs.txt` ではないことを確認してください。

## スクリプトとは

Scripts are stored in `<gamedir>/scripts` and are loaded when the player joins a world, much like previous versions of CraftTweaker (excluding 1.12), Scripts CAN be reloaded, just run `/reload`.

Scripts are loaded twice when entering a single player world, once on the `Server` side, and then on the `Client` side, if you have a `println()` in your script, you will see it twice, since it is running twice.

これは、変更が2回適用されるわけではありませんが、スクリプトによる変更が横になる可能性がありますので、いくつかの変更があります。 ローカリゼーションの設定はクライアント側でのみ実行されますが

サーバーに参加すると、サーバーはクライアントにスクリプトを送信し、クライアントはこれらのスクリプトを実行します。 これは、すべてのスクリプトのないクライアントであることを意味します。 はサーバーに参加して変更を取得することができます(サーバー上のアイテムを無効にする必要がありますが、クライアントに追加ファイルをダウンロードさせたくない場合に便利です)。


### あなたの最初のスクリプトを書こう

To get started with Scripts, you can create a very basic file, called `hello.zs` in the `<gamedir>/scripts>` folder; If you aren't sure where the folder is, just run `/ct scripts` and it should open!

`hello.zs`の中には次の文を書いてください。

```zenscript
println("Hello world!");
```

Now load up Minecraft and and take a look at the `<gamedir>/logs/crafttweaker.log` file (or run `/ct log` to have the file open in your default text editor).

`crafttweaker.log` ファイルは `<gamedir>/logs` 内にあり、プレーンテキストファイルを読むことができるプログラムで読むことができます。

スクリプトファイルを編集するには、Notepad++、Sublime TextまたはVScodeを使用することをお勧めしますが、どのプログラムでも使用できます。

スクリプトを編集するために使用するプログラムを選択する場合は、Syntaxハイライターが利用できるものを見てください。 一般的なテキストエディタでは、プラグインを使用して ZenScript ハイライト表示がサポートされています。



### crafttweaker.log ファイル

`crafttweaker.log`ファイルは、ログの出力に下のような構文が使われます。

```
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

上記に書いた例を使うと、以下のように出力されます。

```
[14:58:06.697][DONE][SERVER][INFO] Hello world!
```

構文はデバッグ目的で使用され、構文が使用されていない唯一の時間は、コマンドダンプのためです。 メッセージを出力するだけだったら捨てられた情報をコピーして

### コメント

コメントは、あなたのスクリプトを読みやすく、よりわかりやすくするために使います。

ZenScriptでは3つの種類のコメントの書き方ができます。

1行コメント: `// I'm a single line comment!`

一行コメントの別の方法 : `# I'm also a single line comment!`

複数行のコメント:
```
/* I'm 
a
multiline comment! */
```

ただ、 `#` のコメントはプリプロセッサにも使用されることに注意してください (ドキュメント化された場合は、TODOはPreProcessorsにリンクしています) 彼らはまだ有効なコメントですが望ましくない副作用を引き起こす可能性があります 