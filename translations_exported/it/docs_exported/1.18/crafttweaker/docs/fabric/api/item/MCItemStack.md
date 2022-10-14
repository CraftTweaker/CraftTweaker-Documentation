# MCItemStack

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCItemStack;
```


## Interfacce Implementate
MCItemStack implements the following interfaces. That means all methods defined in these interfaces are also available in MCItemStack

- [FabricItemStack](/fabric/api/item/FabricItemStack)

## Static Properties

| Nome                      | Tipo        | Ha Getter | Ha Setter |
| ------------------------- | ----------- | --------- | --------- |
| BASE_ATTACK_DAMAGE_UUID | **invalid** | sì        | no        |
| BASE_ATTACK_SPEED_UUID  | **invalid** | sì        | no        |
| CRAFTTWEAKER_DATA_KEY   | string      | sì        | no        |

## Caster

| Result Type                                                                                                       | Implicito |
| ----------------------------------------------------------------------------------------------------------------- | --------- |
| [IData](/vanilla/api/data/IData)                                                                                  | sì        |
| [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)                                            | sì        |
| [ItemDefinition](/vanilla/api/item/ItemDefinition)                                                                | sì        |
| [MapData](/vanilla/api/data/MapData)                                                                              | sì        |
| [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | sì        |

## Metodi

:::group{name=addGlobalAttributeModifier}

Adds an AttributeModifier to this IIngredient.

 Attributes added with this method appear on all ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to have the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withAttributeModifier

```zenscript
// MCItemStack.addGlobalAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[])

myMCItemStack.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
```

| Parametro | Tipo                                                                   | Descrizione                           |
| --------- | ---------------------------------------------------------------------- | ------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.        |
| nome      | string                                                                 | The name of the modifier.             |
| valore    | double                                                                 | The value of the modifier.            |
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

| Parametro | Tipo                                                                   | Descrizione                                       |
| --------- | ---------------------------------------------------------------------- | ------------------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                    |
| uuid      | **invalid**                                                            | The unique identifier of the modifier to replace. |
| nome      | string                                                                 | The name of the modifier.                         |
| valore    | double                                                                 | The value of the modifier.                        |
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

| Parametro | Tipo                                                                   | Descrizione                                       |
| --------- | ---------------------------------------------------------------------- | ------------------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                    |
| uuid      | string                                                                 | The unique identifier of the modifier to replace. |
| nome      | string                                                                 | The name of the modifier.                         |
| valore    | double                                                                 | The value of the modifier.                        |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.                    |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for.             |


:::

:::group{name=addShiftTooltip}

```zenscript
MCItemStack.addShiftTooltip(content as Component, showMessage as Component)
```

| Parametro   | Tipo                                     | Optional |
| ----------- | ---------------------------------------- | -------- |
| contenuto   | [Component](/vanilla/api/text/Component) | no       |
| showMessage | [Component](/vanilla/api/text/Component) | sì       |


:::

:::group{name=addTooltip}

```zenscript
MCItemStack.addTooltip(content as Component)
```

| Parametro | Tipo                                     |
| --------- | ---------------------------------------- |
| contenuto | [Component](/vanilla/api/text/Component) |


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

| Parametro | Tipo    | Optional | Default Value |
| --------- | ------- | -------- | ------------- |
| leaveName | boolean | sì       | no            |


:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
// MCItemStack.contains(ingredient as IIngredient) as boolean

myMCItemStack.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| Parametro  | Tipo                                               | Descrizione             |
| ---------- | -------------------------------------------------- | ----------------------- |
| ingredient | [IIngredient](/vanilla/api/ingredient/IIngredient) | The ingredient to check |


:::

:::group{name=getAttributes}

Gets the Attributes and the AttributeModifiers on this IItemStack for the given EquipmentSlot

Returns: A Map of Attribute to a List of AttributeModifier for the given EquipmentSlot.  
Return Type: stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt;[[Attribute](/vanilla/api/entity/attribute/Attribute)]

```zenscript
// MCItemStack.getAttributes(slotType as EquipmentSlot) as stdlib.List<AttributeModifier>[Attribute]

