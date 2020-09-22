# MCWeightedItemStack

一个带有机会的物品堆栈，通常用于配方输出。 <p> 小心，如果用来创建权重堆的堆栈是可变的，那么尺寸设置也会变换原始堆栈！

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
制作工具.api.item.MCweightedItemStack
```

## 已实现的接口
MCweightedItemStack 实现以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructor #构造函数
手动创建重量物品。 通常您可以使用运营商或 `.权重(权重)` 方法，尽管是
```zenscript
新手工艺,api.item.MCweightedItemStack(itemStack as craftbiner.api.item.IItemStack, 权重双倍);
新手工艺.api.item.MCweightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| 参数   | 类型                                                                | 描述                        |
| ---- | ----------------------------------------------------------------- | ------------------------- |
| 物品应用 | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 堆栈：                       |
| 权重   | 双精度                                                               | 机会介于 0 (0%) 和 1 (100%) 之间 |



## 方法
### 权重

用给定的重量创建一个新的重量堆栈。

 返回： `一个新的重量物品栈`

返回类型： [craftbiner.api.item.MCweightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:bedrock>.weect(0.5D).权重(双重量)；
<item:minecraft:bedrock>.权重(0.5D).权重(0.75D)；
```

| 参数  | 类型  | 描述  |
| --- | --- | --- |
| 新权重 | 双精度 | 百分比 |



## 参数

| 名称                   | 类型                                                                | 可获得  | 可设置   |
| -------------------- | ----------------------------------------------------------------- | ---- | ----- |
| commandString #命令字符串 | 字符串[string]                                                       | true | false |
| 堆栈...                | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | true | false |
| 权重                   | 双精度                                                               | true | false |

## 运算符
### MUL

设置项目堆栈的金额。 <p> 如果原始堆栈可变，也会改变原始堆栈的大小。

 返回： `一个新的重量物品栈`

```zenscript
<item:minecraft:bedrock>.权重(0.5D) * 新金额为int
<item:minecraft:bedrock>.权重(0.5D) * 5
```

| 参数  | 类型 | 描述    |
| --- | -- | ----- |
| 新金额 | 整数 | 新堆栈大小 |
### MOD

使用给定的百分比创建一个新的加权堆栈。

 返回： `一个新的重量物品栈`

```zenscript
<item:minecraft:bedrock>.权重(0.5D) % 新重量为int
<item:minecraft:bedrock>.权重(0.5D) % 75
```

| 参数  | 类型 | 描述  |
| --- | -- | --- |
| 新权重 | 整数 | 百分比 |

