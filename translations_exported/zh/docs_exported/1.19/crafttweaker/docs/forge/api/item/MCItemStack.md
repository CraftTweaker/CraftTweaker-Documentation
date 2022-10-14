# MCItemStack

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCItemStack;
```


## 已实现的接口
MCItemStack implements the following interfaces. That means all methods defined in these interfaces are also available in MCItemStack

- [ForgeItemStack](/forge/api/item/ForgeItemStack)

## Static Properties

| 名称                        | 类型          | 可获得  | 可设置   |
| ------------------------- | ----------- | ---- | ----- |
| BASE_ATTACK_DAMAGE_UUID | **invalid** | true | false |
| BASE_ATTACK_SPEED_UUID  | **invalid** | true | false |
| CRAFTTWEAKER_DATA_KEY   | string      | true | false |

## Casters

| Result Type                                                                                                       | 是否隐藏 |
| ----------------------------------------------------------------------------------------------------------------- | ---- |
| [IData #数据](/vanilla/api/data/IData)                                                                              | true |
| [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)                                            | true |
| [ItemDefinition](/vanilla/api/item/ItemDefinition)                                                                | true |
| [MapData #地图数据](/vanilla/api/data/MapData)                                                                        | true |
| [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | true |

## 使用方式

:::group{name=addGlobalAttributeModifier}

Adds an AttributeModifier to this IIngredient.

 Attributes added with this method appear on all ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to have the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withAttributeModifier

```zenscript
// MCItemStack.addGlobalAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[])

myMCItemStack.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
```

| 参数        | 类型                                                                     | 描述                                    |
| --------- | ---------------------------------------------------------------------- | ------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.        |
| name（名称）  | string                                                                 | The name of the modifier.             |
| value     | double                                                                 | The value of the modifier.            |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.        |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for. |


:::

:::group{name=addGlobalAttributeModifier}

Adds an AttributeModifier to this IIngredient using a specific UUID.

 The UUID can be used to override an existing attribute on an ItemStack with this new modifier. You can use `/ct hand attributes` to get the UUID of the attributes on an ItemStack.

 Attributes added with this method appear on all ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to have the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withAttributeModifier

```zenscript
// MCItemStack.addGlobalAttributeModifier(attribute as Attribute, uuid as invalid, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[])

myMCItemStack.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, IItemStack.BASE_ATTACK_DAMAGE_UUID, "Extra Power", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
```

| 参数        | 类型                                                                     | 描述                                                |
| --------- | ---------------------------------------------------------------------- | ------------------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                    |
| uuid      | **invalid**                                                            | The unique identifier of the modifier to replace. |
| name（名称）  | string                                                                 | The name of the modifier.                         |
| value     | double                                                                 | The value of the modifier.                        |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.                    |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for.             |


:::

:::group{name=addGlobalAttributeModifier}

Adds an AttributeModifier to this IIngredient using a specific UUID.

 The UUID can be used to override an existing attribute on an ItemStack with this new modifier. You can use `/ct hand attributes` to get the UUID of the attributes on an ItemStack.

 Attributes added with this method appear on all ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to have the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withAttributeModifier

```zenscript
// MCItemStack.addGlobalAttributeModifier(attribute as Attribute, uuid as string, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[])

myMCItemStack.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "8c1b5535-9f79-448b-87ae-52d81480aaa3", "Extra Power", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
```

| 参数        | 类型                                                                     | 描述                                                |
| --------- | ---------------------------------------------------------------------- | ------------------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                    |
| uuid      | string                                                                 | The unique identifier of the modifier to replace. |
| name（名称）  | string                                                                 | The name of the modifier.                         |
| value     | double                                                                 | The value of the modifier.                        |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.                    |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for.             |


:::

:::group{name=addShiftTooltip}

```zenscript
MCItemStack.addShiftTooltip(content as Component, showMessage as Component)
```

| 参数          | 类型                                       | 可选    |
| ----------- | ---------------------------------------- | ----- |
| 内容          | [Component](/vanilla/api/text/Component) | false |
| showMessage | [Component](/vanilla/api/text/Component) | true  |


:::

:::group{name=addTooltip}

```zenscript
MCItemStack.addTooltip(content as Component)
```

| 参数 | 类型                                       |
| -- | ---------------------------------------- |
| 内容 | [Component](/vanilla/api/text/Component) |


:::

:::group{name=anyDamage}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
// MCItemStack.anyDamage() as IngredientConditioned<IIngredient>

myMCItemStack.anyDamage();
```

