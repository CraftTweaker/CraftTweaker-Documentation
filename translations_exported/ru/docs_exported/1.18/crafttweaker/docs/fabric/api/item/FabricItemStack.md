# FabricItemStack

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.FabricItemStack;
```


## Implemented Interfaces
FabricItemStack implements the following interfaces. That means all methods defined in these interfaces are also available in FabricItemStack

- [IItemStack](/vanilla/api/item/IItemStack)

## Static Properties

| Название                | Тип    | Имеет Getter | Имеет Setter | Описание                |
| ----------------------- | ------ | ------------ | ------------ | ----------------------- |
| CRAFTTWEAKER_DATA_KEY | string | true         | false        | No Description Provided |

## Утилиты

| Тип результата                                                                                                    | Является неявным |
| ----------------------------------------------------------------------------------------------------------------- | ---------------- |
| [IData](/vanilla/api/data/IData)                                                                                  | true             |
| [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)                                            | true             |
| [ItemDefinition](/vanilla/api/item/ItemDefinition)                                                                | true             |
| [ItemStack](/vanilla/api/item/ItemStack)                                                                          | true             |
| [MapData](/vanilla/api/data/MapData)                                                                              | true             |
| [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | true             |

## Методы

:::group{name=addGlobalAttributeModifier}

Adds an AttributeModifier to this IIngredient.

 Attributes added with this method appear on all ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to have the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withAttributeModifier

Return Type: void

```zenscript
// FabricItemStack.addGlobalAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[]) as void

myFabricItemStack.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 10, AttributeOperation.ADDITION, [<equipmentslot:chest>]);
```

| Параметр  | Тип                                                                    | Описание                              |
| --------- | ---------------------------------------------------------------------- | ------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.        |
| name      | string                                                                 | The name of the modifier.             |
| value     | double                                                                 | The value of the modifier.            |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.        |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for. |


:::

:::group{name=addGlobalAttributeModifier}

Adds an AttributeModifier to this IIngredient using a specific UUID.

 The UUID can be used to override an existing attribute on an ItemStack with this new modifier. You can use `/ct hand attributes` to get the UUID of the attributes on an ItemStack.

 Attributes added with this method appear on all ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to have the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withAttributeModifier

Return Type: void

```zenscript
// FabricItemStack.addGlobalAttributeModifier(attribute as Attribute, uuid as string, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[]) as void

myFabricItemStack.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "8c1b5535-9f79-448b-87ae-52d81480aaa3", "Extra Power", 10, AttributeOperation.ADDITION, [<equipmentslot:chest>]);
```

| Параметр  | Тип                                                                    | Описание                                          |
| --------- | ---------------------------------------------------------------------- | ------------------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                    |
| uuid      | string                                                                 | The unique identifier of the modifier to replace. |
| name      | string                                                                 | The name of the modifier.                         |
| value     | double                                                                 | The value of the modifier.                        |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.                    |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for.             |


:::

:::group{name=addShiftTooltip}

Return Type: void

```zenscript
FabricItemStack.addShiftTooltip(content as Component, showMessage as Component) as void
```

| Параметр    | Тип                                      | Описание                | Optional | DefaultValue |
| ----------- | ---------------------------------------- | ----------------------- | -------- | ------------ |
| контент     | [Component](/vanilla/api/text/Component) | No Description Provided | false    |              |
| showMessage | [Component](/vanilla/api/text/Component) | No Description Provided | true     |              |


:::

:::group{name=addTooltip}

Return Type: void

```zenscript
FabricItemStack.addTooltip(content as Component) as void
```

| Параметр | Тип                                      | Описание                |
| -------- | ---------------------------------------- | ----------------------- |
| контент  | [Component](/vanilla/api/text/Component) | No Description Provided |


:::

:::group{name=anyDamage}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
// FabricItemStack.anyDamage() as IngredientConditioned<IIngredient>

myFabricItemStack.anyDamage();
```

:::

:::group{name=asIIngredientWithAmount}

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
// FabricItemStack.asIIngredientWithAmount() as IIngredientWithAmount

