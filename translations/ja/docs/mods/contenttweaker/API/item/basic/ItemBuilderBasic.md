# ItemBuilderBasic

[mods.contentweaker.item.basicによって呼び出されるアイテムの基本ビルダー。ItemBuilderBasic#build](/mods/contenttweaker/API/item/basic/ItemBuilderBasic/#build). 特別なプロパティはありません。存在します。

このクラスは mod-id `contenttweaker` を持つ mod によって追加されました。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
mods.contenttweaker.item.basic。ItemBuilderBasic
```

## 実装されたインターフェース
ItemBuilderBasic は以下のインターフェイスを実装しています。 つまり、これらのクラスで使用できるすべてのメソッドをこのクラスで使用することができます。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## メソッド
### ビルド

このビルダーが構築されると思われるものは何でも実際に構築するようCoTに指示します。

```zenscript
new ItemBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new ItemBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| パラメータ   | タイプ  | 説明               |
| ------- | ---- | ---------------- |
| リソースの場所 | 文字列型 | このブロックを与えるリソースパス |