:::

:::group{name=asIIngredientWithAmount}

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
// MCItemStack.asIIngredientWithAmount() as IIngredientWithAmount

myMCItemStack.asIIngredientWithAmount();
```

:::

:::group{name=clearTooltip}

```zenscript
MCItemStack.clearTooltip(leaveName as boolean)
```

| 参数        | 类型  | 可选   | 默认值   |
| --------- | --- | ---- | ----- |
| leaveName | 布尔值 | true | false |


:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
// MCItemStack.contains(ingredient as IIngredient) as boolean

myMCItemStack.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| 参数         | 类型                                                     | 描述                      |
| ---------- | ------------------------------------------------------ | ----------------------- |
| ingredient | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | The ingredient to check |


:::

:::group{name=getAttributes}

Gets the Attributes and the AttributeModifiers on this IItemStack for the given EquipmentSlot

Returns: A Map of Attribute to a List of AttributeModifier for the given EquipmentSlot.  
Return Type: stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt;[[Attribute](/vanilla/api/entity/attribute/Attribute)]

```zenscript
// MCItemStack.getAttributes(slotType as EquipmentSlot) as stdlib.List<AttributeModifier>[Attribute]

myMCItemStack.getAttributes(<constant:minecraft:equipmentslot:chest>);
```

| 参数       | 类型                                                           | 描述                                  |
| -------- | ------------------------------------------------------------ | ----------------------------------- |
| slotType | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | The slot to get the Attributes for. |


:::

:::group{name=getBurnTime}

Return Type: int

```zenscript
MCItemStack.getBurnTime(manager as IRecipeManager) as int
```

| 参数      | 类型                                                           |
| ------- | ------------------------------------------------------------ |
| manager | [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager) |


:::

:::group{name=getDefinition}

Return Type: [ItemDefinition](/vanilla/api/item/ItemDefinition)

```zenscript
// MCItemStack.getDefinition() as ItemDefinition

myMCItemStack.getDefinition();
```

:::

:::group{name=getEnchantmentLevel}

Gets the level of the given enchantment on the item. Returns 0 if the item doesn't have the given enchantment.

Return Type: int

```zenscript
MCItemStack.getEnchantmentLevel(enchantment as Enchantment) as int
```

| 参数          | 类型                                                       |
| ----------- | -------------------------------------------------------- |
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) |


:::

:::group{name=getEnchantments}

Return Type: int?[[Enchantment](/vanilla/api/item/enchantment/Enchantment)]

```zenscript
// MCItemStack.getEnchantments() as int?[Enchantment]

myMCItemStack.getEnchantments();
```

:::

:::group{name=getFood}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)?

```zenscript
// MCItemStack.getFood() as FoodProperties?

myMCItemStack.getFood();
```

:::

:::group{name=getHoverName}

Gets the hover name of the ItemStack.

 This will give the raw name without the formatting that 'displayName' applies.

Returns: The hover name of the ItemStack.  
Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// MCItemStack.getHoverName() as Component

myMCItemStack.getHoverName();
```

:::

:::group{name=getImmutableInternal}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// MCItemStack.getImmutableInternal() as ItemStack

myMCItemStack.getImmutableInternal();
```

:::

:::group{name=getMaxStackSize}

Returns the max stack size of the Item in the ItemStack

Returns: Max stack size of the Item.  
Return Type: int

```zenscript
// MCItemStack.getMaxStackSize() as int