myFabricItemStack.asIIngredientWithAmount();
```

:::

:::group{name=asImmutable}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.asImmutable() as IItemStack

myFabricItemStack.asImmutable();
```

:::

:::group{name=asMutable}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.asMutable() as IItemStack

myFabricItemStack.asMutable();
```

:::

:::group{name=clearTooltip}

Return Type: void

```zenscript
// FabricItemStack.clearTooltip() as void

myFabricItemStack.clearTooltip();
```

:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
// FabricItemStack.contains(ingredient as IIngredient) as boolean

myFabricItemStack.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| Параметр   | Тип                                                | Описание                |
| ---------- | -------------------------------------------------- | ----------------------- |
| ingredient | [IIngredient](/vanilla/api/ingredient/IIngredient) | The ingredient to check |


:::

:::group{name=copy}

Creates a copy

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.copy() as IItemStack

myFabricItemStack.copy();
```

:::

:::group{name=getAttributes}

Gets the Attributes and the AttributeModifiers on this IItemStack for the given EquipmentSlot

Returns: A Map of Attribute to a List of AttributeModifier for the given EquipmentSlot.  
Return Type: stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt;[[Attribute](/vanilla/api/entity/attribute/Attribute)]

```zenscript
// FabricItemStack.getAttributes(slotType as EquipmentSlot) as stdlib.List<AttributeModifier>[Attribute]

myFabricItemStack.getAttributes(<equipmentslot:chest>);
```

| Параметр | Тип                                                          | Описание                            |
| -------- | ------------------------------------------------------------ | ----------------------------------- |
| slotType | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | The slot to get the Attributes for. |


:::

:::group{name=getDefinition}

Return Type: [ItemDefinition](/vanilla/api/item/ItemDefinition)

```zenscript
// FabricItemStack.getDefinition() as ItemDefinition

myFabricItemStack.getDefinition();
```

:::

:::group{name=getEnchantmentLevel}

Gets the level of the given enchantment on the item. Returns 0 if the item doesn't have the given enchantment.

Return Type: int

```zenscript
FabricItemStack.getEnchantmentLevel(enchantment as Enchantment) as int
```

| Параметр    | Тип                                                      | Описание                |
| ----------- | -------------------------------------------------------- | ----------------------- |
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | No Description Provided |


:::

:::group{name=getEnchantments}

Return Type: int?[[Enchantment](/vanilla/api/item/enchantment/Enchantment)]

```zenscript
// FabricItemStack.getEnchantments() as int?[Enchantment]

myFabricItemStack.getEnchantments();
```

:::

:::group{name=getImmutableInternal}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// FabricItemStack.getImmutableInternal() as ItemStack

myFabricItemStack.getImmutableInternal();
```

:::

:::group{name=getInternal}

Gets the internal [ItemStack](/vanilla/api/item/ItemStack) for this IItemStack.

Returns: internal ItemStack  
Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// FabricItemStack.getInternal() as ItemStack

myFabricItemStack.getInternal();
```

:::

:::group{name=getMaxStackSize}

Returns the max stack size of the Item in the ItemStack

Returns: Max stack size of the Item.  
Return Type: int

```zenscript
// FabricItemStack.getMaxStackSize() as int

myFabricItemStack.getMaxStackSize();
```

:::

:::group{name=getRarity}

Returns the rarity of the Item in the ItemStack

Returns: Rarity of the Item.  
Return Type: [Rarity](/vanilla/api/item/property/Rarity)

```zenscript
// FabricItemStack.getRarity() as Rarity

myFabricItemStack.getRarity();
```

:::

:::group{name=getRemainingItem}

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.getRemainingItem(stack as IItemStack) as IItemStack

myFabricItemStack.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                        | Описание                                  |
| -------- | ------------------------------------------ | ----------------------------------------- |
| stack    | [IItemStack](/vanilla/api/item/IItemStack) | The stack to provide for this ingredient. |


:::

:::group{name=grow}

Grows this IItemStack's stack size by the given amount, or 1 if no amount is given.

Returns: This IItemStack if mutable, a new one with the new amount otherwise.  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.grow(amount as int) as IItemStack

