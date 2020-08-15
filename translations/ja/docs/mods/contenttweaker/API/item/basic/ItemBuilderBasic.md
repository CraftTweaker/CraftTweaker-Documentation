# ItemBuilderBasic

The basic builder for items, also called by [mods.contenttweaker.item.basic.ItemBuilderBasic#build](/mods/contenttweaker/API/item/basic/ItemBuilderBasic/#build). Does not have any special properties, it exists.

This class was added by a mod with mod-id `contenttweaker`. 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
mods.contenttweaker.item.basic.ItemBuilderBasic
```

## Implemented Interfaces
ItemBuilderBasic implements the following interfaces. つまり、これらのクラスで使用できるすべてのメソッドをこのクラスで使用することができます。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## メソッド
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new ItemBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new ItemBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| パラメータ            | タイプ  | 説明                                   |
| ---------------- | ---- | ------------------------------------ |
| resourceLocation | 文字列型 | The resource path to give this block |