myMCItemStack.getMaxStackSize();
```

:::

:::group{name=getOrCreateTag}

Returns the NBT tag attached to this ItemStack or makes a new tag.

Returns: MapData of the ItemStack NBT Tag, empty tag if it doesn't exist.  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// MCItemStack.getOrCreateTag() as IData

myMCItemStack.getOrCreateTag();
```

:::

:::group{name=getRarity}

Returns the rarity of the Item in the ItemStack

Returns: Rarity of the Item.  
Return Type: [Rarity](/vanilla/api/item/property/Rarity)

```zenscript
// MCItemStack.getRarity() as Rarity

myMCItemStack.getRarity();
```

:::

:::group{name=grow}

Grows this IItemStack's stack size by the given amount, or 1 if no amount is given.

Returns: This IItemStack if mutable, a new one with the new amount otherwise.  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.grow(amount as int) as IItemStack

myMCItemStack.grow(2);
```

| 参数     | 类型  | 描述                     | 可选   | 默认值 |
| ------ | --- | ---------------------- | ---- | --- |
| amount | int | The amount to grow by. | true | 1   |


:::

:::group{name=isEdible}

Return Type: boolean

```zenscript
// MCItemStack.isEdible() as boolean

myMCItemStack.isEdible();
```

:::

:::group{name=isFireResistant}

Checks if this IItemStack burns when thrown into fire / lava or damaged by fire.

Returns: True if this IItemStack is immune to fire. False otherwise.  
Return Type: boolean

```zenscript
// MCItemStack.isFireResistant() as boolean

myMCItemStack.isFireResistant();
```

:::

:::group{name=isMutable}

Return Type: boolean

```zenscript
// MCItemStack.isMutable() as boolean

myMCItemStack.isMutable();
```

:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
// MCItemStack.matches(stack as IItemStack) as boolean

myMCItemStack.matches(<item:minecraft:iron_ingot>);
```

| 参数 | 类型                                         | 描述                 |
| -- | ------------------------------------------ | ------------------ |
| 堆叠 | [IItemstack](/vanilla/api/item/IItemStack) | The stack to check |


:::

:::group{name=modifyShiftTooltip}

```zenscript
MCItemStack.modifyShiftTooltip(shiftedFunction as ITooltipFunction, unshiftedFunction as ITooltipFunction)
```

| 参数                | 类型                                                             | 可选    |
| ----------------- | -------------------------------------------------------------- | ----- |
| shiftedFunction   | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | false |
| unshiftedFunction | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | true  |


:::

:::group{name=modifyTooltip}

```zenscript
MCItemStack.modifyTooltip(function as ITooltipFunction)
```

| 参数       | 类型                                                             |
| -------- | -------------------------------------------------------------- |
| function | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) |


:::

:::group{name=mul}

Use this in contexts where machines accept more than one item to state that fact.

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
MCItemStack.mul(amount as int) as IIngredientWithAmount
```

| 参数     | 类型  |
| ------ | --- |
| amount | int |


:::

:::group{name=only}

Use this if you already have the condition from another ingredient

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
MCItemStack.only(condition as IIngredientCondition<IIngredient>) as IngredientConditioned<IIngredient>
```

| 参数        | 类型                                                                                                                                                   |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| condition | [IIngredientCondition](/vanilla/api/ingredient/condition/IIngredientCondition)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt; |


:::

:::group{name=onlyDamaged}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
// MCItemStack.onlyDamaged() as IngredientConditioned<IIngredient>

myMCItemStack.onlyDamaged();
```

:::

:::group{name=onlyDamagedAtLeast}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
MCItemStack.onlyDamagedAtLeast(minDamage as int) as IngredientConditioned<IIngredient>
```

| 参数        | 类型  |
| --------- | --- |
| minDamage | int |


:::

:::group{name=onlyDamagedAtMost}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
MCItemStack.onlyDamagedAtMost(maxDamage as int) as IngredientConditioned<IIngredient>
```

| 参数        | 类型  |
| --------- | --- |
| maxDamage | int |


:::

:::group{name=onlyIf}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
MCItemStack.onlyIf(uid as string, function as Predicate<IItemStack>) as IngredientConditioned<IIngredient>
```