myFabricItemStack.grow(2);
```

| Параметр | Тип | Описание               | Optional | DefaultValue |
| -------- | --- | ---------------------- | -------- | ------------ |
| amount   | int | The amount to grow by. | true     | 1            |


:::

:::group{name=isEdible}

Return Type: boolean

```zenscript
// FabricItemStack.isEdible() as boolean

myFabricItemStack.isEdible();
```

:::

:::group{name=isFireResistant}

Checks if this IItemStack burns when thrown into fire / lava or damaged by fire.

Returns: True if this IItemStack is immune to fire. False otherwise.  
Return Type: boolean

```zenscript
// FabricItemStack.isFireResistant() as boolean

myFabricItemStack.isFireResistant();
```

:::

:::group{name=isImmutable}

Return Type: boolean

```zenscript
// FabricItemStack.isImmutable() as boolean

myFabricItemStack.isImmutable();
```

:::

:::group{name=isMutable}

Return Type: boolean

```zenscript
// FabricItemStack.isMutable() as boolean

myFabricItemStack.isMutable();
```

:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
// FabricItemStack.matches(stack as IItemStack) as boolean

myFabricItemStack.matches(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                        | Описание           |
| -------- | ------------------------------------------ | ------------------ |
| stack    | [IItemStack](/vanilla/api/item/IItemStack) | The stack to check |


:::

:::group{name=modifyShiftTooltip}

Return Type: void

```zenscript
FabricItemStack.modifyShiftTooltip(shiftedFunction as ITooltipFunction, unshiftedFunction as ITooltipFunction) as void
```

| Параметр          | Тип                                                            | Описание                | Optional | DefaultValue |
| ----------------- | -------------------------------------------------------------- | ----------------------- | -------- | ------------ |
| shiftedFunction   | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | No Description Provided | false    |              |
| unshiftedFunction | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | No Description Provided | true     |              |


:::

:::group{name=modifyTooltip}

Return Type: void

```zenscript
FabricItemStack.modifyTooltip(function as ITooltipFunction) as void
```

| Параметр | Тип                                                            | Описание                |
| -------- | -------------------------------------------------------------- | ----------------------- |
| function | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | No Description Provided |


:::

:::group{name=mul}

Use this in contexts where machines accept more than one item to state that fact.

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
FabricItemStack.mul(amount as int) as IIngredientWithAmount
```

| Параметр | Тип | Описание                |
| -------- | --- | ----------------------- |
| amount   | int | No Description Provided |


:::

:::group{name=only}

Use this if you already have the condition from another ingredient

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
FabricItemStack.only(condition as IIngredientCondition<IIngredient>) as IngredientConditioned<IIngredient>
```

| Параметр  | Тип                                                                                                                                                  | Описание                |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| condition | [IIngredientCondition](/vanilla/api/ingredient/condition/IIngredientCondition)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt; | No Description Provided |


:::

:::group{name=onlyDamaged}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
// FabricItemStack.onlyDamaged() as IngredientConditioned<IIngredient>

myFabricItemStack.onlyDamaged();
```

:::

:::group{name=onlyDamagedAtLeast}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
FabricItemStack.onlyDamagedAtLeast(minDamage as int) as IngredientConditioned<IIngredient>
```

| Параметр  | Тип | Описание                |
| --------- | --- | ----------------------- |
| minDamage | int | No Description Provided |


:::

:::group{name=onlyDamagedAtMost}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
FabricItemStack.onlyDamagedAtMost(maxDamage as int) as IngredientConditioned<IIngredient>
```

| Параметр  | Тип | Описание                |
| --------- | --- | ----------------------- |
| maxDamage | int | No Description Provided |


:::

:::group{name=onlyIf}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
FabricItemStack.onlyIf(uid as string, function as Predicate<IItemStack>) as IngredientConditioned<IIngredient>
```

| Параметр | Тип                                                                     | Описание                | Optional | DefaultValue |
| -------- | ----------------------------------------------------------------------- | ----------------------- | -------- | ------------ |
| uid      | string                                                                  | No Description Provided | false    |              |
| function | Predicate&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | No Description Provided | true     |              |


:::

:::group{name=percent}

Return Type: [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
FabricItemStack.percent(percentage as double) as Percentaged<IItemStack>
```

