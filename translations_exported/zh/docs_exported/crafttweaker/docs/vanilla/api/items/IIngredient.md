# 材料（IIngredient）

This is IIngredient!!!

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.item.IIngredient
```

## 已实现的接口
IIngredient implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## 方法
### anyDamage

返回类型： [craftbiner.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[craftbiner.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.任何损害();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<tag:ingotIron>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| 参数    | 类型                                                                | 描述                                        |
| ----- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return type: boolean

```zenscript
<tag:ingotIron>.matches(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.matches(<item:minecraft:iron_ingot>);
```

| 参数    | 类型                                                                | 描述                 |
| ----- | ----------------------------------------------------------------- | ------------------ |
| stack | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |



Does the given stack match the ingredient?

Return type: boolean

```zenscript
<tag:ingotIron>.matches(堆栈为craftbiner.api.item.IItemStack, 忽略了伤害作为布尔值);
```

| 参数    | 类型                                                                | 描述                 |
| ----- | ----------------------------------------------------------------- | ------------------ |
| stack | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |
| 忽略伤害  | boolean                                                           | 是否检查损坏？            |


### onlyDamaged

返回类型： [craftbiner.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[craftbiner.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.onlyDamaged();
```

### onlyIf

返回类型： [craftbiner.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[craftbiner.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| 参数       | 类型                                                                                       | 描述                      | 可选的   | Default Value |
| -------- | ---------------------------------------------------------------------------------------- | ----------------------- | ----- | ------------- |
| uid      | String                                                                                   | No description provided | false | `null`        |
| function | 预测&lt;[craftminstrer.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | No description provided | true  | `null`        |



## 参数

| 名称            | 类型                                                                  | 可获得  | 可设置   |
| ------------- | ------------------------------------------------------------------- | ---- | ----- |
| commandString | String                                                              | true | false |
| items         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true | false |

## 运算符
### 或

```zenscript
<tag:ingotIron> | 其他为 craftbiner.api.item.IIngredient
```

| 参数    | 类型                                                                  | 描述                      |
| ----- | ------------------------------------------------------------------- | ----------------------- |
| other | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No description provided |

## Casters

| 结果类型                                                        | 是否隐藏 |
| ----------------------------------------------------------- | ---- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)      | true |
| [craftminstrer.api.data.MapData](/vanilla/api/data/MapData) | true |

