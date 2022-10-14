# FabricItemStack

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.FabricItemStack;
```


## Implemented Interfaces
FabricItemStack implements the following interfaces. That means all methods defined in these interfaces are also available in FabricItemStack

- [IItemStack](/vanilla/api/item/IItemStack)

## Static Properties

| Nombre                    | Type        | Has Getter | Has Setter |
| ------------------------- | ----------- | ---------- | ---------- |
| BASE_ATTACK_DAMAGE_UUID | **invalid** | true       | false      |
| BASE_ATTACK_SPEED_UUID  | **invalid** | true       | false      |
| CRAFTTWEAKER_DATA_KEY   | string      | true       | false      |

## Casters

| Result Type                                                                                                       | Is Implicit |
| ----------------------------------------------------------------------------------------------------------------- | ----------- |
| [IData](/vanilla/api/data/IData)                                                                                  | true        |
| [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)                                            | true        |
| [ItemDefinition](/vanilla/api/item/ItemDefinition)                                                                | true        |
| [Pila de objetos](/vanilla/api/item/ItemStack)                                                                    | true        |
| [MapData](/vanilla/api/data/MapData)                                                                              | true        |
| [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | true        |

## Methods

:::group{name=addGlobalAttributeModifier}

Adds an AttributeModifier to this IIngredient.

 Attributes added with this method appear on all ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to have the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withAttributeModifier

```zenscript
// FabricItemStack.addGlobalAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[])

myFabricItemStack.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
```

| Parameter | Type                                                                   | Description                           |
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

```zenscript
// FabricItemStack.addGlobalAttributeModifier(attribute as Attribute, uuid as invalid, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[])

myFabricItemStack.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, IItemStack.BASE_ATTACK_DAMAGE_UUID, "Extra Power", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
```

| Parameter | Type                                                                   | Description                                       |
| --------- | ---------------------------------------------------------------------- | ------------------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                    |
| uuid      | **invalid**                                                            | The unique identifier of the modifier to replace. |
| name      | string                                                                 | The name of the modifier.                         |
| value     | double                                                                 | The value of the modifier.                        |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.                    |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for.             |


:::

:::group{name=addGlobalAttributeModifier}

Adds an AttributeModifier to this IIngredient using a specific UUID.

 The UUID can be used to override an existing attribute on an ItemStack with this new modifier. You can use `/ct hand attributes` to get the UUID of the attributes on an ItemStack.

 Attributes added with this method appear on all ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to have the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withAttributeModifier

```zenscript
// FabricItemStack.addGlobalAttributeModifier(attribute as Attribute, uuid as string, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[])

myFabricItemStack.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "8c1b5535-9f79-448b-87ae-52d81480aaa3", "Extra Power", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
```

| Parameter | Type                                                                   | Description                                       |
| --------- | ---------------------------------------------------------------------- | ------------------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                    |
| uuid      | string                                                                 | The unique identifier of the modifier to replace. |
| name      | string                                                                 | The name of the modifier.                         |
| value     | double                                                                 | The value of the modifier.                        |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.                    |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for.             |


:::

:::group{name=addShiftTooltip}

```zenscript
FabricItemStack.addShiftTooltip(content as Component, showMessage as Component)
```

| Parameter   | Type                                     | Optional |
| ----------- | ---------------------------------------- | -------- |
| contenido   | [Component](/vanilla/api/text/Component) | false    |
| showMessage | [Component](/vanilla/api/text/Component) | true     |


:::

:::group{name=addTooltip}

```zenscript
FabricItemStack.addTooltip(content as Component)
```

| Parameter | Type                                     |
| --------- | ---------------------------------------- |
| contenido | [Component](/vanilla/api/text/Component) |


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

```zenscript
FabricItemStack.clearTooltip(leaveName as boolean)
```

| Parameter | Type    | Optional | Default Value |
| --------- | ------- | -------- | ------------- |
| leaveName | boolean | true     | false         |


:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
// FabricItemStack.contains(ingredient as IIngredient) as boolean

myFabricItemStack.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| Parameter  | Type                                               | Description             |
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

myFabricItemStack.getAttributes(<constant:minecraft:equipmentslot:chest>);
```

| Parameter | Type                                                         | Description                         |
| --------- | ------------------------------------------------------------ | ----------------------------------- |
| slotType  | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | The slot to get the Attributes for. |


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

| Parameter   | Type                                                     |
| ----------- | -------------------------------------------------------- |
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) |