| Параметр   | Тип    | Описание                |
| ---------- | ------ | ----------------------- |
| percentage | double | No Description Provided |


:::

:::group{name=removeEnchantment}

Removes the given enchantment from this IItemStack.

Returns: This itemStack if it is mutable, a new one with the enchantment removed otherwise  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.removeEnchantment(enchantment as Enchantment) as IItemStack

myFabricItemStack.removeEnchantment(<enchantment:minecraft:riptide>);
```

| Параметр    | Тип                                                      | Описание                   |
| ----------- | -------------------------------------------------------- | -------------------------- |
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment to remove. |


:::

:::group{name=removeGlobalAttribute}

Removes all AttributeModifiers that use the given Attribute from this IIngredient.

 Attributes removed with this method are removed from ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to remove the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withoutAttribute.

 This method can only remove default Attributes from an ItemStack, it is still possible that an ItemStack can override it.

Return Type: void

```zenscript
// FabricItemStack.removeGlobalAttribute(attribute as Attribute, slotTypes as EquipmentSlot[]) as void

myFabricItemStack.removeGlobalAttribute(<attribute:minecraft:generic.attack_damage>, [<equipmentslot:chest>]);
```

| Параметр  | Тип                                                            | Описание                          |
| --------- | -------------------------------------------------------------- | --------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)           | The attribute to remove.          |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from. |


:::

:::group{name=removeGlobalAttributeModifier}

Removes all AttributeModifiers who's ID is the same as the given uuid from this IIngredient.

Return Type: void

```zenscript
// FabricItemStack.removeGlobalAttributeModifier(uuid as string, slotTypes as EquipmentSlot[]) as void

myFabricItemStack.removeGlobalAttributeModifier("8c1b5535-9f79-448b-87ae-52d81480aaa3", [<equipmentslot:chest>]);
```

| Параметр  | Тип                                                            | Описание                                          |
| --------- | -------------------------------------------------------------- | ------------------------------------------------- |
| uuid      | string                                                         | The unique id of the AttributeModifier to remove. |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from.                 |


:::

:::group{name=removeTooltip}

Return Type: void

```zenscript
FabricItemStack.removeTooltip(regex as string) as void
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| regex    | string | No Description Provided |


:::

:::group{name=resetHoverName}

Clears any custom name set for this ItemStack

Return Type: void

```zenscript
// FabricItemStack.resetHoverName() as void

myFabricItemStack.resetHoverName();
```

:::

:::group{name=reuse}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
// FabricItemStack.reuse() as IIngredientTransformed<IIngredient>

myFabricItemStack.reuse();
```

:::

:::group{name=setEnchantments}

Sets the enchantments on this IItemStack.

Returns: This itemStack if it is mutable, a new one with the enchantments otherwise  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
FabricItemStack.setEnchantments(enchantments as int?[Enchantment]) as IItemStack
```

| Параметр     | Тип                                                            | Описание             |
| ------------ | -------------------------------------------------------------- | -------------------- |
| enchantments | int?[[Enchantment](/vanilla/api/item/enchantment/Enchantment)] | The new enchantments |


:::

:::group{name=setFireResistant}

Sets if this IItemStack is immune to fire / lava.

 If true, the item will not burn when thrown into fire or lava.

Return Type: void

```zenscript
FabricItemStack.setFireResistant(fireResistant as boolean) as void
```

| Параметр      | Тип     | Описание                           |
| ------------- | ------- | ---------------------------------- |
| fireResistant | boolean | Should the item be immune to fire. |


:::

:::group{name=setMaxStackSize}

Sets the max stacksize of the Item.

Return Type: void

```zenscript
// FabricItemStack.setMaxStackSize(newMaxStackSize as int) as void

myFabricItemStack.setMaxStackSize(16);
```

| Параметр        | Тип | Описание                            |
| --------------- | --- | ----------------------------------- |
| newMaxStackSize | int | The new max stack size of the Item. |


:::

:::group{name=setRarity}

Sets the rarity of the Item.

Return Type: void

```zenscript
// FabricItemStack.setRarity(newRarity as Rarity) as void

myFabricItemStack.setRarity(Rarity.UNCOMMON);
```

