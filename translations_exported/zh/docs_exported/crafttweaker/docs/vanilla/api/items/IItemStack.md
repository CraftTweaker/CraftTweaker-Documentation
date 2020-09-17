# IItemStack

这是一个项目。 它可以使用 BEP进行检索。 是 [craftbiner.api.item.IIngredient](/vanilla/api/items/IIngredient)

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.item.IItemStack
```

## 已实现的接口
IItemStack 实现以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [制造商.api.item.IIngredient](/vanilla/api/items/IIngredient)

## 方法
### addShiftTooltip

```zenscript
<item:minecraft:dirt>.addShiftTooltip(内容为craftbiner.api.util.text.MCTextComponent, showmessage as craftbiner.api.util.text.MCTextComponent);
```

| 参数   | 类型                                                                            | 描述                      | 可选的   | 默认值  |
| ---- | ----------------------------------------------------------------------------- | ----------------------- | ----- | ---- |
| 内容   | [craftbinvest.api.util.text.MCText组件](/vanilla/api/util/text/MCTextComponent) | No description provided | false | `空的` |
| 显示消息 | [craftbinvest.api.util.text.MCText组件](/vanilla/api/util/text/MCTextComponent) | No description provided | true  | `空的` |


### addTooltip

```zenscript
<item:minecraft:dirt>.addTooltip(内容为craftbiner.api.util.text.MCTextComponent);
```

| 参数 | 类型                                                                            | 描述                      |
| -- | ----------------------------------------------------------------------------- | ----------------------- |
| 内容 | [craftbinvest.api.util.text.MCText组件](/vanilla/api/util/text/MCTextComponent) | No description provided |


### 任何伤害

返回类型： [craftbiner.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[craftbiner.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.任何损害();
```

### 清除自定义名称

清除此项目的自定义名称

```zenscript
<item:minecraft:dirt>.clear CustomName();
```

### clearTooltip

```zenscript
<item:minecraft:dirt>.clearTooltip();
```

### copy #复制

创建副本