:::

:::group{name=getEnchantments}

Return Type: int?[[Enchantment](/vanilla/api/item/enchantment/Enchantment)]

```zenscript
// FabricItemStack.getEnchantments() as int?[Enchantment]

myFabricItemStack.getEnchantments();
```

:::

:::group{name=getFood}

Return Type: [FoodProperties](/vanilla/api/food/FoodProperties)?

```zenscript
// FabricItemStack.getFood() as FoodProperties?

myFabricItemStack.getFood();
```

:::

:::group{name=getHoverName}

Gets the hover name of the ItemStack.

 This will give the raw name without the formatting that 'displayName' applies.

Returns: The hover name of the ItemStack.  
Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// FabricItemStack.getHoverName() as Component

myFabricItemStack.getHoverName();
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

:::group{name=getOrCreateTag}

Returns the NBT tag attached to this ItemStack or makes a new tag.

Returns: MapData of the ItemStack NBT Tag, empty tag if it doesn't exist.  
Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
// FabricItemStack.getOrCreateTag() as MapData

myFabricItemStack.getOrCreateTag();
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

| Parameter | Type                                       | Description                               |
| --------- | ------------------------------------------ | ----------------------------------------- |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | The stack to provide for this ingredient. |


:::

:::group{name=grow}

Grows this IItemStack's stack size by the given amount, or 1 if no amount is given.

Returns: This IItemStack if mutable, a new one with the new amount otherwise.  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.grow(amount as int) as IItemStack

myFabricItemStack.grow(2);
```

| Parameter | Type | Description            | Optional | Default Value |
| --------- | ---- | ---------------------- | -------- | ------------- |
| amount    | int  | The amount to grow by. | true     | 1             |


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

| Parameter | Type                                       | Description        |
| --------- | ------------------------------------------ | ------------------ |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | The stack to check |


:::

:::group{name=modifyShiftTooltip}

```zenscript
FabricItemStack.modifyShiftTooltip(shiftedFunction as ITooltipFunction, unshiftedFunction as ITooltipFunction)
```

| Parameter         | Type                                                           | Optional |
| ----------------- | -------------------------------------------------------------- | -------- |
| shiftedFunction   | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | false    |
| unshiftedFunction | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | true     |


:::

:::group{name=modifyTooltip}

```zenscript
FabricItemStack.modifyTooltip(function as ITooltipFunction)
```

| Parameter | Type                                                           |
| --------- | -------------------------------------------------------------- |
| function  | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) |


:::

:::group{name=mul}

Use this in contexts where machines accept more than one item to state that fact.

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
FabricItemStack.mul(amount as int) as IIngredientWithAmount
```

| Parameter | Type |
| --------- | ---- |
| amount    | int  |


:::

:::group{name=only}

Use this if you already have the condition from another ingredient

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
FabricItemStack.only(condition as IIngredientCondition<IIngredient>) as IngredientConditioned<IIngredient>
```

| Parameter | Type                                                                                                                                                 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| condition | [IIngredientCondition](/vanilla/api/ingredient/condition/IIngredientCondition)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt; |


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

| Parameter | Type |
| --------- | ---- |
| minDamage | int  |


:::

:::group{name=onlyDamagedAtMost}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
FabricItemStack.onlyDamagedAtMost(maxDamage as int) as IngredientConditioned<IIngredient>
```

| Parameter | Type |
| --------- | ---- |
| maxDamage | int  |


:::

:::group{name=onlyIf}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
FabricItemStack.onlyIf(uid as string, function as Predicate<IItemStack>) as IngredientConditioned<IIngredient>
```

| Parameter | Type                                                                    | Optional |
| --------- | ----------------------------------------------------------------------- | -------- |
| uid       | string                                                                  | false    |
| function  | Predicate&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | true     |


:::

:::group{name=percent}

Return Type: [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
FabricItemStack.percent(percentage as double) as Percentaged<IItemStack>
```

| Parameter  | Type   |
| ---------- | ------ |
| percentage | double |


:::

:::group{name=removeEnchantment}

Removes the given enchantment from this IItemStack.

Returns: This itemStack if it is mutable, a new one with the enchantment removed otherwise  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.removeEnchantment(enchantment as Enchantment) as IItemStack