| Параметр  | Тип                                         | Описание                    |
| --------- | ------------------------------------------- | --------------------------- |
| newRarity | [Rarity](/vanilla/api/item/property/Rarity) | The new rarity of the Item. |


:::

:::group{name=shrink}

Shrinks this IItemStack's stack size by the given amount, or 1 if no amount is given.

Returns: This IItemStack if mutable, a new one with the new amount otherwise.  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.shrink(amount as int) as IItemStack

myFabricItemStack.shrink(2);
```

| Параметр | Тип | Описание                 | Optional | DefaultValue |
| -------- | --- | ------------------------ | -------- | ------------ |
| amount   | int | The amount to shrink by. | true     | 1            |


:::

:::group{name=transform}

Use this if you already have the transformer from another ingredient

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
FabricItemStack.transform(transformer as IIngredientTransformer<IIngredient>) as IIngredientTransformed<IIngredient>
```

| Параметр      | Тип                                                                                                                                                      | Описание                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| трансформатор | [IIngredientTransformer](/vanilla/api/ingredient/transform/IIngredientTransformer)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt; | No Description Provided |


:::

:::group{name=transformCustom}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
FabricItemStack.transformCustom(uid as string, function as Function<IItemStack,IItemStack>) as IIngredientTransformed<IIngredient>
```

| Параметр | Тип                                                                                                               | Описание                | Optional | DefaultValue |
| -------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------- | -------- | ------------ |
| uid      | string                                                                                                            | No Description Provided | false    |              |
| function | Function&lt;[IItemStack](/vanilla/api/item/IItemStack),[IItemStack](/vanilla/api/item/IItemStack)&gt; | No Description Provided | true     |              |


:::

:::group{name=transformDamage}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
FabricItemStack.transformDamage(amount as int) as IIngredientTransformed<IIngredient>
```

| Параметр | Тип | Описание                | Optional | DefaultValue |
| -------- | --- | ----------------------- | -------- | ------------ |
| amount   | int | No Description Provided | true     | 1            |


:::

:::group{name=transformReplace}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
FabricItemStack.transformReplace(replaceWith as IItemStack) as IIngredientTransformed<IIngredient>
```

| Параметр    | Тип                                        | Описание                |
| ----------- | ------------------------------------------ | ----------------------- |
| replaceWith | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=withAttributeModifier}

Adds an AttributeModifier to this IItemStack.

 The UUID can be used to override an existing attribute on an ItemStack with this new modifier. You can use `/ct hand attributes` to get the UUID of the attributes on an ItemStack.

 Attributes added with this method will only appear on this specific IItemStack.

 By defaults, adding a modifier will remove the default Attribute Modifiers on the Item, like the Diamond Chestplate's Armor and Toughness values. When `preserveDefaults` is set to true (by default it is false.), the default Attribute Modifiers will be preserved when adding this modifier. This means that if you were adding the `forge:nametag_distance` attribute to an Item, it would keep its default attributes (like Armor and Toughness values).

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.withAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[], preserveDefaults as boolean) as IItemStack

myFabricItemStack.withAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 10, AttributeOperation.ADDITION, [<equipmentslot:chest>], true);
```

| Параметр         | Тип                                                                    | Описание                                                                            | Optional | DefaultValue |
| ---------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- | ------------ |
| attribute        | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                                                      | false    |              |
| name             | string                                                                 | The name of the modifier.                                                           | false    |              |
| value            | double                                                                 | The value of the modifier.                                                          | false    |              |
| operation        | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.                                                      | false    |              |
| slotTypes        | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for.                                               | false    |              |
| preserveDefaults | boolean                                                                | Should the default Item Attribute Modifiers be preserved when adding this modifier. | true     | false        |


:::

:::group{name=withAttributeModifier}