| 参数       | 类型                                                                      | 可选    |
| -------- | ----------------------------------------------------------------------- | ----- |
| uid      | string                                                                  | false |
| function | Predicate&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | true  |


:::

:::group{name=percent}

Return Type: [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
MCItemStack.percent(percentage as double) as Percentaged<IItemStack>
```

| 参数         | 类型     |
| ---------- | ------ |
| percentage | double |


:::

:::group{name=removeEnchantment}

Removes the given enchantment from this IItemStack.

Returns: This itemStack if it is mutable, a new one with the enchantment removed otherwise  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.removeEnchantment(enchantment as Enchantment) as IItemStack

myMCItemStack.removeEnchantment(<enchantment:minecraft:riptide>);
```

| 参数          | 类型                                                       | 描述                         |
| ----------- | -------------------------------------------------------- | -------------------------- |
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment to remove. |


:::

:::group{name=removeGlobalAttribute}

Removes all AttributeModifiers that use the given Attribute from this IIngredient.

 Attributes removed with this method are removed from ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to remove the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withoutAttribute.

 This method can only remove default Attributes from an ItemStack, it is still possible that an ItemStack can override it.

```zenscript
// MCItemStack.removeGlobalAttribute(attribute as Attribute, slotTypes as EquipmentSlot[])

myMCItemStack.removeGlobalAttribute(<attribute:minecraft:generic.attack_damage>, [<constant:minecraft:equipmentslot:chest>]);
```

| 参数        | 类型                                                             | 描述                                |
| --------- | -------------------------------------------------------------- | --------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)           | The attribute to remove.          |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from. |


:::

:::group{name=removeGlobalAttributeModifier}

Removes all AttributeModifiers who's ID is the same as the given uuid from this IIngredient.

```zenscript
// MCItemStack.removeGlobalAttributeModifier(uuid as invalid, slotTypes as EquipmentSlot[])

myMCItemStack.removeGlobalAttributeModifier(IItemStack.BASE_ATTACK_DAMAGE_UUID, [<constant:minecraft:equipmentslot:chest>]);
```

| 参数        | 类型                                                             | 描述                                                |
| --------- | -------------------------------------------------------------- | ------------------------------------------------- |
| uuid      | **invalid**                                                    | The unique id of the AttributeModifier to remove. |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from.                 |


:::

:::group{name=removeGlobalAttributeModifier}

Removes all AttributeModifiers who's ID is the same as the given uuid from this IIngredient.

```zenscript
// MCItemStack.removeGlobalAttributeModifier(uuid as string, slotTypes as EquipmentSlot[])

myMCItemStack.removeGlobalAttributeModifier("8c1b5535-9f79-448b-87ae-52d81480aaa3", [<constant:minecraft:equipmentslot:chest>]);
```

| 参数        | 类型                                                             | 描述                                                |
| --------- | -------------------------------------------------------------- | ------------------------------------------------- |
| uuid      | string                                                         | The unique id of the AttributeModifier to remove. |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from.                 |


:::

:::group{name=removeTooltip}

```zenscript
MCItemStack.removeTooltip(regex as string)
```

| 参数    | 类型     |
| ----- | ------ |
| regex | string |


:::

:::group{name=resetHoverName}

Clears any custom name set for this ItemStack

```zenscript
// MCItemStack.resetHoverName()

myMCItemStack.resetHoverName();
```

:::

:::group{name=reuse}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
// MCItemStack.reuse() as IIngredientTransformed<IIngredient>

myMCItemStack.reuse();
```

:::

:::group{name=setBurnTime}

Sets the burn time of this ingredient, for use in the furnace and other machines

```zenscript
// MCItemStack.setBurnTime(time as int)

