# MCWeightedItemStack

一个带有机会的物品堆栈，通常用于配方输出。 <p> 小心，如果用来创建权重堆的堆栈是可变的，那么尺寸设置也会变换原始堆栈！

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCWeightedItemStack;
```


## 已实现的接口
MCWeightedItemStack implements the following interfaces. That means all methods defined in these interfaces are also available in MCWeightedItemStack

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/brackets/CommandStringDisplayable)

## Constructor #构造函数

Manually creates the weightedItemStack. Usually you can use the operator or `.weight(weight)` method of IItemStack, though
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

Creates a new Weighted Stack with the given weight

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

Sets the itemStack's amount. <p> If the original Stack was mutable, also mutates the original stack's size.

```zenscript
myMCWeightedItemStack * newAmount as int
<item:minecraft:bedrock>.weight(0.5D) * 5
```




## 参数

| 名称     | 类型                                          | 可获得  | 可设置   |
| ------ | ------------------------------------------- | ---- | ----- |
| stack  | [IItemStack](/vanilla/api/items/IItemStack) | true | false |
| weight | double                                      | true | false |

