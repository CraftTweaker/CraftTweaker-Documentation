# BlockBuilderBasic

このビルダーは、 [mods.contenttweaker.block.basicでデフォルトで使用されるブロック型をビルドします。BlockBuilderBasic#build](/mods/contenttweaker/API/block/basic/BlockBuilderBasic/#build) このビルダーは、設定する特別なプロパティを提供しません。ビルドすることしかできません。

このクラスは mod-id `contenttweaker` を持つ mod によって追加されました。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
mods.contenttweaker.block.basic.BlockBuilderBasic
```

## 実装されたインターフェース
BlockBuilderBasicは以下のインターフェースを実装しています。 つまり、これらのクラスで使用できるすべてのメソッドをこのクラスで使用することができます。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.blockBlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## メソッド
### ビルド

このビルダーが構築されると思われるものは何でも実際に構築するようCoTに指示します。

```zenscript
new BlockBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new BlockBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| パラメータ   | タイプ  | 説明               |
| ------- | ---- | ---------------- |
| リソースの場所 | 文字列型 | このブロックを与えるリソースパス |