myFabricItemStack.removeEnchantment(<enchantment:minecraft:riptide>);
```

| Parameter   | Type                                                     | Description                |
| ----------- | -------------------------------------------------------- | -------------------------- |
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment to remove. |


:::

:::group{name=removeGlobalAttribute}

Removes all AttributeModifiers that use the given Attribute from this IIngredient.

 Attributes removed with this method are removed from ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to remove the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withoutAttribute.

 This method can only remove default Attributes from an ItemStack, it is still possible that an ItemStack can override it.

```zenscript
// FabricItemStack.removeGlobalAttribute(attribute as Attribute, slotTypes as EquipmentSlot[])

myFabricItemStack.removeGlobalAttribute(<attribute:minecraft:generic.attack_damage>, [<constant:minecraft:equipmentslot:chest>]);
```

| Parameter | Type                                                           | Description                       |
| --------- | -------------------------------------------------------------- | --------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)           | The attribute to remove.          |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from. |


:::

:::group{name=removeGlobalAttributeModifier}

Removes all AttributeModifiers who's ID is the same as the given uuid from this IIngredient.

```zenscript
// FabricItemStack.removeGlobalAttributeModifier(uuid as invalid, slotTypes as EquipmentSlot[])

myFabricItemStack.removeGlobalAttributeModifier(IItemStack.BASE_ATTACK_DAMAGE_UUID, [<constant:minecraft:equipmentslot:chest>]);
```

| Parameter | Type                                                           | Description                                       |
| --------- | -------------------------------------------------------------- | ------------------------------------------------- |
| uuid      | **invalid**                                                    | The unique id of the AttributeModifier to remove. |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from.                 |


:::

:::group{name=removeGlobalAttributeModifier}

Removes all AttributeModifiers who's ID is the same as the given uuid from this IIngredient.

```zenscript
// FabricItemStack.removeGlobalAttributeModifier(uuid as string, slotTypes as EquipmentSlot[])

myFabricItemStack.removeGlobalAttributeModifier("8c1b5535-9f79-448b-87ae-52d81480aaa3", [<constant:minecraft:equipmentslot:chest>]);
```

| Parameter | Type                                                           | Description                                       |
| --------- | -------------------------------------------------------------- | ------------------------------------------------- |
| uuid      | string                                                         | The unique id of the AttributeModifier to remove. |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from.                 |


:::

:::group{name=removeTooltip}

```zenscript
FabricItemStack.removeTooltip(regex as string)
```

| Parameter | Type   |
| --------- | ------ |
| regex     | string |


:::

:::group{name=resetHoverName}

Clears any custom name set for this ItemStack

```zenscript
// FabricItemStack.resetHoverName()

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

:::group{name=setBurnTime}

Sets the burn time of this ingredient, for use in the furnace and other machines

```zenscript
// FabricItemStack.setBurnTime(time as int)

myFabricItemStack.setBurnTime(500);
```

| Parameter | Type | Description       |
| --------- | ---- | ----------------- |
| time      | int  | the new burn time |


:::

:::group{name=setEnchantments}

Sets the enchantments on this IItemStack.

Returns: This itemStack if it is mutable, a new one with the enchantments otherwise  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
FabricItemStack.setEnchantments(enchantments as int?[Enchantment]) as IItemStack
```

| Parameter    | Type                                                           | Description          |
| ------------ | -------------------------------------------------------------- | -------------------- |
| enchantments | int?[[Enchantment](/vanilla/api/item/enchantment/Enchantment)] | The new enchantments |


:::

:::group{name=setFireResistant}

Sets if this IItemStack is immune to fire / lava.

 If true, the item will not burn when thrown into fire or lava.

```zenscript
FabricItemStack.setFireResistant(fireResistant as boolean)
```

| Parameter     | Type    | Description                        |
| ------------- | ------- | ---------------------------------- |
| fireResistant | boolean | Should the item be immune to fire. |


:::

:::group{name=setFood}

```zenscript
FabricItemStack.setFood(food as FoodProperties?)
```

| Parameter | Type                                                |
| --------- | --------------------------------------------------- |
| food      | [FoodProperties](/vanilla/api/food/FoodProperties)? |


:::

:::group{name=setMaxStackSize}

Sets the max stacksize of the Item.

```zenscript
// FabricItemStack.setMaxStackSize(newMaxStackSize as int)

myFabricItemStack.setMaxStackSize(16);
```

| Parameter       | Type | Description                         |
| --------------- | ---- | ----------------------------------- |
| newMaxStackSize | int  | The new max stack size of the Item. |


:::

:::group{name=setRarity}

Sets the rarity of the Item.

```zenscript
// FabricItemStack.setRarity(newRarity as Rarity)