Adds an AttributeModifier to this IItemStack using a specific UUID.

 The UUID can be used to override an existing attribute on an ItemStack with this new modifier. You can use `/ct hand attributes` to get the UUID of the attributes on an ItemStack.

 Attributes added with this method will only appear on this specific IItemStack.

 By defaults, adding a modifier will remove the default Attribute Modifiers on the Item, like the Diamond Chestplate's Armor and Toughness values. When `preserveDefaults` is set to true (by default it is false.), the default Attribute Modifiers will be preserved when adding this modifier. This means that if you were adding the `forge:nametag_distance` attribute to an Item, it would keep its default attributes (like Armor and Toughness values).

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.withAttributeModifier(attribute as Attribute, uuid as string, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[], preserveDefaults as boolean) as IItemStack

myFabricItemStack.withAttributeModifier(<attribute:minecraft:generic.attack_damage>, "8c1b5535-9f79-448b-87ae-52d81480aaa3", "Extra Power", 10, AttributeOperation.ADDITION, [<equipmentslot:chest>], true);
```

| Параметр         | Тип                                                                    | Описание                                                                            | Optional | DefaultValue |
| ---------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- | ------------ |
| attribute        | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                                                      | false    |              |
| uuid             | string                                                                 | The unique identifier of the modifier to replace.                                   | false    |              |
| name             | string                                                                 | The name of the modifier.                                                           | false    |              |
| value            | double                                                                 | The value of the modifier.                                                          | false    |              |
| operation        | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.                                                      | false    |              |
| slotTypes        | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for.                                               | false    |              |
| preserveDefaults | boolean                                                                | Should the default Item Attribute Modifiers be preserved when adding this modifier. | true     | false        |


:::

:::group{name=withDamage}

Sets the damage of the ItemStack

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.withDamage(damage as int) as IItemStack

myFabricItemStack.withDamage(10);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| damage   | int | the new damage value |


:::

:::group{name=withDisplayName}

Sets the display name of the ItemStack

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
FabricItemStack.withDisplayName(text as Component) as IItemStack
```

| Параметр | Тип                                      | Описание               |
| -------- | ---------------------------------------- | ---------------------- |
| текст    | [Component](/vanilla/api/text/Component) | New name of the stack. |


:::

:::group{name=withEnchantment}

Enchants this IItemStack with the given Enchantment.

Returns: This itemStack if it is mutable, a new one with the enchantment added otherwise  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.withEnchantment(enchantment as Enchantment, level as int) as IItemStack

myFabricItemStack.withEnchantment(<enchantment:minecraft:riptide>, 2);
```

| Параметр    | Тип                                                      | Описание                     | Optional | DefaultValue |
| ----------- | -------------------------------------------------------- | ---------------------------- | -------- | ------------ |
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment to add.      | false    |              |
| level       | int                                                      | The level of the enchantment | true     | 1            |


:::

:::group{name=withTag}

Sets the tag for the ItemStack.

Returns: This itemStack if it is mutable, a new one with the changed property otherwise  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.withTag(tag as MapData) as IItemStack

myFabricItemStack.withTag({Display: {lore: ["Hello"]}});
```

| Параметр | Тип                                  | Описание        |
| -------- | ------------------------------------ | --------------- |
| tag      | [MapData](/vanilla/api/data/MapData) | The tag to set. |


:::

:::group{name=withoutTag}

Removes the tag from this ItemStack.

Returns: This itemStack if it is mutable, a new one with the changed property otherwise  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.withoutTag() as IItemStack

myFabricItemStack.withoutTag();
```

:::


## Операторы

:::group{name=CONTAINS}

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myFabricItemStack
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in myFabricItemStack
```

:::

:::group{name=MOD}

```zenscript
myFabricItemStack % percentage as double
```

:::

:::group{name=MUL}

Use this in contexts where machines accept more than one item to state that fact.

```zenscript
myFabricItemStack * amount as int
```

:::

:::group{name=OR}

```zenscript
myFabricItemStack | other as IIngredient
```

:::


## Свойства

