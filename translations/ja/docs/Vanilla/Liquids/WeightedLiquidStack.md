# WeightedLiquidStack

A Weighted Liquid Stack is like a normal [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) but has a percentage added to it.  
You normally use them when dealing with percentage based actions like drops or secondary outputs.

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.item.WeightedLiquidStack;`

## weitedLiquidStackの呼び出し

weightedLiquidStack を [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) から派生するには、モジュロ演算子またはその上に重み関数を使用します。

```zenscript
val liquidStack = <liquid:lava>;

//both create a weightedLiquidstack object with a chance of 20%
val wLiquidStack = liquidStack % 20;
val wLiquidStack2 = liquidStack.weight(0.2);
```

## ZenGetters

| ZenGetter | 何をするか                      | Return Type                                    |
| --------- | -------------------------- | ---------------------------------------------- |
| スタック      | 関連する LiquidStack を返します。    | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) |
| チャンス      | スタックの確率を小数で返します(例: 0.2)    | float型                                         |
| パーセント     | スタックの確率をパーセントで返します（例：20.0） | float型                                         |