myFabricItemStack.setRarity(Rarity.UNCOMMON);
```

| Parameter | Type                                        | Description                 |
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

| Parameter | Type | Description              | Optional | Default Value |
| --------- | ---- | ------------------------ | -------- | ------------- |
| amount    | int  | The amount to shrink by. | true     | 1             |


:::

:::group{name=transform}

Use this if you already have the transformer from another ingredient

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
FabricItemStack.transform(transformer as IIngredientTransformer<IIngredient>) as IIngredientTransformed<IIngredient>
```

| Parameter     | Type                                                                                                                                                     |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| transformador | [IIngredientTransformer](/vanilla/api/ingredient/transform/IIngredientTransformer)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt; |


:::

:::group{name=transformCustom}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
FabricItemStack.transformCustom(uid as string, function as Function<IItemStack,IItemStack>) as IIngredientTransformed<IIngredient>
```

| Parameter | Type                                                                                                              | Optional |
| --------- | ----------------------------------------------------------------------------------------------------------------- | -------- |
| uid       | string                                                                                                            | false    |
| function  | Function&lt;[IItemStack](/vanilla/api/item/IItemStack),[IItemStack](/vanilla/api/item/IItemStack)&gt; | true     |


:::

:::group{name=transformDamage}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
FabricItemStack.transformDamage(amount as int) as IIngredientTransformed<IIngredient>
```

| Parameter | Type | Optional | Default Value |
| --------- | ---- | -------- | ------------- |
| amount    | int  | true     | 1             |


:::

:::group{name=transformReplace}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
FabricItemStack.transformReplace(replaceWith as IItemStack) as IIngredientTransformed<IIngredient>
```

| Parameter   | Type                                       |
| ----------- | ------------------------------------------ |
| replaceWith | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=withAttributeModifier}

Adds an AttributeModifier to this IItemStack.

 The UUID can be used to override an existing attribute on an ItemStack with this new modifier. You can use `/ct hand attributes` to get the UUID of the attributes on an ItemStack.

 Attributes added with this method will only appear on this specific IItemStack.

 By defaults, adding a modifier will remove the default Attribute Modifiers on the Item, like the Diamond Chestplate's Armor and Toughness values. When `preserveDefaults` is set to true (by default it is false.), the default Attribute Modifiers will be preserved when adding this modifier. This means that if you were adding the `forge:nametag_distance` attribute to an Item, it would keep its default attributes (like Armor and Toughness values).

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.withAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[], preserveDefaults as boolean) as IItemStack

myFabricItemStack.withAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>], true);
```

| Parameter        | Type                                                                   | Description                                                                         | Optional | Default Value |
| ---------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- | ------------- |
| attribute        | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                                                      | false    |               |
| name             | string                                                                 | The name of the modifier.                                                           | false    |               |
| value            | double                                                                 | The value of the modifier.                                                          | false    |               |
| operation        | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.                                                      | false    |               |
| slotTypes        | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for.                                               | false    |               |
| preserveDefaults | boolean                                                                | Should the default Item Attribute Modifiers be preserved when adding this modifier. | true     | false         |


:::

:::group{name=withAttributeModifier}

Adds an AttributeModifier to this IItemStack using a specific UUID.

 The UUID can be used to override an existing attribute on an ItemStack with this new modifier. You can use `/ct hand attributes` to get the UUID of the attributes on an ItemStack.

 Attributes added with this method will only appear on this specific IItemStack.

 By defaults, adding a modifier will remove the default Attribute Modifiers on the Item, like the Diamond Chestplate's Armor and Toughness values. When `preserveDefaults` is set to true (by default it is false.), the default Attribute Modifiers will be preserved when adding this modifier. This means that if you were adding the `forge:nametag_distance` attribute to an Item, it would keep its default attributes (like Armor and Toughness values).

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.withAttributeModifier(attribute as Attribute, uuid as invalid, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[], preserveDefaults as boolean) as IItemStack

