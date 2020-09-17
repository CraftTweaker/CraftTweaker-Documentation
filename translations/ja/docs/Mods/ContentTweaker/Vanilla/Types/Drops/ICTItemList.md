# ICTItemList

The ICTItemList is what an [IBlockDropHandler](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockDropHandler/) uses as first parameter.  
It is a list of items that will be dropped by the given [Block](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/).  
Depending on other event handlers active it might already contain some items, or it might be empty.

## クラスのインポート

このクラスをインポートする必要がある場合は、次のようにします。

```zenscript
import mods.contenttweaker.ItemList;
```

## リストにアイテムを追加する

以下の関数を使用して、 [IItemStacks](/Vanilla/Items/IItemStack/) または [WeightedItemStacks](/Vanilla/Items/WeightedItemStack/) をリストに追加できます:

```zenscript
list.add(<minecraft:carrot>);

list + <minecraft:carrot>;

list.add(<minecraft:seeds> % 10);

list + (<minecraft:seeds> % 10);
```

## リストから項目を削除中

項目のインデックスを使用してのみ項目を削除するか、リスト全体を削除することができます。

```zenscript
list.remove(1);

list.clear();
```

## リストからアイテムを取得しています

インデックスでアイテムを取得するか、リスト全体を配列またはリストとして取得できます:

```zenscript
import crafttweaker.item.IItemStack;

val itemAt = list.get(0); ///as IItemStack

val itemArray = list.getArray(); //as IItemStack[]

val itemList = list.getList(); ///as [IItemStack]
```

## その他の情報

リストからこの情報を取り戻すこともできます:

```zenscript
list.getLength();
```