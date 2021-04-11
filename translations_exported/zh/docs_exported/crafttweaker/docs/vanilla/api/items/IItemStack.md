# IItemStack

This represents an item. It can be retrieved using an Item BEP. Is an [IIngredient](/vanilla/api/items/IIngredient)

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.IItemStack;
```


## 已实现的接口
IItemStack implements the following interfaces. That means all methods defined in these interfaces are also available in IItemStack

- [材料（IIngredient）](/vanilla/api/items/IIngredient)
- [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount)

## Casters

| 结果类型                                                              | 是否隐藏 |
| ----------------------------------------------------------------- | ---- |
| [IData](/vanilla/api/data/IData)                                  | true |
| [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount) | true |
| [Ingredient](/vanilla/api/item/Ingredient)                        | true |
| [物品应用](/vanilla/api/item/ItemStack)                               | true |
| [MapData #地图数据](/vanilla/api/data/MapData)                        | true |
| [MCItemDefinition](/vanilla/api/item/MCItemDefinition)            | true |
| [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)     | true |

## 方法

:::group{name=addShiftTooltip}

Return Type: void

```zenscript
IItemStack.addShiftTooltip(content as MCTextComponent, showMessage as MCTextComponent) as void
```

| 参数          | 类型                                                 | 描述                      | 可选    | DefaultValue |
| ----------- | -------------------------------------------------- | ----------------------- | ----- | ------------ |
| 内容          | [MCText组件](/vanilla/api/util/text/MCTextComponent) | No Description Provided | false |              |
| showMessage | [MCText组件](/vanilla/api/util/text/MCTextComponent) | No Description Provided | true  |              |

:::

:::group{name=addTooltip}

Return Type: void

```zenscript
IItemStack.addTooltip(content as MCTextComponent) as void
```

| 参数 | 类型                                                 | 描述                      |
| -- | -------------------------------------------------- | ----------------------- |
| 内容 | [MCText组件](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


:::

:::group{name=anyDamage}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IItemStack.anyDamage() as MCIngredientConditioned<IIngredient>
<item:minecraft:dirt>.anyDamage();
```

:::

:::group{name=asIIngredientWithAmount}

Return Type: [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount)

```zenscript
IItemStack.asIIngredientWithAmount() as IIngredientWithAmount
<item:minecraft:dirt>.asIIngredientWithAmount();
```

:::

:::group{name=asImmutable}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.asImmutable() as IItemStack
<item:minecraft:dirt>.asImmutable();
```

:::

:::group{name=asVanillaIngredient}

Create a Vanilla ingredient matching this one.

Return Type: [Ingredient](/vanilla/api/item/Ingredient)

```zenscript
IItemStack.asVanillaIngredient() as Ingredient
<item:minecraft:dirt>.asVanillaIngredient();
```

:::

:::group{name=clearCustomName}

Clears any custom name set for this ItemStack

Return Type: void

```zenscript
IItemStack.clearCustomName() as void
<item:minecraft:dirt>.clearCustomName();
```

:::

:::group{name=clearTooltip}

Return Type: void

```zenscript
IItemStack.clearTooltip() as void
<item:minecraft:dirt>.clearTooltip();
```

:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
IItemStack.contains(ingredient as IIngredient) as boolean
<item:minecraft:dirt>.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| 参数         | 类型                                                | 描述                      |
| ---------- | ------------------------------------------------- | ----------------------- |
| ingredient | [材料（IIngredient）](/vanilla/api/items/IIngredient) | The ingredient to check |


:::

:::group{name=copy}

Creates a copy

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.copy() as IItemStack
<item:minecraft:dirt>.copy();
```

:::

:::group{name=getDefinition}

Return Type: [MCItemDefinition](/vanilla/api/item/MCItemDefinition)

```zenscript
IItemStack.getDefinition() as MCItemDefinition
<item:minecraft:dirt>.getDefinition();
```

:::

:::group{name=getImmutableInternal}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
IItemStack.getImmutableInternal() as ItemStack
<item:minecraft:dirt>.getImmutableInternal();
```

:::

:::group{name=getInternal}

Gets the internal [ItemStack](/vanilla/api/item/ItemStack) for this IItemStack.

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
IItemStack.getInternal() as ItemStack
<item:minecraft:dirt>.getInternal();
```

:::

