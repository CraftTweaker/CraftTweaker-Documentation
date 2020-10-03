# IItemStack

This represents an item. It can be retrieved using an Item BEP. Is an [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.item.IItemStack
```

## 已实现的接口
IItemStack implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## 方法
### addShiftTooltip

```zenscript
<item:minecraft:dirt>.addShiftTooltip(内容为craftbiner.api.util.text.MCTextComponent, showmessage as craftbiner.api.util.text.MCTextComponent);
```

| 参数   | 类型                                                                            | 描述                      | 可选的   | Default Value |
| ---- | ----------------------------------------------------------------------------- | ----------------------- | ----- | ------------- |
| 内容   | [craftbinvest.api.util.text.MCText组件](/vanilla/api/util/text/MCTextComponent) | No description provided | false | `null`        |
| 显示消息 | [craftbinvest.api.util.text.MCText组件](/vanilla/api/util/text/MCTextComponent) | No description provided | true  | `null`        |


### addTooltip

```zenscript
<item:minecraft:dirt>.addTooltip(内容为craftbiner.api.util.text.MCTextComponent);
```

| 参数 | 类型                                                                            | 描述                      |
| -- | ----------------------------------------------------------------------------- | ----------------------- |
| 内容 | [craftbinvest.api.util.text.MCText组件](/vanilla/api/util/text/MCTextComponent) | No description provided |


### anyDamage

返回类型： [craftbiner.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[craftbiner.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.任何损害();
```

### clearCustomName

Clears any custom name set for this ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### clearTooltip

```zenscript
<item:minecraft:dirt>.clearTooltip();
```

### copy #复制

创建副本

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.copy();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| 参数    | 类型                                                                | 描述                                        |
| ----- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return type: boolean

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| 参数    | 类型                                                                | 描述                 |
| ----- | ----------------------------------------------------------------- | ------------------ |
| stack | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |



Does the given stack match the ingredient?

Return type: boolean

```zenscript
<item:minecraft:dirt>.matches(堆栈为craftbiner.api.item.IItemStack, 忽略了伤害作为布尔值);
```

| 参数    | 类型                                                                | 描述                 |
| ----- | ----------------------------------------------------------------- | ------------------ |
| stack | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |
| 忽略伤害  | boolean                                                           | 是否检查损坏？            |


### modifyTooltip

```zenscript
<item:minecraft:dirt>.modifyTooltip(function as craftbiner.api.item.tooltip.ITooltipFunction);
```

| 参数       | 类型                                                                                              | 描述                      |
| -------- | ----------------------------------------------------------------------------------------------- | ----------------------- |
| function | [craftbiner.api.item.tooltip.ITooltipfunction](/crafttweaker/api/item/tooltip/ITooltipFunction) | No description provided |


### 可变的

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.mutable();
```

### onlyDamaged

返回类型： [craftbiner.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[craftbiner.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyDamaged();
```

### onlyIf

返回类型： [craftbiner.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[craftbiner.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| 参数       | 类型                                                                                       | 描述                      | 可选的   | Default Value |
| -------- | ---------------------------------------------------------------------------------------- | ----------------------- | ----- | ------------- |
| uid      | String                                                                                   | No description provided | false | `null`        |
| function | 预测&lt;[craftminstrer.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | No description provided | true  | `null`        |


### removeTooltip

```zenscript
<item:minecraft:dirt>.removeTooltip(regex as String);
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| regex | String | No description provided |


### setDisplayName

Sets the display name of the ItemStack

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(name as String);
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| 参数   | 类型     | 描述                     |
| ---- | ------ | ---------------------- |
| name | String | New name of the stack. |


### weight

返回类型： [craftbiner.api.item.MCweightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:dirt>.重量(重量为双倍)；
```

| 参数     | 类型     | 描述                      |
| ------ | ------ | ----------------------- |
| weight | double | No description provided |


### withDamage

Sets the damage of the ItemStack

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| 参数     | 类型  | 描述                   |
| ------ | --- | -------------------- |
| damage | int | the new damage value |


### withTag

Sets the tag for the ItemStack.

 返回： `这个物品堆栈如果是可变的，一个新的物品，且属性已改变`

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| 参数  | 类型                                                     | 描述              |
| --- | ------------------------------------------------------ | --------------- |
| tag | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The tag to set. |



## 参数

| 名称             | 类型                                                                  | 可获得  | 可设置   |
| -------------- | ------------------------------------------------------------------- | ---- | ----- |
| amount         | int                                                                 | true | false |
| burnTime       | int                                                                 | true | true  |
| commandString  | String                                                              | true | false |
| damage         | int                                                                 | true | false |
| damageable     | boolean                                                             | true | false |
| damaged        | boolean                                                             | true | false |
| displayName    | String                                                              | true | false |
| empty          | boolean                                                             | true | false |
| food           | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | true | true  |
| getOrCreate    | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true | false |
| getRepairCost  | int                                                                 | true | false |
| hasDisplayName | boolean                                                             | true | false |
| hasEffect      | boolean                                                             | true | false |
| hasTag         | boolean                                                             | true | false |
| isCrossbow     | boolean                                                             | true | false |
| isEnchantable  | boolean                                                             | true | false |
| isEnchanted    | boolean                                                             | true | false |
| items          | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true | false |
| maxDamage      | int                                                                 | true | false |
| maxStackSize   | int                                                                 | true | false |
| owner          | String                                                              | true | false |
| registryName   | String                                                              | true | false |
| stackable      | boolean                                                             | true | false |
| tag            | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true | false |
| translationKey | String                                                              | true | false |
| useDuration    | int                                                                 | true | false |

## 运算符
### MUL

Sets the amount of the ItemStack

```zenscript
<item:minecraft:dirt> * amount as int
<item:minecraft:dirt> * 3
```

| 参数     | 类型  | 描述         |
| ------ | --- | ---------- |
| amount | int | new amount |
### MOD

```zenscript
<item:minecraft:dirt> % 整流百分比
```

| 参数  | 类型  | 描述                      |
| --- | --- | ----------------------- |
| 百分比 | int | No description provided |
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

