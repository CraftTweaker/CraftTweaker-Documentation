# WeightedLiquidStack

A Weighted Liquid Stack is like a normal [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) but has a percentage added to it.  
You normally use them when dealing with percentage based actions like drops or secondary outputs.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.item.WeightedLiquidStack;`

## Calling a weightedLiquidStack

You can derive a weightedLiquidStack from an [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) by either using the modulo operator or the weight function on it.

```zenscript
val liquidStack = <liquid:lava>;

//both create a weightedLiquidstack object with a chance of 20%
val wLiquidStack = liquidStack % 20;
val wLiquidStack2 = liquidStack.weight(0.2);
```

## ZenGetters

| ZenGetter | 功能                                 | 返回值类型                                          |
| --------- | ---------------------------------- | ---------------------------------------------- |
| 堆栈...     | Returns the associated LiquidStack | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) |
| 几率：       | 返回堆栈的机会为小数 (例如0.2)                 | 浮点数                                            |
| 百分比       | 返回堆栈的几率为百分比 (例如, 20.0)             | float                                          |