:::group{name=getRemainingItem}

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.getRemainingItem(stack as IItemStack) as IItemStack
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| 参数    | 类型                                          | 描述                                        |
| ----- | ------------------------------------------- | ----------------------------------------- |
| stack | [IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


:::

:::group{name=isFood}

Return Type: boolean

```zenscript
IItemStack.isFood() as boolean
<item:minecraft:dirt>.isFood();
```

:::

:::group{name=isImmutable}

Return Type: boolean

```zenscript
IItemStack.isImmutable() as boolean
<item:minecraft:dirt>.isImmutable();
```

:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
IItemStack.matches(stack as IItemStack) as boolean
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| 参数    | 类型                                          | 描述                 |
| ----- | ------------------------------------------- | ------------------ |
| stack | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


:::

:::group{name=modifyTooltip}

Return Type: void

```zenscript
IItemStack.modifyTooltip(function as ITooltipFunction) as void
```

| 参数       | 类型                                                      | 描述                      |
| -------- | ------------------------------------------------------- | ----------------------- |
| function | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided |


:::

:::group{name=mutable}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.mutable() as IItemStack
<item:minecraft:dirt>.mutable();
```

:::

:::group{name=only}

Use this if you already have the condition from another ingredient

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IItemStack.only(condition as IIngredientCondition<IIngredient>) as MCIngredientConditioned<IIngredient>
```

| 参数        | 类型                                                                                                                               | 描述                      |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| condition | [IIngredientCondition](/vanilla/api/items/IIngredientCondition)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | No Description Provided |


:::

:::group{name=onlyDamaged}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IItemStack.onlyDamaged() as MCIngredientConditioned<IIngredient>
<item:minecraft:dirt>.onlyDamaged();
```

:::

:::group{name=onlyIf}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IItemStack.onlyIf(uid as string, function as Predicate<IItemStack>) as MCIngredientConditioned<IIngredient>
```

| 参数       | 类型                                                                       | 描述                      | 可选    | DefaultValue |
| -------- | ------------------------------------------------------------------------ | ----------------------- | ----- | ------------ |
| uid      | string                                                                   | No Description Provided | false |              |
| function | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true  |              |

:::

:::group{name=removeTooltip}

Return Type: void

```zenscript
IItemStack.removeTooltip(regex as string) as void
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| regex | string | No Description Provided |


:::

:::group{name=setDisplayName}

Sets the display name of the ItemStack

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.setDisplayName(name as string) as IItemStack
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| 参数   | 类型     | 描述                     |
| ---- | ------ | ---------------------- |
| name | string | New name of the stack. |


:::

:::group{name=weight}

Return Type: [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
IItemStack.weight(weight as double) as MCWeightedItemStack
```

| 参数     | 类型     | 描述                      |
| ------ | ------ | ----------------------- |
| weight | double | No Description Provided |


:::

:::group{name=withDamage}

Sets the damage of the ItemStack

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.withDamage(damage as int) as IItemStack
<item:minecraft:dirt>.withDamage(10);
```

| 参数     | 类型  | 描述                   |
| ------ | --- | -------------------- |
| damage | int | the new damage value |


:::

:::group{name=withTag}

Sets the tag for the ItemStack.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.withTag(tag as IData) as IItemStack
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| 参数  | 类型                               | 描述              |
| --- | -------------------------------- | --------------- |
| tag | [IData](/vanilla/api/data/IData) | The tag to set. |


:::


## 运算符

:::group{name=CONTAINS}

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myIItemStack
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in <item:minecraft:dirt>
```

:::

:::group{name=MOD}

```zenscript
myIItemStack % percentage as int
```

:::

:::group{name=MUL}

Sets the amount of the ItemStack

```zenscript
myIItemStack * amount as int
<item:minecraft:dirt> * 3
```

:::

:::group{name=OR}

```zenscript
myIItemStack | other as IIngredient
```

:::


## 参数

| 名称             | 类型                                                         | 可获得  | 可设置   |
| -------------- | ---------------------------------------------------------- | ---- | ----- |
| amount         | int                                                        | true | false |
| burnTime       | int                                                        | true | true  |
| commandString  | string                                                     | true | false |
| damage         | int                                                        | true | false |
| damageable     | boolean                                                    | true | false |
| damaged        | boolean                                                    | true | false |
| definition     | [MCItemDefinition](/vanilla/api/item/MCItemDefinition)     | true | false |
| displayName    | string                                                     | true | false |
| empty          | boolean                                                    | true | false |
| food           | [MCFood](/vanilla/api/food/MCFood)?                        | true | true  |
| getOrCreate    | [IData](/vanilla/api/data/IData)                           | true | false |
| getRepairCost  | int                                                        | true | false |
| hasDisplayName | boolean                                                    | true | false |
| hasEffect      | boolean                                                    | true | false |
| hasTag         | boolean                                                    | true | false |
| isCrossbow     | boolean                                                    | true | false |
| isEnchantable  | boolean                                                    | true | false |
| isEnchanted    | boolean                                                    | true | false |
| isImmutable    | boolean                                                    | true | false |
| items          | [IItemStack](/vanilla/api/items/IItemStack)[]              | true | false |
| maxDamage      | int                                                        | true | false |
| maxStackSize   | int                                                        | true | false |
| owner          | string                                                     | true | false |
| registryName   | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true | false |
| stackable      | boolean                                                    | true | false |
| tag            | [IData](/vanilla/api/data/IData)                           | true | false |
| translationKey | string                                                     | true | false |
| useDuration    | int                                                        | true | false |

