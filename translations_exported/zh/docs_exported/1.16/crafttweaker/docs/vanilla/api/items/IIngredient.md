# 材料（IIngredient）

This is IIngredient!!!

## 导入类

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
| [IData #数据](/vanilla/api/data/IData)       | true |
| [Ingredient](/vanilla/api/item/Ingredient) | true |
| [MapData #地图数据](/vanilla/api/data/MapData) | true |

## 使用方式

:::group{name=addGlobalAttributeModifier}

Adds an AttributeModifier to this IIngredient.

 Attributes added with this method appear on all ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to have the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withAttributeModifier

Return Type: void

```zenscript
// IIngredient.addGlobalAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as MCEquipmentSlotType[]) as void

<tag:items:forge:ingots>.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 10, AttributeOperation.ADDITION, [<equipmentslottype:chest>]);
```

| 参数        | 类型                                                             | 描述                                    |
| --------- | -------------------------------------------------------------- | ------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/Attribute)                     | The Attribute of the modifier.        |
| name（名称）  | string                                                         | The name of the modifier.             |
| value     | double                                                         | The value of the modifier.            |
| operation | [AttributeOperation](/vanilla/api/entity/AttributeOperation)   | The operation of the modifier.        |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | What slots the modifier is valid for. |


:::

:::group{name=addGlobalAttributeModifier}

Adds an AttributeModifier to this IIngredient using a specific UUID.

 The UUID can be used to override an existing attribute on an ItemStack with this new modifier. You can use `/ct hand attributes` to get the UUID of the attributes on an ItemStack.

 Attributes added with this method appear on all ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to have the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withAttributeModifier

Return Type: void

```zenscript
// IIngredient.addGlobalAttributeModifier(attribute as Attribute, uuid as string, name as string, value as double, operation as AttributeOperation, slotTypes as MCEquipmentSlotType[]) as void

<tag:items:forge:ingots>.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "8c1b5535-9f79-448b-87ae-52d81480aaa3", "Extra Power", 10, AttributeOperation.ADDITION, [<equipmentslottype:chest>]);
```

| 参数        | 类型                                                             | 描述                                                |
| --------- | -------------------------------------------------------------- | ------------------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/Attribute)                     | The Attribute of the modifier.                    |
| uuid      | string                                                         | The unique identifier of the modifier to replace. |
| name（名称）  | string                                                         | The name of the modifier.                         |
| value     | double                                                         | The value of the modifier.                        |
| operation | [AttributeOperation](/vanilla/api/entity/AttributeOperation)   | The operation of the modifier.                    |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | What slots the modifier is valid for.             |


:::

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
// IIngredient.anyDamage() as MCIngredientConditioned<IIngredient>

<tag:items:forge:ingots>.anyDamage();
```

:::

:::group{name=asVanillaIngredient}

Create a Vanilla ingredient matching this one.

Return Type: [Ingredient](/vanilla/api/item/Ingredient)

```zenscript
// IIngredient.asVanillaIngredient() as Ingredient

<tag:items:forge:ingots>.asVanillaIngredient();
```

:::

:::group{name=clearTooltip}

Return Type: void

```zenscript
// IIngredient.clearTooltip() as void

<tag:items:forge:ingots>.clearTooltip();
```

:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
// IIngredient.contains(ingredient as IIngredient) as boolean

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
// IIngredient.getRemainingItem(stack as IItemStack) as IItemStack

<tag:items:forge:ingots>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| 参数 | 类型                                          | 描述                                        |
| -- | ------------------------------------------- | ----------------------------------------- |
| 堆叠 | [IItemstack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
// IIngredient.matches(stack as IItemStack) as boolean

<tag:items:forge:ingots>.matches(<item:minecraft:iron_ingot>);
```

| 参数 | 类型                                          | 描述                 |
| -- | ------------------------------------------- | ------------------ |
| 堆叠 | [IItemstack](/vanilla/api/items/IItemStack) | The stack to check |


:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
IIngredient.matches(stack as IItemStack, ignoreDamage as boolean) as boolean
```

| 参数   | 类型                                          | 描述                        |
| ---- | ------------------------------------------- | ------------------------- |
| 堆叠   | [IItemstack](/vanilla/api/items/IItemStack) | The stack to check        |
| 忽略伤害 | 布尔值                                         | Should damage be checked? |


:::

:::group{name=modifyShiftTooltip}

Return Type: void

```zenscript
IIngredient.modifyShiftTooltip(shiftedFunction as ITooltipFunction, unshiftedFunction as ITooltipFunction) as void
```

| 参数                | 类型                                                      | 描述                      | 可选    | DefaultValue |
| ----------------- | ------------------------------------------------------- | ----------------------- | ----- | ------------ |
| shiftedFunction   | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided | false |              |
| unshiftedFunction | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided | true  |              |


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
// IIngredient.onlyDamaged() as MCIngredientConditioned<IIngredient>

<tag:items:forge:ingots>.onlyDamaged();
```

:::

:::group{name=onlyDamagedAtLeast}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.onlyDamagedAtLeast(minDamage as int) as MCIngredientConditioned<IIngredient>
```

| 参数        | 类型  | 描述                      |
| --------- | --- | ----------------------- |
| minDamage | int | No Description Provided |


:::

:::group{name=onlyDamagedAtMost}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.onlyDamagedAtMost(maxDamage as int) as MCIngredientConditioned<IIngredient>
```

| 参数        | 类型  | 描述                      |
| --------- | --- | ----------------------- |
| maxDamage | int | No Description Provided |


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

:::group{name=removeGlobalAttribute}

Removes all AttributeModifiers that use the given Attribute from this IIngredient.

 Attributes removed with this method are removed from ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to remove the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withoutAttribute.

 This method can only remove default Attributes from an ItemStack, it is still possible that an ItemStack can override it.

Return Type: void

```zenscript
// IIngredient.removeGlobalAttribute(attribute as Attribute, slotTypes as MCEquipmentSlotType[]) as void

<tag:items:forge:ingots>.removeGlobalAttribute(<attribute:minecraft:generic.attack_damage>, [<equipmentslottype:chest>]);
```

| 参数        | 类型                                                             | 描述                                |
| --------- | -------------------------------------------------------------- | --------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/Attribute)                     | The attribute to remove.          |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | The slot types to remove it from. |


:::

:::group{name=removeGlobalAttributeModifier}

Removes all AttributeModifiers who's ID is the same as the given uuid from this IIngredient.

Return Type: void

```zenscript
// IIngredient.removeGlobalAttributeModifier(uuid as string, slotTypes as MCEquipmentSlotType[]) as void

<tag:items:forge:ingots>.removeGlobalAttributeModifier("8c1b5535-9f79-448b-87ae-52d81480aaa3", [<equipmentslottype:chest>]);
```

| 参数        | 类型                                                             | 描述                                                |
| --------- | -------------------------------------------------------------- | ------------------------------------------------- |
| uuid      | string                                                         | The unique id of the AttributeModifier to remove. |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | The slot types to remove it from.                 |


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

| 名称                   | 类型                                            | 可获得   | 可设置   | 描述                                                                               |
| -------------------- | --------------------------------------------- | ----- | ----- | -------------------------------------------------------------------------------- |
| burnTime             | void                                          | false | true  | Sets the burn time of this ingredient, for use in the furnace and other machines |
| commandString #命令字符串 | string                                        | true  | false | Returns the BEP to get this stack                                                |
| items                | [IItemStack](/vanilla/api/items/IItemStack)[] | true  | false | No Description Provided                                                          |