myMCItemStack.getAttributes(<constant:minecraft:equipmentslot:chest>);
```

| Parametro | Tipo                                                         | Descrizione                         |
| --------- | ------------------------------------------------------------ | ----------------------------------- |
| slotType  | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | The slot to get the Attributes for. |


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

| Parametro   | Tipo                                                     |
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
Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
// MCItemStack.getOrCreateTag() as MapData

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

:::group{name=getRemainingItem}

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.getRemainingItem(stack as IItemStack) as IItemStack

myMCItemStack.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                       | Descrizione                               |
| --------- | ------------------------------------------ | ----------------------------------------- |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | The stack to provide for this ingredient. |


:::

:::group{name=grow}

Grows this IItemStack's stack size by the given amount, or 1 if no amount is given.

Returns: This IItemStack if mutable, a new one with the new amount otherwise.  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.grow(amount as int) as IItemStack

myMCItemStack.grow(2);
```

| Parametro | Tipo | Descrizione            | Optional | Default Value |
| --------- | ---- | ---------------------- | -------- | ------------- |
| amount    | int  | The amount to grow by. | sì       | 1             |


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

| Parametro | Tipo                                       | Descrizione        |
| --------- | ------------------------------------------ | ------------------ |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | The stack to check |


:::

:::group{name=modifyShiftTooltip}

```zenscript
MCItemStack.modifyShiftTooltip(shiftedFunction as ITooltipFunction, unshiftedFunction as ITooltipFunction)
```

| Parametro         | Tipo                                                           | Optional |
| ----------------- | -------------------------------------------------------------- | -------- |
| shiftedFunction   | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | no       |
| unshiftedFunction | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | sì       |


:::

:::group{name=modifyTooltip}

```zenscript
MCItemStack.modifyTooltip(function as ITooltipFunction)
```

| Parametro | Tipo                                                           |
| --------- | -------------------------------------------------------------- |
| function  | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) |


:::

:::group{name=mul}

Use this in contexts where machines accept more than one item to state that fact.

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
MCItemStack.mul(amount as int) as IIngredientWithAmount
```

| Parametro | Tipo |
| --------- | ---- |
| amount    | int  |


:::

:::group{name=only}

Use this if you already have the condition from another ingredient

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
MCItemStack.only(condition as IIngredientCondition<IIngredient>) as IngredientConditioned<IIngredient>
```

| Parametro | Tipo                                                                                                                                                 |
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

| Parametro | Tipo |
| --------- | ---- |
| minDamage | int  |


:::

:::group{name=onlyDamagedAtMost}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
MCItemStack.onlyDamagedAtMost(maxDamage as int) as IngredientConditioned<IIngredient>
```

| Parametro | Tipo |
| --------- | ---- |
| maxDamage | int  |


:::

:::group{name=onlyIf}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
MCItemStack.onlyIf(uid as string, function as Predicate<IItemStack>) as IngredientConditioned<IIngredient>
```

| Parametro | Tipo                                                                    | Optional |
| --------- | ----------------------------------------------------------------------- | -------- |
| uid       | string                                                                  | no       |
| function  | Predicate&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | sì       |


:::

:::group{name=percent}

