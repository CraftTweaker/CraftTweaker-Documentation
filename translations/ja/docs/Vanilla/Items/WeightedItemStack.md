# WeightedItemStack

A Weighted Item Stack is like a normal [IItemStack](/Vanilla/Items/IItemStack/) but has a percentage added to it.  
You normally use them when dealing with percentage based actions like drops or secondary outputs.

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.item.WeightedItemStack;`

## weightedItemStack の呼び出し

weightedItemStack を [IItemStack](/Vanilla/Items/IItemStack/) から派生するには、モジュロ演算子または重み関数を使用します。

```zenscript
val itemStack = <minecraft:dirt>;

//both create a weightedItemstack object with a chance of 20%
val wItemStack = itemStack % 20;
val wItemStack2 = itemStack.weight(0.2);
```

## ZenGetters

| ZenGetter | 何をするか                      | Return Type                              |
| --------- | -------------------------- | ---------------------------------------- |
| スタック      | 関連するアイテムスタックを返します          | [IItemStack](/Vanilla/Items/IItemStack/) |
| チャンス      | スタックの確率を小数で返します(例: 0.2)    | float型                                   |
| パーセント     | スタックの確率をパーセントで返します（例：20.0） | float型                                   |