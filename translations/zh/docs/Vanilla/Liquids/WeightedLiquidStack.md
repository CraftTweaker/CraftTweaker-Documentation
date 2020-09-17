# 重量LiquidStack

重量液体堆栈就像普通的 [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) ，但是有一个百分比添加到它。  
您通常在处理基于百分比的动作时使用它们，如掉落或次要输出。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftminstruer.item.weightedLiquidStack；`

## 调用一个重量的LiquidStack

您可以通过使用模块操作员或其重量函数从 [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 中得出一个重量LiquidStack 。

```zenscript
val liquidStack = <liquid:lava>;

///bot均创建一个重量液体堆栈对象，几率为20%
val wLiquidStack = 液体堆栈% 20；
val wLiquidStack2 = 液体堆栈。 8t(0.2)；
```

## ZenGetters

| ZenGetter | 功能                     | 返回值类型                                          |
| --------- | ---------------------- | ---------------------------------------------- |
| 堆栈...     | 返回关联的 LiquidStack      | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) |
| 几率：       | 返回堆栈的机会为小数 (例如0.2)     | 浮点数                                            |
| 百分比       | 返回堆栈的几率为百分比 (例如, 20.0) | float                                          |