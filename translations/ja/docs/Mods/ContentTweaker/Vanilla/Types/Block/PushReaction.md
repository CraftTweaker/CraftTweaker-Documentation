# プッシュ反応

プッシュ反応とは、ピストンがブロックをプッシュしようとした時に起こる反応です。

# パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.PushReaction;`

## 2つの反応の比較

`==` 演算子を使用して、2つの反応が等しいかどうかを確認できます。

```zenscript
if(a == b){}
```

## 静的メソッド

これらのメソッドを使用して、PushReaction オブジェクトを取得できます。

```zenscript
mods.contenttweaker.PushReaction.normal();
mods.contenttweaker.PushReaction.destroy();
mods.contenttweaker.PushReaction.block();
mods.contentReaction.ignore();
mods.contenttweaker.PushReaction.pushReaction.pushOnly();
```