myFabricItemStack.withAttributeModifier(<attribute:minecraft:generic.attack_damage>, "8c1b5535-9f79-448b-87ae-52d81480aaa3", "Extra Power", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>], true);
```

| Parameter        | Type                                                                   | Description                                                                         | Optional | Default Value |
| ---------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- | ------------- |
| attribute        | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                                                      | false    |               |
| uuid             | **invalid**                                                            | The unique identifier of the modifier to replace.                                   | false    |               |
| name             | string                                                                 | The name of the modifier.                                                           | false    |               |
| value            | double                                                                 | The value of the modifier.                                                          | false    |               |
| operation        | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.                                                      | false    |               |
| slotTypes        | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for.                                               | false    |               |
| preserveDefaults | boolean                                                                | Should the default Item Attribute Modifiers be preserved when adding this modifier. | true     | false         |


:::

:::group{name=withAttributeModifier}

Adds an AttributeModifier to this IItemStack using a specific UUID.

 The UUID can be used to override an existing attribute on an ItemStack with this new modifier. You can use `/ct hand attributes` to get the UUID of the attributes on an ItemStack.

 Attributes added with this method will only appear on this specific IItemStack.

 By defaults, adding a modifier will remove the default Attribute Modifiers on the Item, like the Diamond Chestplate's Armor and Toughness values. When `preserveDefaults` is set to true (by default it is false.), the default Attribute Modifiers will be preserved when adding this modifier. This means that if you were adding the `forge:nametag_distance` attribute to an Item, it would keep its default attributes (like Armor and Toughness values).

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.withAttributeModifier(attribute as Attribute, uuid as string, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[], preserveDefaults as boolean) as IItemStack

myFabricItemStack.withAttributeModifier(<attribute:minecraft:generic.attack_damage>, "8c1b5535-9f79-448b-87ae-52d81480aaa3", "Extra Power", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>], true);
```

| Parameter        | Type                                                                   | Description                                                                         | Optional | Default Value |
| ---------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- | ------------- |
| attribute        | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                                                      | false    |               |
| uuid             | string                                                                 | The unique identifier of the modifier to replace.                                   | false    |               |
| name             | string                                                                 | The name of the modifier.                                                           | false    |               |
| value            | double                                                                 | The value of the modifier.                                                          | false    |               |
| operation        | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.                                                      | false    |               |
| slotTypes        | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for.                                               | false    |               |
| preserveDefaults | boolean                                                                | Should the default Item Attribute Modifiers be preserved when adding this modifier. | true     | false         |


:::

:::group{name=withDamage}

Sets the damage of the ItemStack

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.withDamage(damage as int) as IItemStack

myFabricItemStack.withDamage(10);
```

| Parameter | Type | Description          |
| --------- | ---- | -------------------- |
| damage    | int  | the new damage value |


:::

:::group{name=withDisplayName}

Sets the display name of the ItemStack

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.withDisplayName(name as Component) as IItemStack

myFabricItemStack.withDisplayName("totally not dirt");
```

| Parameter | Type                                     | Description            |
| --------- | ---------------------------------------- | ---------------------- |
| name      | [Component](/vanilla/api/text/Component) | New name of the stack. |


:::

:::group{name=withEnchantment}

Enchants this IItemStack with the given Enchantment.

Returns: This itemStack if it is mutable, a new one with the enchantment added otherwise  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.withEnchantment(enchantment as Enchantment, level as int) as IItemStack

myFabricItemStack.withEnchantment(<enchantment:minecraft:riptide>, 2);
```

| Parameter   | Type                                                     | Description                  | Optional | Default Value |
| ----------- | -------------------------------------------------------- | ---------------------------- | -------- | ------------- |
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment to add.      | false    |               |
| level       | int                                                      | The level of the enchantment | true     | 1             |


:::

:::group{name=withLore}

Sets the lore of the ItemStack

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.withLore(lore as Component?[]) as IItemStack

myFabricItemStack.withLore(new crafttweaker.api.text.TextComponent("I am the lore I speak for the trees"););
```

| Parameter | Type                                        | Description                    |
| --------- | ------------------------------------------- | ------------------------------ |
| lore      | [Component](/vanilla/api/text/Component)?[] | the new Lore of the ItemStack. |


:::

:::group{name=withTag}

Sets the tag for the ItemStack.

Returns: This itemStack if it is mutable, a new one with the changed property otherwise  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// FabricItemStack.withTag(tag as MapData) as IItemStack

