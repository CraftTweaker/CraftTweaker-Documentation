# 成分列表

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.IngredientList;
```


## 已实现的接口
IngredientList implements the following interfaces. That means all methods defined in these interfaces are also available in IngredientList

- [材料（IIngredient）](/vanilla/api/items/IIngredient)

## Constructor #构造函数

No Description Provided
```zenscript
new IngredientList(ingredients as IIngredient[]) as IngredientList
```

| 参数          | 类型                                              | 描述                      |
| ----------- | ----------------------------------------------- | ----------------------- |
| ingredients | [IIngredient](/vanilla/api/items/IIngredient)[] | No Description Provided |



## Casters

| 结果类型                                       | 是否隐藏 |
| ------------------------------------------ | ---- |
| [IData](/vanilla/api/data/IData)           | true |
| [MapData #地图数据](/vanilla/api/data/MapData) | true |

## 方法

:::group{name=addShiftTooltip}

Return Type: void

```zenscript
IngredientList.addShiftTooltip(content as MCTextComponent, showMessage as MCTextComponent) as void
```

| 参数          | 类型                                                 | 描述                      | 可选    | DefaultValue |
| ----------- | -------------------------------------------------- | ----------------------- | ----- | ------------ |
| 内容          | [MCText组件](/vanilla/api/util/text/MCTextComponent) | No Description Provided | false |              |
| showMessage | [MCText组件](/vanilla/api/util/text/MCTextComponent) | No Description Provided | true  |              |

:::

:::group{name=addTooltip}

Return Type: void

```zenscript
IngredientList.addTooltip(content as MCTextComponent) as void
```

| 参数 | 类型                                                 | 描述                      |
| -- | -------------------------------------------------- | ----------------------- |
| 内容 | [MCText组件](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


:::

:::group{name=anyDamage}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IngredientList.anyDamage() as MCIngredientConditioned<IIngredient>
myIngredientList.anyDamage();
```

:::

:::group{name=clearTooltip}

Return Type: void

```zenscript
IngredientList.clearTooltip() as void
myIngredientList.clearTooltip();
```

:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
IngredientList.contains(ingredient as IIngredient) as boolean
myIngredientList.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| 参数         | 类型                                                | 描述                      |
| ---------- | ------------------------------------------------- | ----------------------- |
| ingredient | [材料（IIngredient）](/vanilla/api/items/IIngredient) | The ingredient to check |


:::

:::group{name=getRemainingItem}

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IngredientList.getRemainingItem(stack as IItemStack) as IItemStack
myIngredientList.getRemainingItem(<item:minecraft:iron_ingot>);
```

| 参数    | 类型                                          | 描述                                        |
| ----- | ------------------------------------------- | ----------------------------------------- |
| stack | [IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
IngredientList.matches(stack as IItemStack) as boolean
myIngredientList.matches(<item:minecraft:iron_ingot>);
```

| 参数    | 类型                                          | 描述                 |
| ----- | ------------------------------------------- | ------------------ |
| stack | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


:::

:::group{name=modifyTooltip}

Return Type: void

```zenscript
IngredientList.modifyTooltip(function as ITooltipFunction) as void
```

| 参数       | 类型                                                      | 描述                      |
| -------- | ------------------------------------------------------- | ----------------------- |
| function | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided |


:::

:::group{name=only}

Use this if you already have the condition from another ingredient

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IngredientList.only(condition as IIngredientCondition<IIngredient>) as MCIngredientConditioned<IIngredient>
```

| 参数        | 类型                                                                                                                               | 描述                      |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| condition | [IIngredientCondition](/vanilla/api/items/IIngredientCondition)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | No Description Provided |


:::

:::group{name=onlyDamaged}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IngredientList.onlyDamaged() as MCIngredientConditioned<IIngredient>
myIngredientList.onlyDamaged();
```

:::

:::group{name=onlyIf}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IngredientList.onlyIf(uid as string, function as Predicate<IItemStack>) as MCIngredientConditioned<IIngredient>
```

| 参数       | 类型                                                                       | 描述                      | 可选    | DefaultValue |
| -------- | ------------------------------------------------------------------------ | ----------------------- | ----- | ------------ |
| uid      | string                                                                   | No Description Provided | false |              |
| function | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true  |              |

:::

:::group{name=removeTooltip}

Return Type: void

```zenscript
IngredientList.removeTooltip(regex as string) as void
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| regex | string | No Description Provided |


:::


## 运算符

:::group{name=CONTAINS}

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myIngredientList
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in myIngredientList
```

:::

:::group{name=OR}

```zenscript
myIngredientList | other as IIngredient
```

:::


## 参数

| 名称       | 类型   | 可获得   | 可设置  |
| -------- | ---- | ----- | ---- |
| burnTime | void | false | true |