myMCItemStack.setBurnTime(500);
```

| 参数   | 类型  | 描述                |
| ---- | --- | ----------------- |
| time | int | the new burn time |


:::

:::group{name=setBurnTime}

Sets the burn time of this ingredient, for use in the furnace and other machines

```zenscript
MCItemStack.setBurnTime(time as int, manager as IRecipeManager)
```

| 参数      | 类型                                                           | 描述                |
| ------- | ------------------------------------------------------------ | ----------------- |
| time    | int                                                          | the new burn time |
| manager | [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager) |                   |


:::

:::group{name=setEnchantments}

Sets the enchantments on this IItemStack.

Returns: This itemStack if it is mutable, a new one with the enchantments otherwise  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
MCItemStack.setEnchantments(enchantments as int?[Enchantment]) as IItemStack
```

| 参数           | 类型                                                             | 描述                   |
| ------------ | -------------------------------------------------------------- | -------------------- |
| enchantments | int?[[Enchantment](/vanilla/api/item/enchantment/Enchantment)] | The new enchantments |


:::

:::group{name=setFireResistant}

Sets if this IItemStack is immune to fire / lava.

 If true, the item will not burn when thrown into fire or lava.

```zenscript
MCItemStack.setFireResistant(fireResistant as boolean)
```

| 参数            | 类型  | 描述                                 |
| ------------- | --- | ---------------------------------- |
| fireResistant | 布尔值 | Should the item be immune to fire. |


:::

:::group{name=setFood}

```zenscript
MCItemStack.setFood(food as FoodProperties?)
```

| 参数   | 类型                                                  |
| ---- | --------------------------------------------------- |
| food | [FoodProperties](/vanilla/api/food/FoodProperties)? |


:::

:::group{name=setMaxStackSize}

Sets the max stacksize of the Item.

```zenscript
// MCItemStack.setMaxStackSize(newMaxStackSize as int)

myMCItemStack.setMaxStackSize(16);
```

| 参数              | 类型  | 描述                                  |
| --------------- | --- | ----------------------------------- |
| newMaxStackSize | int | The new max stack size of the Item. |


:::

:::group{name=setRarity}

Sets the rarity of the Item.

```zenscript
// MCItemStack.setRarity(newRarity as Rarity)

myMCItemStack.setRarity(Rarity.UNCOMMON);
```

| 参数        | 类型                                          | 描述                          |
| --------- | ------------------------------------------- | --------------------------- |
| newRarity | [Rarity](/vanilla/api/item/property/Rarity) | The new rarity of the Item. |


:::

:::group{name=shrink}

Shrinks this IItemStack's stack size by the given amount, or 1 if no amount is given.

Returns: This IItemStack if mutable, a new one with the new amount otherwise.  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.shrink(amount as int) as IItemStack

myMCItemStack.shrink(2);
```

| 参数     | 类型  | 描述                       | 可选   | 默认值 |
| ------ | --- | ------------------------ | ---- | --- |
| amount | int | The amount to shrink by. | true | 1   |


:::

:::group{name=transform}

Use this if you already have the transformer from another ingredient

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
MCItemStack.transform(transformer as IIngredientTransformer<IIngredient>) as IIngredientTransformed<IIngredient>
```

| 参数  | 类型                                                                                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 变压器 | [IIngredientTransformer](/vanilla/api/ingredient/transform/IIngredientTransformer)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt; |


:::

:::group{name=transformCustom}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
MCItemStack.transformCustom(uid as string, function as Function<IItemStack,IItemStack>) as IIngredientTransformed<IIngredient>
```

| 参数       | 类型                                                                                                                | 可选    |
| -------- | ----------------------------------------------------------------------------------------------------------------- | ----- |
| uid      | string                                                                                                            | false |
| function | Function&lt;[IItemStack](/vanilla/api/item/IItemStack),[IItemStack](/vanilla/api/item/IItemStack)&gt; | true  |


:::

:::group{name=transformDamage}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
MCItemStack.transformDamage(amount as int) as IIngredientTransformed<IIngredient>
```

| 参数     | 类型  | 可选   | 默认值 |
| ------ | --- | ---- | --- |
| amount | int | true | 1   |


:::