Return Type: [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
MCItemStack.percent(percentage as double) as Percentaged<IItemStack>
```

| Parametro  | Tipo   |
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

| Parametro   | Tipo                                                     | Descrizione                |
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

| Parametro | Tipo                                                           | Descrizione                       |
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

| Parametro | Tipo                                                           | Descrizione                                       |
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

| Parametro | Tipo                                                           | Descrizione                                       |
| --------- | -------------------------------------------------------------- | ------------------------------------------------- |
| uuid      | string                                                         | The unique id of the AttributeModifier to remove. |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from.                 |


:::

:::group{name=removeTooltip}

```zenscript
MCItemStack.removeTooltip(regex as string)
```

| Parametro | Tipo   |
| --------- | ------ |
| regex     | string |


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

| Parametro | Tipo | Descrizione       |
| --------- | ---- | ----------------- |
| time      | int  | the new burn time |


:::

:::group{name=setEnchantments}

Sets the enchantments on this IItemStack.

Returns: This itemStack if it is mutable, a new one with the enchantments otherwise  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
MCItemStack.setEnchantments(enchantments as int?[Enchantment]) as IItemStack
```

| Parametro    | Tipo                                                           | Descrizione          |
| ------------ | -------------------------------------------------------------- | -------------------- |
| enchantments | int?[[Enchantment](/vanilla/api/item/enchantment/Enchantment)] | The new enchantments |


:::

:::group{name=setFireResistant}

Sets if this IItemStack is immune to fire / lava.

 If true, the item will not burn when thrown into fire or lava.

```zenscript
MCItemStack.setFireResistant(fireResistant as boolean)
```

| Parametro     | Tipo    | Descrizione                        |
| ------------- | ------- | ---------------------------------- |
| fireResistant | boolean | Should the item be immune to fire. |


:::

:::group{name=setFood}

```zenscript
MCItemStack.setFood(food as FoodProperties?)
```

| Parametro | Tipo                                                |
| --------- | --------------------------------------------------- |
| food      | [FoodProperties](/vanilla/api/food/FoodProperties)? |


:::

:::group{name=setMaxStackSize}

Sets the max stacksize of the Item.

```zenscript
// MCItemStack.setMaxStackSize(newMaxStackSize as int)

myMCItemStack.setMaxStackSize(16);
```

| Parametro       | Tipo | Descrizione                         |
| --------------- | ---- | ----------------------------------- |
| newMaxStackSize | int  | The new max stack size of the Item. |


:::

:::group{name=setRarity}

Sets the rarity of the Item.

```zenscript
// MCItemStack.setRarity(newRarity as Rarity)

myMCItemStack.setRarity(Rarity.UNCOMMON);
```

| Parametro | Tipo                                        | Descrizione                 |
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

| Parametro | Tipo | Descrizione              | Optional | Default Value |
| --------- | ---- | ------------------------ | -------- | ------------- |
| amount    | int  | The amount to shrink by. | sì       | 1             |


:::

:::group{name=transform}

Use this if you already have the transformer from another ingredient

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
MCItemStack.transform(transformer as IIngredientTransformer<IIngredient>) as IIngredientTransformed<IIngredient>
```

| Parametro     | Tipo                                                                                                                                                     |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| trasformatore | [IIngredientTransformer](/vanilla/api/ingredient/transform/IIngredientTransformer)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt; |


:::

:::group{name=transformCustom}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
MCItemStack.transformCustom(uid as string, function as Function<IItemStack,IItemStack>) as IIngredientTransformed<IIngredient>
```

| Parametro | Tipo                                                                                                              | Optional |
| --------- | ----------------------------------------------------------------------------------------------------------------- | -------- |
| uid       | string                                                                                                            | no       |
| function  | Function&lt;[IItemStack](/vanilla/api/item/IItemStack),[IItemStack](/vanilla/api/item/IItemStack)&gt; | sì       |


:::

:::group{name=transformDamage}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
MCItemStack.transformDamage(amount as int) as IIngredientTransformed<IIngredient>
```

| Parametro | Tipo | Optional | Default Value |
| --------- | ---- | -------- | ------------- |
| amount    | int  | sì       | 1             |


:::

:::group{name=transformReplace}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
MCItemStack.transformReplace(replaceWith as IItemStack) as IIngredientTransformed<IIngredient>
```

| Parametro   | Tipo                                       |
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
// MCItemStack.withAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[], preserveDefaults as boolean) as IItemStack

myMCItemStack.withAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>], true);
```

| Parametro        | Tipo                                                                   | Descrizione                                                                         | Optional | Default Value |
| ---------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- | ------------- |
| attribute        | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                                                      | no       |               |
| nome             | string                                                                 | The name of the modifier.                                                           | no       |               |
| valore           | double                                                                 | The value of the modifier.                                                          | no       |               |
| operation        | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.                                                      | no       |               |
| slotTypes        | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for.                                               | no       |               |
| preserveDefaults | boolean                                                                | Should the default Item Attribute Modifiers be preserved when adding this modifier. | sì       | no            |


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

| Parametro        | Tipo                                                                   | Descrizione                                                                         | Optional | Default Value |
| ---------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- | ------------- |
| attribute        | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                                                      | no       |               |
| uuid             | **invalid**                                                            | The unique identifier of the modifier to replace.                                   | no       |               |
| nome             | string                                                                 | The name of the modifier.                                                           | no       |               |
| valore           | double                                                                 | The value of the modifier.                                                          | no       |               |
| operation        | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.                                                      | no       |               |
| slotTypes        | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for.                                               | no       |               |
| preserveDefaults | boolean                                                                | Should the default Item Attribute Modifiers be preserved when adding this modifier. | sì       | no            |


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

| Parametro        | Tipo                                                                   | Descrizione                                                                         | Optional | Default Value |
| ---------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- | ------------- |
| attribute        | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.                                                      | no       |               |
| uuid             | string                                                                 | The unique identifier of the modifier to replace.                                   | no       |               |
| nome             | string                                                                 | The name of the modifier.                                                           | no       |               |
| valore           | double                                                                 | The value of the modifier.                                                          | no       |               |
| operation        | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.                                                      | no       |               |
| slotTypes        | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for.                                               | no       |               |
| preserveDefaults | boolean                                                                | Should the default Item Attribute Modifiers be preserved when adding this modifier. | sì       | no            |


:::

:::group{name=withDamage}

Sets the damage of the ItemStack

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.withDamage(damage as int) as IItemStack

myMCItemStack.withDamage(10);
```