返回类型： [craftbiner.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.copy();
```

### getRemainingitem

当这种成分堆栈被制造时，网格中还会有什么东西？ 不检查堆栈是否匹配！ 用于Ctrt's net.minecraft.item.crafting.ICraftingRecipe

返回类型： [craftbiner.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(堆栈为 craftbiner.api.item.IItemStack)；
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| 参数    | 类型                                                                | 描述         |
| ----- | ----------------------------------------------------------------- | ---------- |
| 堆栈... | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 提供这种成分的堆栈。 |


### 匹配

给定的堆栈是否与原料相符？

返回类型：布尔值

```zenscript
<item:minecraft:dirt>.matches(堆栈为craftbiner.api.item.IItemStack)；
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| 参数    | 类型                                                                | 描述      |
| ----- | ----------------------------------------------------------------- | ------- |
| 堆栈... | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 要检查的堆栈。 |



给定的堆栈是否与原料相符？

返回类型：布尔值

```zenscript
<item:minecraft:dirt>.matches(堆栈为craftbiner.api.item.IItemStack, 忽略了伤害作为布尔值);
```

| 参数    | 类型                                                                | 描述      |
| ----- | ----------------------------------------------------------------- | ------- |
| 堆栈... | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 要检查的堆栈。 |
| 忽略伤害  | boolean                                                           | 是否检查损坏？ |


### modifyTooltip

```zenscript
<item:minecraft:dirt>.modifyTooltip(function as craftbiner.api.item.tooltip.ITooltipFunction);
```

| 参数 | 类型                                                                                              | 描述                      |
| -- | ----------------------------------------------------------------------------------------------- | ----------------------- |
| 函数 | [craftbiner.api.item.tooltip.ITooltipfunction](/crafttweaker/api/item/tooltip/ITooltipFunction) | No description provided |


### 可变的

返回类型： [craftbiner.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.mutable();
```

### 仅已损坏

返回类型： [craftbiner.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[craftbiner.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyDamaged();
```

### onlyIf

返回类型： [craftbiner.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[craftbiner.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| 参数  | 类型                                                                                       | 描述                      | 可选的   | 默认值  |
| --- | ---------------------------------------------------------------------------------------- | ----------------------- | ----- | ---- |
| uid | 字符串[string]                                                                              | No description provided | false | `空的` |
| 函数  | 预测&lt;[craftminstrer.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | No description provided | true  | `空的` |


### removeTooltip

```zenscript
<item:minecraft:dirt>.removeTooltip(regex as String);
```

| 参数    | 类型          | 描述                      |
| ----- | ----------- | ----------------------- |
| 正则表达式 | 字符串[string] | No description provided |


### setDisplayName

设置项目的显示名称

返回类型： [craftbiner.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(名称为字符串)；
<item:minecraft:dirt>.setDisplayName("完全不是肮脏")；
```

| 参数 | 类型          | 描述      |
| -- | ----------- | ------- |
| 名称 | 字符串[string] | 堆栈的新名称。 |


### 遭受伤害

设置物品的伤害

返回类型： [craftbiner.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withdamage(故意伤害)；
<item:minecraft:dirt>.withdamage(10)；
```

| 参数 | 类型 | 描述    |
| -- | -- | ----- |
| 伤害 | 整数 | 新的伤害值 |


### 使用标签

设置项目标签。

 返回： `这个物品堆栈如果是可变的，一个新的物品，且属性已改变`

返回类型： [craftbiner.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| 参数 | 类型                                                     | 描述      |
| -- | ------------------------------------------------------ | ------- |
| 标签 | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 要设置的标签。 |



## 参数

| 名称                   | 类型                                                                  | 可获得  | 可设置   |
| -------------------- | ------------------------------------------------------------------- | ---- | ----- |
| 金额                   | 整数                                                                  | true | false |
| 烧焦时间                 | 整数                                                                  | true | true  |
| commandString #命令字符串 | 字符串[string]                                                         | true | false |
| 伤害                   | 整数                                                                  | true | false |
| 可造成伤害                | boolean                                                             | true | false |
| 已损坏                  | boolean                                                             | true | false |
| 显示名称                 | 字符串[string]                                                         | true | false |
| 空的                   | boolean                                                             | true | false |
| 食物：                  | [craftminstrer.api.food.MCFood](/vanilla/api/food/MCFood)           | true | true  |
| getOrCreate          | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true | false |
| getRepairCost        | 整数                                                                  | true | false |
| hasDisplayName       | boolean                                                             | true | false |
| 哈斯特效                 | boolean                                                             | true | false |
| 哈斯塔克                 | boolean                                                             | true | false |
| isCrossbow           | boolean                                                             | true | false |
| isEnchangable        | boolean                                                             | true | false |
| 有附魔的                 | boolean                                                             | true | false |
| 项目                   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true | false |
| maxDamage            | 整数                                                                  | true | false |
| maxStackSize         | 整数                                                                  | true | false |
| 所有者                  | 字符串[string]                                                         | true | false |
| registryName         | 字符串[string]                                                         | true | false |
| 可堆叠的                 | boolean                                                             | true | false |
| 标签                   | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true | false |
| translationKey       | 字符串[string]                                                         | true | false |
| useDuration          | 整数                                                                  | true | false |

## 运算符
### MUL

设置项目的数量

```zenscript
<item:minecraft:dirt> * 数量为 int
<item:minecraft:dirt> * 3
```

| 参数 | 类型 | 描述  |
| -- | -- | --- |
| 金额 | 整数 | 新金额 |
### 或

```zenscript
<tag:ingotIron> | 其他为 craftbiner.api.item.IIngredient
```

| 参数    | 类型                                                         | 描述                      |
| ----- | ---------------------------------------------------------- | ----------------------- |
| other | [制造商.api.item.IIngredient](/vanilla/api/items/IIngredient) | No description provided |

## 卡斯特尔

| 结果类型                                                        | 是否隐藏 |
| ----------------------------------------------------------- | ---- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)      | true |
| [craftminstrer.api.data.MapData](/vanilla/api/data/MapData) | true |

