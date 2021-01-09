# MCWeightedItemStack

一个带有机会的物品堆栈，通常用于配方输出。 <p> 小心，如果用来创建权重堆的堆栈是可变的，那么尺寸设置也会变换原始堆栈！

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCWeightedItemStack;
```


## 已实现的接口
MCweightedItemStack 实现以下接口。 That means all methods defined in these interfaces are also available in MCWeightedItemStack

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/brackets/CommandStringDisplayable)
## Constructor #构造函数

手动创建重量物品。 通常您可以使用运营商或 `.权重(权重)` 方法，尽管是
```zenscript
new MCWeightedItemStack(itemStack as IItemStack, weight as double) as MCWeightedItemStack
new MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| 参数     | 类型                                          | 描述                        |
| ------ | ------------------------------------------- | ------------------------- |
| 物品应用   | [IItemStack](/vanilla/api/items/IItemStack) | 堆栈：                       |
| weight | double                                      | 机会介于 0 (0%) 和 1 (100%) 之间 |


## 方法

### weight

用给定的重量创建一个新的重量堆栈。

Return Type: [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
MCWeightedItemStack.weight(newWeight as double) as MCWeightedItemStack
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```
| 参数  | 类型     | 描述  |
| --- | ------ | --- |
| 新权重 | double | 百分比 |


## 运算符

### MOD

Creates a new Weighted Stack with the given percentage

```zenscript
myMCWeightedItemStack % newWeight as int
<item:minecraft:bedrock>.weight(0.5D) % 75
```


### MUL

设置项目堆栈的金额。 <p> 如果原始堆栈可变，也会改变原始堆栈的大小。

```zenscript
myMCWeightedItemStack * newAmount as int
<item:minecraft:bedrock>.weight(0.5D) * 5
```



## 参数

| 名称     | 类型                                          | 可获得  | 可设置   |
| ------ | ------------------------------------------- | ---- | ----- |
| stack  | [IItemStack](/vanilla/api/items/IItemStack) | true | false |
| weight | double                                      | true | false |

