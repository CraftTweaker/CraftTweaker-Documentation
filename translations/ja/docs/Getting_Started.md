# スクリプト入門

CraftTweaker uses a custom scripting Language called `ZenScript`, ZenScript is read from `.zs` files that are stored in the `<gamedir>/scripts` folder.

Zenscriptは"トップダウン型"のプログラミング言語です。つまり、`Import`をファイルの一番上に書かなければいけません。また、`変数の宣言`も書く必要があります。しかし、それには制限がありません。`変数の宣言`はどこの行でも書くことができますが、その行の前までの行では`変数`にアクセスすることはできません。

## 導入

今までの中でModpackを作ったとき、Modをそのままインストールしただけではまとまりのあるプレイができなかった覚えはありませんか? Modはほとんどがそれぞれほぼ独自に開発されているので、他のものと比べて充実しすぎているものもあるかもしれません。 また、アイテムの作成に際してより良いレシピを思いつくかもしれません。 もしくは、あるModの特定のアイテムだけを、ModPackから除外したいと思うでしょう。 あるいは、鉱石辞書において登録されたアイテムが多すぎたり少なすぎたりする項目を見つけたりするでしょう。 CraftTweakerはこれらの思いを全て実現できます。

バニラのMinecraftをサポートするコア機能に加え、Mod固有のレシピや動作をも変更できる総合ライブラリも提供しています。

## スクリプト

Scripts are stored in `<minecraftdir>/scripts` and are loaded in the `PreInitialization` phase of Minecraft, unlike previous versions of CraftTweaker, Scripts cannot be reloaded, this is due to changes that Mojang have made in 1.12 and there is no workaround. また、スクリプトは**サーバーとクライアントの両方**に導入する必要があります。

スクリプトは`.zs`の拡張子で保存されます。また、`.zip`に圧縮してもスクリプトをロードすることができます。

### あなたの最初のスクリプトを書こう

スクリプトを書き始めるには、基本的な、`hello.zs`ファイルを`<minecraftdir>/scripts>`に作ります。

`hello.zs`の中には次の文を書いてください。

    print("Hello world!");
    

そして、Minecraftを起動して、`crafttweaker.log`ファイルを見てください。

`crafttweaker.log`は`<minecraftdir>`にあり、プレーンテキストを読めるソフトウェアで読むことができます。

スクリプトファイルを編集する際は、Notepad++もしくはSublime Textを使うのをお勧めしますが、どのソフトウェアでも読むことができます。

### crafttweaker.log ファイル

`crafttweaker.log`ファイルは、ログの出力に下のような構文が使われます。

    [LOADERSTAGE][SIDE][TYPE] <message>
    

上記に書いた例を使うと、以下のように出力されます。

    [PREINITIALIZATION][CLIENT][INFO] Hello world!
    

以上の構文はデバッグの際にのみ使われ、コマンドダンプの時には使われません。その場合、メッセージのみが書かれます。これによって、ダンプされたテキストのコピーペーストが簡単にできます。

### コメント

コメントは、あなたのスクリプトを読みやすく、よりわかりやすくするために使います。

ZenScriptでは3つの種類のコメントの書き方ができます。

1行コメント: `// I'm a single line comment!`

一行コメントの別の方法 : `# I'm also a single line comment!`

複数行のコメント: 

    /* I'm 
    a
    multiline comment! */