# アイテム変換

アイテムトランスフォーマーはクラフト時にクラフトインプットを変身させます。  
アイテムにダメージを与えることから、全く別のアイテムを返すことまでの範囲があります。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.item.IItemTransformer;`

```zenscript
<br />val item = <minecraft:apple>;

//Item won't be consumed and will stay in the grid
transformedItem = item.reuse();

//Item won't be consumed and the whole stack will be given back to you (does /give).
transformedItem = item.giveBack();

//アイテムは消費されますが、指定されたスタックはあなたに与えられます (クラフトスロットはクリアされます)。
transformedItem = item.giveBack(<minecraft:potato>);

//item will be replaced with the specified item, which will instead go to the crafting slot
transformedItem = item.transformReplace(<minecraft:potato>);

//damages the item by 1
transformedItem = item.transformDamage();

//damages the item by the given value
transformedItem = item.transformDamage(3);

//item will be consumed, no matter what.
transformedItem = item.noReturn();

///複数のアイテムを消費します。
transformedItem = item.transformConsume(3);
```

## 独自のアイテム変換器を登録

### 変換

1.13には存在しなくなる可能性がある古いitemTransformer。  
これは、2つのパラメータを受け入れる特別な関数です。 [アイテム](/Vanilla/Items/IItemStack/) 自体と、 [プレイヤー](/Vanilla/Players/IPlayer/) がクラフトを行います。

```zenscript
transformedItem = item.transform(function(item, player) {return item;});
```

関数は [IItemStack](/Vanilla/Items/IItemStack/)を返す必要があります。  
このスタックはその後、クラフトスロットにあるものを置き換えます。 スロットをクリアするには、 `null` を使用します。

### 新しい変換

新しい内部レシピシステムでは、新しいItemTransformerが必要でした。 これは、スロット内の項目である、一つのパラメータのみを受け付けます。

```zenscript
transformedItem = item.transformNew(function(item){return item;});
```

The function needs to return an [IItemStack](/Vanilla/Items/IItemStack/).  
Unlike the other transformer however, this will not be the itemstach that replaces the one in the crafting slot, but the one that is returned for that crafting slot.  
In other words if you return `null` here, one item will be consumed, any other item that is returned will either be placed in the crafting slot, if possible, or given back to you, same as when dealing with buckets.  
If you don't really need the player variable, this is the transformer to go for!