| Parametro | Tipo | Descrizione          |
| --------- | ---- | -------------------- |
| damage    | int  | the new damage value |


:::

:::group{name=withDisplayName}

Sets the display name of the ItemStack

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.withDisplayName(name as Component) as IItemStack

myMCItemStack.withDisplayName("totally not dirt");
```

| Parametro | Tipo                                     | Descrizione            |
| --------- | ---------------------------------------- | ---------------------- |
| nome      | [Component](/vanilla/api/text/Component) | New name of the stack. |


:::

:::group{name=withEnchantment}

Enchants this IItemStack with the given Enchantment.

Returns: This itemStack if it is mutable, a new one with the enchantment added otherwise  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.withEnchantment(enchantment as Enchantment, level as int) as IItemStack

myMCItemStack.withEnchantment(<enchantment:minecraft:riptide>, 2);
```

| Parametro   | Tipo                                                     | Descrizione                  | Optional | Default Value |
| ----------- | -------------------------------------------------------- | ---------------------------- | -------- | ------------- |
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment to add.      | no       |               |
| level       | int                                                      | The level of the enchantment | sì       | 1             |


:::

:::group{name=withLore}

Sets the lore of the ItemStack

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.withLore(lore as Component?[]) as IItemStack

myMCItemStack.withLore(new crafttweaker.api.text.TextComponent("I am the lore I speak for the trees"););
```

| Parametro | Tipo                                        | Descrizione                    |
| --------- | ------------------------------------------- | ------------------------------ |
| lore      | [Component](/vanilla/api/text/Component)?[] | the new Lore of the ItemStack. |


:::

:::group{name=withTag}

Sets the tag for the ItemStack.

Returns: This itemStack if it is mutable, a new one with the changed property otherwise  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStack.withTag(tag as MapData) as IItemStack

myMCItemStack.withTag({Display: {lore: ["Hello"]}});
```

| Parametro | Tipo                                 | Descrizione     |
| --------- | ------------------------------------ | --------------- |
| tag       | [MapData](/vanilla/api/data/MapData) | The tag to set. |


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


## Operators

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


## Proprietà