myFabricItemStack.withTag({Display: {lore: ["Hello"]}});
```

| Parameter | Type                                 | Description     |
| --------- | ------------------------------------ | --------------- |
| tag       | [MapData](/vanilla/api/data/MapData) | The tag to set. |


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


## Operadores

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


## Properties

| Nombre             | Type                                                           | Has Getter | Has Setter | Description                                                                                                                                                       |
| ------------------ | -------------------------------------------------------------- | ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| amount             | int                                                            | true       | false      | Gets the amount of Items in the ItemStack                                                                                                                         |
| baseRepairCost     | int                                                            | true       | false      | Gets the base repair cost of the ItemStack, or 0 if no repair is defined.                                                                                         |
| burnTime           | void                                                           | false      | true       | Sets the burn time of this ingredient, for use in the furnace and other machines                                                                                  |
| commandString      | string                                                         | true       | false      | Returns the BEP to get this stack                                                                                                                                 |
| damage             | int                                                            | true       | false      |                                                                                                                                                                   |
| damageableItem     | boolean                                                        | true       | false      | Returns if the ItemStack is damageable <br />  I.E Swords and tools are damageable, sticks are not.                                                         |
| damaged            | boolean                                                        | true       | false      | Returns if the ItemStack is damaged <br />  I.E a Swords that is no at full durability is damaged.                                                          |
| definition         | [ItemDefinition](/vanilla/api/item/ItemDefinition)             | true       | false      |                                                                                                                                                                   |
| descriptionId      | string                                                         | true       | false      | Returns the unlocalized Name of the Item in the ItemStack                                                                                                         |
| displayName        | [Component](/vanilla/api/text/Component)                       | true       | false      | Gets the display name of the ItemStack                                                                                                                            |
| enchantments       | int?[[Enchantment](/vanilla/api/item/enchantment/Enchantment)] | true       | true       |                                                                                                                                                                   |
| fireResistant      | boolean                                                        | true       | true       | Checks if this IItemStack burns when thrown into fire / lava or damaged by fire.                                                                                  |
| food               | [FoodProperties](/vanilla/api/food/FoodProperties)?            | true       | true       |                                                                                                                                                                   |
| hasCustomHoverName | boolean                                                        | true       | false      | Returns true if the ItemStack has a display name.                                                                                                                 |
| hasFoil            | boolean                                                        | true       | false      | Returns true if this ItemStack has a foil effect. <br />  <br />  Foil is the glint / effect that is added to enchanted ItemStacks (and other items). |
| hasTag             | boolean                                                        | true       | false      | Returns true if this ItemStack has a Tag                                                                                                                          |
| hoverName          | [Component](/vanilla/api/text/Component)                       | true       | false      | Gets the hover name of the ItemStack. <br />  <br />  This will give the raw name without the formatting that 'displayName' applies.                  |
| isEdible           | boolean                                                        | true       | false      |                                                                                                                                                                   |
| isEnchantable      | boolean                                                        | true       | false      | Can this ItemStack be enchanted?                                                                                                                                  |
| isEnchanted        | boolean                                                        | true       | false      | Is this ItemStack enchanted?                                                                                                                                      |
| isImmutable        | boolean                                                        | true       | false      |                                                                                                                                                                   |
| isMutable          | boolean                                                        | true       | false      |                                                                                                                                                                   |
| items              | [IItemStack](/vanilla/api/item/IItemStack)[]                   | true       | false      |                                                                                                                                                                   |
| maxDamage          | int                                                            | true       | true       | Returns the max damage of the ItemStack <br />  This is the max durability of the ItemStack.                                                                |
| maxStackSize       | int                                                            | true       | true       | Returns the max stack size of the Item in the ItemStack                                                                                                           |
| owner              | string                                                         | true       | false      | Gets owning mod for the Item in this IItemStack                                                                                                                   |
| rarity             | [Rarity](/vanilla/api/item/property/Rarity)                    | true       | true       | Returns the rarity of the Item in the ItemStack                                                                                                                   |
| registryName       | [ResourceLocation](/vanilla/api/resource/ResourceLocation)     | true       | false      | Gets the registry name for the Item in this IItemStack                                                                                                            |
| stackable          | boolean                                                        | true       | false      | Returns if the ItemStack can have an amount greater than 1 <br />  I.E Swords and tools are not stackable, sticks are.                                      |
| tag                | [MapData](/vanilla/api/data/MapData)?                          | true       | false      | Returns the NBT tag attached to this ItemStack.                                                                                                                   |
| useDuration        | int                                                            | true       | false      | Gets the use duration of the ItemStack                                                                                                                            |
| useOnRelease       | boolean                                                        | true       | false      | Returns true if this stack is considered a crossbow item                                                                                                          |