:::group{name=transformReplace}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
MCItemStack.transformReplace(replaceWith as IItemStack) as IIngredientTransformed<IIngredient>
```

| 参数          | 类型                                         |
| ----------- | ------------------------------------------ |
| replaceWith | [IItemstack](/vanilla/api/item/IItemStack) |


:::

:::group{name=withAttributeModifier}

Adds an AttributeModifier to this IItemStack.

 The UUID can be used to override an existing attribute on an ItemStack with this new modifier. You can use `/ct hand attributes` to get the UUID of the attributes on an ItemStack.

 Attributes added with this method will only appear on this specific IItemStack.

 By defaults, adding a modifier will remove the default Attribute Modifiers on the Item, like the Diamond Chestplate's Armor and Toughness values. When `preserveDefaults` is set to true (by default it is false.), the default Attribute Modifiers will be preserved when adding this modifier. This means that if you were adding the `forge:nametag_distance` attribute to an Item, it would keep its default attributes (like Armor and Toughness values).

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.withAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[], preserveDefaults as boolean) as IItemStack

myMCItemStack.withAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>], true);
```

| 参数               | 类型                                                                     | 描述                                                                                  | 可选    | 默认值   |
| ---------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----- | ----- |
| attribute        | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                                                      | false |       |
| name（名称）         | string                                                                 | The name of the modifier.                                                           | false |       |
| value            | double                                                                 | The value of the modifier.                                                          | false |       |
| operation        | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.                                                      | false |       |
| slotTypes        | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for.                                               | false |       |
| preserveDefaults | 布尔值                                                                    | Should the default Item Attribute Modifiers be preserved when adding this modifier. | true  | false |


:::

:::group{name=withAttributeModifier}

Adds an AttributeModifier to this IItemStack using a specific UUID.

 The UUID can be used to override an existing attribute on an ItemStack with this new modifier. You can use `/ct hand attributes` to get the UUID of the attributes on an ItemStack.

 Attributes added with this method will only appear on this specific IItemStack.

 By defaults, adding a modifier will remove the default Attribute Modifiers on the Item, like the Diamond Chestplate's Armor and Toughness values. When `preserveDefaults` is set to true (by default it is false.), the default Attribute Modifiers will be preserved when adding this modifier. This means that if you were adding the `forge:nametag_distance` attribute to an Item, it would keep its default attributes (like Armor and Toughness values).

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.withAttributeModifier(attribute as Attribute, uuid as invalid, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[], preserveDefaults as boolean) as IItemStack

myMCItemStack.withAttributeModifier(<attribute:minecraft:generic.attack_damage>, "8c1b5535-9f79-448b-87ae-52d81480aaa3", "Extra Power", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>], true);
```

| 参数               | 类型                                                                     | 描述                                                                                  | 可选    | 默认值   |
| ---------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----- | ----- |
| attribute        | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                                                      | false |       |
| uuid             | **invalid**                                                            | The unique identifier of the modifier to replace.                                   | false |       |
| name（名称）         | string                                                                 | The name of the modifier.                                                           | false |       |
| value            | double                                                                 | The value of the modifier.                                                          | false |       |
| operation        | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.                                                      | false |       |
| slotTypes        | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for.                                               | false |       |
| preserveDefaults | 布尔值                                                                    | Should the default Item Attribute Modifiers be preserved when adding this modifier. | true  | false |


:::

:::group{name=withAttributeModifier}

Adds an AttributeModifier to this IItemStack using a specific UUID.

 The UUID can be used to override an existing attribute on an ItemStack with this new modifier. You can use `/ct hand attributes` to get the UUID of the attributes on an ItemStack.

 Attributes added with this method will only appear on this specific IItemStack.

 By defaults, adding a modifier will remove the default Attribute Modifiers on the Item, like the Diamond Chestplate's Armor and Toughness values. When `preserveDefaults` is set to true (by default it is false.), the default Attribute Modifiers will be preserved when adding this modifier. This means that if you were adding the `forge:nametag_distance` attribute to an Item, it would keep its default attributes (like Armor and Toughness values).

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.withAttributeModifier(attribute as Attribute, uuid as string, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[], preserveDefaults as boolean) as IItemStack

myMCItemStack.withAttributeModifier(<attribute:minecraft:generic.attack_damage>, "8c1b5535-9f79-448b-87ae-52d81480aaa3", "Extra Power", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>], true);
```

