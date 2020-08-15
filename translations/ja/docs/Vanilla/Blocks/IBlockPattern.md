# IBlockPattern

IBlockPattern は、1 つのオブジェクトに複数のブロックを組み合わせることができるインターフェイスです。  
[IIngredient](/Vanilla/Variable_Types/IIngredient/) インターフェイスが [IItemStacks](/Vanilla/Items/IItemStack/) に匹敵します。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlockPattern;`

## IBlockPattern オブジェクトの呼び出し

Technically, each time you call an [IBlock](/Vanilla/Blocks/IBlock/) object, you call an IBlockPattern object.  
But there are cases when you explicitly get an IBlockPattern Object as return.

* または 2つの [IBlocks](/Vanilla/Blocks/IBlock/)

## ZenGetters

| ZenGetter   | 何をするか                        | Return Type                             |
| ----------- | ---------------------------- | --------------------------------------- |
| ブロック        | このオブジェクトの可能なすべてのブロックを一覧表示します | List<[IBlock](/Vanilla/Blocks/IBlock/)> |
| displayName | 該当ブロックの表示名を返します。             | 文字列                                     |

## OR

OR `|` 演算子を使用して IBlockPattern オブジェクトを 2 つまたは

## 一致

You can check if an IBlockPatternObject contains another using the `in` keyword.  
For example, you could check if a Block is in an IBlockPattern.