| Название           | Тип                                                            | Имеет Getter | Имеет Setter | Описание                                                                                                                                                          |
| ------------------ | -------------------------------------------------------------- | ------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| amount             | int                                                            | true         | false        | Gets the amount of Items in the ItemStack                                                                                                                         |
| burnTime           | void                                                           | false        | true         | Sets the burn time of this ingredient, for use in the furnace and other machines                                                                                  |
| commandString      | string                                                         | true         | false        | Returns the BEP to get this stack                                                                                                                                 |
| damage             | int                                                            | true         | false        | No Description Provided                                                                                                                                           |
| damageableItem     | boolean                                                        | true         | false        | Returns if the ItemStack is damageable <br />  I.E Swords and tools are damageable, sticks are not.                                                         |
| damaged            | boolean                                                        | true         | false        | Returns if the ItemStack is damaged <br />  I.E a Swords that is no at full durability is damaged.                                                          |
| definition         | [ItemDefinition](/vanilla/api/item/ItemDefinition)             | true         | false        | No Description Provided                                                                                                                                           |
| descriptionId      | string                                                         | true         | false        | Returns the unlocalized Name of the Item in the ItemStack                                                                                                         |
| displayName        | [Component](/vanilla/api/text/Component)                       | true         | false        | Gets the display name of the ItemStack                                                                                                                            |
| empty              | boolean                                                        | true         | false        | Returns if the ItemStack is empty                                                                                                                                 |
| enchantments       | int?[[Enchantment](/vanilla/api/item/enchantment/Enchantment)] | true         | true         | No Description Provided                                                                                                                                           |
| fireResistant      | void                                                           | true         | true         | Sets if this IItemStack is immune to fire / lava. <br />  <br />  If true, the item will not burn when thrown into fire or lava.                      |
| food               | [FoodProperties](/vanilla/api/food/FoodProperties)             | true         | true         | No Description Provided                                                                                                                                           |
| getBaseRepairCost  | int                                                            | true         | false        | Gets the base repair cost of the ItemStack, or 0 if no repair is defined.                                                                                         |
| getOrCreate        | [MapData](/vanilla/api/data/MapData)                           | true         | false        | Returns the NBT tag attached to this ItemStack or makes a new tag.                                                                                                |
| hasCustomHoverName | boolean                                                        | true         | false        | Returns true if the ItemStack has a display name.                                                                                                                 |
| hasFoil            | boolean                                                        | true         | false        | Returns true if this ItemStack has a foil effect. <br />  <br />  Foil is the glint / effect that is added to enchanted ItemStacks (and other items). |
| hasTag             | boolean                                                        | true         | false        | Returns true if this ItemStack has a Tag                                                                                                                          |
| isEnchantable      | boolean                                                        | true         | false        | Can this ItemStack be enchanted?                                                                                                                                  |
| isEnchanted        | boolean                                                        | true         | false        | Is this ItemStack enchanted?                                                                                                                                      |
| isImmutable        | boolean                                                        | true         | false        | No Description Provided                                                                                                                                           |
| isMutable          | boolean                                                        | true         | false        | No Description Provided                                                                                                                                           |
| items              | [IItemStack](/vanilla/api/item/IItemStack)[]                   | true         | false        | No Description Provided                                                                                                                                           |
| maxDamage          | int                                                            | true         | true         | Returns the max damage of the ItemStack <br />  This is the max durability of the ItemStack.                                                                |
| maxStackSize       | int                                                            | true         | true         | Returns the max stack size of the Item in the ItemStack                                                                                                           |
| owner              | string                                                         | true         | false        | Gets owning mod for the Item in this IItemStack                                                                                                                   |
| rarity             | [Rarity](/vanilla/api/item/property/Rarity)                    | true         | true         | Returns the rarity of the Item in the ItemStack                                                                                                                   |
| registryName       | [ResourceLocation](/vanilla/api/resource/ResourceLocation)     | true         | false        | Gets the registry name for the Item in this IItemStack                                                                                                            |
| stackable          | boolean                                                        | true         | false        | Returns if the ItemStack can have an amount greater than 1 <br />  I.E Swords and tools are not stackable, sticks are.                                      |
| tag                | [MapData](/vanilla/api/data/MapData)                           | true         | false        | Returns the NBT tag attached to this ItemStack.                                                                                                                   |
| useDuration        | int                                                            | true         | false        | Gets the use duration of the ItemStack                                                                                                                            |
| useOnRelease       | boolean                                                        | true         | false        | Returns true if this stack is considered a crossbow item                                                                                                          |

