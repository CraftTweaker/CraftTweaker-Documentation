# 材料（IIngredient）

This is IIngredient!!!

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.IIngredient;
```


## 已实现的接口
IIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in IIngredient

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/brackets/CommandStringDisplayable)

## Casters

| 结果类型                                       | 是否隐藏 |
| ------------------------------------------ | ---- |
| [IData](/vanilla/api/data/IData)           | true |
| [Ingredient](/vanilla/api/item/Ingredient) | true |
| [MapData #地图数据](/vanilla/api/data/MapData) | true |

## 方法

:::group{name=addShiftTooltip}

Return Type: void

```zenscript
IIngredient.addShiftTooltip(content as MCTextComponent, showMessage as MCTextComponent) as void
```

| 参数          | 类型                                                 | 描述                      | 可选    | DefaultValue |
| ----------- | -------------------------------------------------- | ----------------------- | ----- | ------------ |
| 内容          | [MCText组件](/vanilla/api/util/text/MCTextComponent) | No Description Provided | false |              |
| showMessage | [MCText组件](/vanilla/api/util/text/MCTextComponent) | No Description Provided | true  |              |

:::

:::group{name=addTooltip}

Return Type: void

```zenscript
IIngredient.addTooltip(content as MCTextComponent) as void
```

| 参数 | 类型                                                 | 描述                      |
| -- | -------------------------------------------------- | ----------------------- |
| 内容 | [MCText组件](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


:::

:::group{name=anyDamage}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.anyDamage() as MCIngredientConditioned<IIngredient>
<tag:items:forge:ingots>.anyDamage();
```

:::

:::group{name=asVanillaIngredient}

Create a Vanilla ingredient matching this one.

Return Type: [Ingredient](/vanilla/api/item/Ingredient)

```zenscript
IIngredient.asVanillaIngredient() as Ingredient
<tag:items:forge:ingots>.asVanillaIngredient();
```

:::

:::group{name=clearTooltip}

Return Type: void

```zenscript
IIngredient.clearTooltip() as void
<tag:items:forge:ingots>.clearTooltip();
```

:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
IIngredient.contains(ingredient as IIngredient) as boolean
<tag:items:forge:ingots>.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| 参数         | 类型                                                | 描述                      |
| ---------- | ------------------------------------------------- | ----------------------- |
| ingredient | [材料（IIngredient）](/vanilla/api/items/IIngredient) | The ingredient to check |


:::

:::group{name=getRemainingItem}

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IIngredient.getRemainingItem(stack as IItemStack) as IItemStack
<tag:items:forge:ingots>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| 参数    | 类型                                          | 描述                                        |
| ----- | ------------------------------------------- | ----------------------------------------- |
| stack | [IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
IIngredient.matches(stack as IItemStack) as boolean
<tag:items:forge:ingots>.matches(<item:minecraft:iron_ingot>);
```

| 参数    | 类型                                          | 描述                 |
| ----- | ------------------------------------------- | ------------------ |
| stack | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
IIngredient.matches(stack as IItemStack, ignoreDamage as boolean) as boolean
```

| 参数    | 类型                                          | 描述                        |
| ----- | ------------------------------------------- | ------------------------- |
| stack | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check        |
| 忽略伤害  | boolean                                     | Should damage be checked? |


:::

:::group{name=modifyTooltip}

Return Type: void

```zenscript
IIngredient.modifyTooltip(function as ITooltipFunction) as void
```

| 参数       | 类型                                                      | 描述                      |
| -------- | ------------------------------------------------------- | ----------------------- |
| function | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided |


:::

:::group{name=only}

Use this if you already have the condition from another ingredient

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.only(condition as IIngredientCondition<IIngredient>) as MCIngredientConditioned<IIngredient>
```

| 参数        | 类型                                                                                                                               | 描述                      |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| condition | [IIngredientCondition](/vanilla/api/items/IIngredientCondition)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | No Description Provided |


:::

:::group{name=onlyDamaged}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.onlyDamaged() as MCIngredientConditioned<IIngredient>
<tag:items:forge:ingots>.onlyDamaged();
```

:::

:::group{name=onlyIf}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.onlyIf(uid as string, function as Predicate<IItemStack>) as MCIngredientConditioned<IIngredient>
```

| 参数       | 类型                                                                       | 描述                      | 可选    | DefaultValue |
| -------- | ------------------------------------------------------------------------ | ----------------------- | ----- | ------------ |
| uid      | string                                                                   | No Description Provided | false |              |
| function | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true  |              |

:::

:::group{name=removeTooltip}

Return Type: void

```zenscript
IIngredient.removeTooltip(regex as string) as void
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| regex | string | No Description Provided |


:::


## 运算符

:::group{name=CONTAINS}

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myIIngredient
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in <tag:items:forge:ingots>
```

:::

:::group{name=OR}

```zenscript
myIIngredient | other as IIngredient
```

:::


## 参数

| 名称            | 类型                                            | 可获得   | 可设置   |
| ------------- | --------------------------------------------- | ----- | ----- |
| burnTime      | void                                          | false | true  |
| commandString | string                                        | true  | false |
| items         | [IItemStack](/vanilla/api/items/IItemStack)[] | true  | false |