| 参数               | 类型                                                                     | 描述                                                                                  | 可选    | 默认值   |
| ---------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----- | ----- |
| attribute        | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                                                      | false |       |
| uuid             | string                                                                 | The unique identifier of the modifier to replace.                                   | false |       |
| name（名称）         | string                                                                 | The name of the modifier.                                                           | false |       |
| value            | double                                                                 | The value of the modifier.                                                          | false |       |
| operation        | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.                                                      | false |       |
| slotTypes        | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for.                                               | false |       |
| preserveDefaults | 布尔值                                                                    | Should the default Item Attribute Modifiers be preserved when adding this modifier. | true  | false |


:::

:::group{name=withDamage}

Sets the damage of the ItemStack

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.withDamage(damage as int) as IItemStack

myMCItemStack.withDamage(10);
```

| 参数     | 类型  | 描述                   |
| ------ | --- | -------------------- |
| damage | int | the new damage value |


:::

:::group{name=withDisplayName}

Sets the display name of the ItemStack

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.withDisplayName(name as Component) as IItemStack

myMCItemStack.withDisplayName("totally not dirt");
```

| 参数       | 类型                                       | 描述                     |
| -------- | ---------------------------------------- | ---------------------- |
| name（名称） | [Component](/vanilla/api/text/Component) | New name of the stack. |


:::

:::group{name=withEnchantment}

Enchants this IItemStack with the given Enchantment.

Returns: This itemStack if it is mutable, a new one with the enchantment added otherwise  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.withEnchantment(enchantment as Enchantment, level as int) as IItemStack

myMCItemStack.withEnchantment(<enchantment:minecraft:riptide>, 2);
```

| 参数          | 类型                                                       | 描述                           | 可选    | 默认值 |
| ----------- | -------------------------------------------------------- | ---------------------------- | ----- | --- |
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment to add.      | false |     |
| level       | int                                                      | The level of the enchantment | true  | 1   |


:::

:::group{name=withLore}

Sets the lore of the ItemStack

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.withLore(lore as Component?[]) as IItemStack

myMCItemStack.withLore(new crafttweaker.api.text.TextComponent("I am the lore I speak for the trees"););
```

| 参数   | 类型                                          | 描述                             |
| ---- | ------------------------------------------- | ------------------------------ |
| lore | [Component](/vanilla/api/text/Component)?[] | the new Lore of the ItemStack. |


:::

:::group{name=withTag}

Sets the tag for the ItemStack.

Returns: This itemStack if it is mutable, a new one with the changed property otherwise  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.withTag(tag as MapData) as IItemStack

myMCItemStack.withTag({Display: {lore: ["Hello"]}});
```

| 参数      | 类型                                         | 描述              |
| ------- | ------------------------------------------ | --------------- |
| tag #标签 | [MapData #地图数据](/vanilla/api/data/MapData) | The tag to set. |


:::

:::group{name=withoutTag}

Removes the tag from this ItemStack.

Returns: This itemStack if it is mutable, a new one with the changed property otherwise  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.withoutTag() as IItemStack

myMCItemStack.withoutTag();
```

:::


## 运算符

