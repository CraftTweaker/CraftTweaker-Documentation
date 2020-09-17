# 成分列表

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
制造商.api.item.IngredientList
```

## 已实现的接口
IngredientList 实现以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [制造商.api.item.IIngredient](/vanilla/api/items/IIngredient)

## 方法
### 任何伤害

返回类型： [craftbiner.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[craftbiner.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
空.任何损害();
```

### getRemainingitem

当这种成分堆栈被制造时，网格中还会有什么东西？ 不检查堆栈是否匹配！ 用于Ctrt's net.minecraft.item.crafting.ICraftingRecipe

返回类型： [craftbiner.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
null.getRemainingItem(stack as craftbiner.api.item.IItemStack);
null.getRemainingItem(<item:minecraft:iron_ingot>);
```

| 参数    | 类型                                                                | 描述         |
| ----- | ----------------------------------------------------------------- | ---------- |
| 堆栈... | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 提供这种成分的堆栈。 |


### 匹配

给定的堆栈是否与原料相符？

返回类型：布尔值

```zenscript
null.matches(堆栈为 craftbiner.api.item.IItemStack)；
null.matches(<item:minecraft:iron_ingot>)；
```

| 参数    | 类型                                                                | 描述      |
| ----- | ----------------------------------------------------------------- | ------- |
| 堆栈... | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 要检查的堆栈。 |



给定的堆栈是否与原料相符？

返回类型：布尔值

```zenscript
null.matches(堆栈为 craftminstrer.api.item.IItemStack, 忽略损害为 boolean);
```

| 参数    | 类型                                                                | 描述      |
| ----- | ----------------------------------------------------------------- | ------- |
| 堆栈... | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 要检查的堆栈。 |
| 忽略伤害  | boolean                                                           | 是否检查损坏？ |


### 仅已损坏

返回类型： [craftbiner.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[craftbiner.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyDamaged();
```

### onlyIf

返回类型： [craftbiner.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[craftbiner.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| 参数  | 类型                                                                                       | 描述                      | 可选的   | 默认值  |
| --- | ---------------------------------------------------------------------------------------- | ----------------------- | ----- | ---- |
| uid | 字符串[string]                                                                              | No description provided | false | `空的` |
| 函数  | 预测&lt;[craftminstrer.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | No description provided | true  | `空的` |



## 参数

| 名称                   | 类型                                                                  | 可获得  | 可设置   |
| -------------------- | ------------------------------------------------------------------- | ---- | ----- |
| commandString #命令字符串 | 字符串[string]                                                         | true | false |
| 项目                   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true | false |

## 运算符
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

