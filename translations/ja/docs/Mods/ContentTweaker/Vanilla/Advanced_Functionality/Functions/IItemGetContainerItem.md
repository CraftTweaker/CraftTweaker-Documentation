# IItemGetContainerItem

The IItemGetContainerItem function can be added to an [Item](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) and will run whenever the item is used as ingredient.  
It is used to determine, what will be left in the crafting slot, when the item is used as such.  
Think of buckets, for example: Each filled bucket has the empty bucket as containerItem, and when a filled bucket is crafted, you will end up with an empty one.  
This function can be used to calculate the containerItem, so you can go crazy with stuff like NBT-Tags or more.

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.IItemGetContainerItem;`

## パラメータ

IItemGetContainerItem は、以下のパラメータを持つ関数です。

- [IItemStack](/Vanilla/Items/IItemStack/) stack → 項目。

関数は、新しい [IItemStack](/Vanilla/Items/IItemStack/) オブジェクト、または null を返す必要があります。