:::group{name=CONTAINS}

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myMCItemStack
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in myMCItemStack
```

:::

:::group{name=EQUALS}

```zenscript
myMCItemStack == o as Object
```

:::

:::group{name=MOD}

```zenscript
myMCItemStack % percentage as double
```

:::

:::group{name=MUL}

Use this in contexts where machines accept more than one item to state that fact.

```zenscript
myMCItemStack * amount as int
```

:::

:::group{name=OR}

```zenscript
myMCItemStack | other as IIngredient
```

:::


## 参数

| 名称                 | 类型                                                             | 可获得   | 可设置   | 描述                                                                                                                                                                |
| ------------------ | -------------------------------------------------------------- | ----- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| amount             | int                                                            | true  | false | Gets the amount of Items in the ItemStack                                                                                                                         |
| baseRepairCost     | int                                                            | true  | false | Gets the base repair cost of the ItemStack, or 0 if no repair is defined.                                                                                         |
| burnTime           | void                                                           | false | true  | Sets the burn time of this ingredient, for use in the furnace and other machines                                                                                  |
| damage             | int                                                            | true  | false |                                                                                                                                                                   |
| damageableItem     | 布尔值                                                            | true  | false | Returns if the ItemStack is damageable <br />  I.E Swords and tools are damageable, sticks are not.                                                         |
| damaged            | 布尔值                                                            | true  | false | Returns if the ItemStack is damaged <br />  I.E a Swords that is no at full durability is damaged.                                                          |
| definition         | [ItemDefinition](/vanilla/api/item/ItemDefinition)             | true  | false |                                                                                                                                                                   |
| descriptionId      | string                                                         | true  | false | Returns the unlocalized Name of the Item in the ItemStack                                                                                                         |
| displayName        | [Component](/vanilla/api/text/Component)                       | true  | false | Gets the display name of the ItemStack                                                                                                                            |
| enchantments       | int?[[Enchantment](/vanilla/api/item/enchantment/Enchantment)] | true  | true  |                                                                                                                                                                   |
| fireResistant      | 布尔值                                                            | true  | true  | Checks if this IItemStack burns when thrown into fire / lava or damaged by fire.                                                                                  |
| food               | [FoodProperties](/vanilla/api/food/FoodProperties)?            | true  | true  |                                                                                                                                                                   |
| hasCustomHoverName | 布尔值                                                            | true  | false | Returns true if the ItemStack has a display name.                                                                                                                 |
| hasFoil            | 布尔值                                                            | true  | false | Returns true if this ItemStack has a foil effect. <br />  <br />  Foil is the glint / effect that is added to enchanted ItemStacks (and other items). |
| hasTag             | 布尔值                                                            | true  | false | Returns true if this ItemStack has a Tag                                                                                                                          |
| hoverName          | [Component](/vanilla/api/text/Component)                       | true  | false | Gets the hover name of the ItemStack. <br />  <br />  This will give the raw name without the formatting that 'displayName' applies.                  |
| isEdible           | 布尔值                                                            | true  | false |                                                                                                                                                                   |
| isEnchantable      | 布尔值                                                            | true  | false | Can this ItemStack be enchanted?                                                                                                                                  |
| isEnchanted        | 布尔值                                                            | true  | false | Is this ItemStack enchanted?                                                                                                                                      |
| isMutable          | 布尔值                                                            | true  | false |                                                                                                                                                                   |
| maxDamage          | int                                                            | true  | true  | Returns the max damage of the ItemStack <br />  This is the max durability of the ItemStack.                                                                |
| maxStackSize       | int                                                            | true  | true  | Returns the max stack size of the Item in the ItemStack                                                                                                           |
| owner              | string                                                         | true  | false | Gets owning mod for the Item in this IItemStack                                                                                                                   |
| rarity             | [Rarity](/vanilla/api/item/property/Rarity)                    | true  | true  | Returns the rarity of the Item in the ItemStack                                                                                                                   |
| registryName       | [资源位置](/vanilla/api/resource/ResourceLocation)                 | true  | false | Gets the registry name for the Item in this IItemStack                                                                                                            |
| stackable          | 布尔值                                                            | true  | false | Returns if the ItemStack can have an amount greater than 1 <br />  I.E Swords and tools are not stackable, sticks are.                                      |
| tag #标签            | [IData](/vanilla/api/data/IData)?                              | true  | false | Returns the NBT tag attached to this ItemStack.                                                                                                                   |
| useDuration        | int                                                            | true  | false | Gets the use duration of the ItemStack                                                                                                                            |
| useOnRelease       | 布尔值                                                            | true  | false | Returns true if this stack is considered a crossbow item                                                                                                          |

