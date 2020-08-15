# 重量物品

加权项目堆栈就像普通的 [IItemStack](/Vanilla/Items/IItemStack/) ，但有一个百分比添加到它。  
您通常在处理基于百分比的动作时使用它们，如掉落或次要输出。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftminstruer.item.weightedItemStack；`

## 调用重量物品

您可以通过使用模块操作员或它上的重量函数从 [IItemStack](/Vanilla/Items/IItemStack/) 中获得一个重量项目。

```zenscript
val itemStack = <minecraft:dirt>;

///bot创建一个重量物品的对象，几率为20%
val wItemStack = itemStack % 20;
val wItemStack2 = itemStack。 8t(0.2)；
```

## ZenGetters

| ZenGetter | 功能                     | 返回值类型                                    |
| --------- | ---------------------- | ---------------------------------------- |
| 堆栈...     | 返回相关的物品堆栈。             | [IItemStack](/Vanilla/Items/IItemStack/) |
| 几率：       | 返回堆栈的机会为小数 (例如0.2)     | 浮点数                                      |
| 百分比       | 返回堆栈的几率为百分比 (例如, 20.0) | float                                    |