| Nome               | Tipo                                                           | Ha Getter | Ha Setter | Descrizione                                                                                                                                                       |
| ------------------ | -------------------------------------------------------------- | --------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| amount             | int                                                            | sì        | no        | Gets the amount of Items in the ItemStack                                                                                                                         |
| baseRepairCost     | int                                                            | sì        | no        | Gets the base repair cost of the ItemStack, or 0 if no repair is defined.                                                                                         |
| burnTime           | void                                                           | no        | sì        | Sets the burn time of this ingredient, for use in the furnace and other machines                                                                                  |
| damage             | int                                                            | sì        | no        |                                                                                                                                                                   |
| damageableItem     | boolean                                                        | sì        | no        | Returns if the ItemStack is damageable <br />  I.E Swords and tools are damageable, sticks are not.                                                         |
| damaged            | boolean                                                        | sì        | no        | Returns if the ItemStack is damaged <br />  I.E a Swords that is no at full durability is damaged.                                                          |
| definition         | [ItemDefinition](/vanilla/api/item/ItemDefinition)             | sì        | no        |                                                                                                                                                                   |
| descriptionId      | string                                                         | sì        | no        | Returns the unlocalized Name of the Item in the ItemStack                                                                                                         |
| displayName        | [Component](/vanilla/api/text/Component)                       | sì        | no        | Gets the display name of the ItemStack                                                                                                                            |
| enchantments       | int?[[Enchantment](/vanilla/api/item/enchantment/Enchantment)] | sì        | sì        |                                                                                                                                                                   |
| fireResistant      | boolean                                                        | sì        | sì        | Checks if this IItemStack burns when thrown into fire / lava or damaged by fire.                                                                                  |
| food               | [FoodProperties](/vanilla/api/food/FoodProperties)?            | sì        | sì        |                                                                                                                                                                   |
| hasCustomHoverName | boolean                                                        | sì        | no        | Returns true if the ItemStack has a display name.                                                                                                                 |
| hasFoil            | boolean                                                        | sì        | no        | Returns true if this ItemStack has a foil effect. <br />  <br />  Foil is the glint / effect that is added to enchanted ItemStacks (and other items). |
| hasTag             | boolean                                                        | sì        | no        | Returns true if this ItemStack has a Tag                                                                                                                          |
| hoverName          | [Component](/vanilla/api/text/Component)                       | sì        | no        | Gets the hover name of the ItemStack. <br />  <br />  This will give the raw name without the formatting that 'displayName' applies.                  |
| isEdible           | boolean                                                        | sì        | no        |                                                                                                                                                                   |
| isEnchantable      | boolean                                                        | sì        | no        | Can this ItemStack be enchanted?                                                                                                                                  |
| isEnchanted        | boolean                                                        | sì        | no        | Is this ItemStack enchanted?                                                                                                                                      |
| isMutable          | boolean                                                        | sì        | no        |                                                                                                                                                                   |
| maxDamage          | int                                                            | sì        | sì        | Returns the max damage of the ItemStack <br />  This is the max durability of the ItemStack.                                                                |
| maxStackSize       | int                                                            | sì        | sì        | Returns the max stack size of the Item in the ItemStack                                                                                                           |
| owner              | string                                                         | sì        | no        | Gets owning mod for the Item in this IItemStack                                                                                                                   |
| rarity             | [Rarity](/vanilla/api/item/property/Rarity)                    | sì        | sì        | Returns the rarity of the Item in the ItemStack                                                                                                                   |
| registryName       | [ResourceLocation](/vanilla/api/resource/ResourceLocation)     | sì        | no        | Gets the registry name for the Item in this IItemStack                                                                                                            |
| stackable          | boolean                                                        | sì        | no        | Returns if the ItemStack can have an amount greater than 1 <br />  I.E Swords and tools are not stackable, sticks are.                                      |
| tag                | [MapData](/vanilla/api/data/MapData)?                          | sì        | no        | Returns the NBT tag attached to this ItemStack.                                                                                                                   |
| useDuration        | int                                                            | sì        | no        | Gets the use duration of the ItemStack                                                                                                                            |
| useOnRelease       | boolean                                                        | sì        | no        | Returns true if this stack is considered a crossbow item                                                                                                          |

