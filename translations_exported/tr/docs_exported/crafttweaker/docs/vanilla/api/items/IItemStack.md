# IItemStack

This represents an item. It can be retrieved using an Item BEP. Is an [IIngredient](/vanilla/api/items/IIngredient)

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.IItemStack;
```


## Implemented Interfaces
IItemStack implements the following interfaces. That means all methods defined in these interfaces are also available in IItemStack

- [IIngredient](/vanilla/api/items/IIngredient)
- [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount)

## Casters

| Result type                                                       | Is Implicit |
| ----------------------------------------------------------------- | ----------- |
| [IData](/vanilla/api/data/IData)                                  | true        |
| [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount) | true        |
| [Ingredient](/vanilla/api/item/Ingredient)                        | true        |
| [ItemStack](/vanilla/api/item/ItemStack)                          | true        |
| [MapData](/vanilla/api/data/MapData)                              | true        |
| [MCItemDefinition](/vanilla/api/item/MCItemDefinition)            | true        |
| [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)     | true        |

## Methods

:::group{name=addGlobalAttributeModifier}

Adds an AttributeModifier to this IIngredient.

 Attributes added with this method appear on all ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to have the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withAttributeModifier

Return Type: void

```zenscript
// IItemStack.addGlobalAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as MCEquipmentSlotType[]) as void

<item:minecraft:dirt>.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 10, AttributeOperation.ADDITION, [<equipmentslottype:chest>]);
```

| Parameter | Type                                                           | Description                           |
| --------- | -------------------------------------------------------------- | ------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/Attribute)                     | The Attribute of the modifier.        |
| name      | string                                                         | The name of the modifier.             |
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
// IItemStack.addGlobalAttributeModifier(attribute as Attribute, uuid as string, name as string, value as double, operation as AttributeOperation, slotTypes as MCEquipmentSlotType[]) as void

<item:minecraft:dirt>.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "8c1b5535-9f79-448b-87ae-52d81480aaa3", "Extra Power", 10, AttributeOperation.ADDITION, [<equipmentslottype:chest>]);
```

| Parameter | Type                                                           | Description                                       |
| --------- | -------------------------------------------------------------- | ------------------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/Attribute)                     | The Attribute of the modifier.                    |
| uuid      | string                                                         | The unique identifier of the modifier to replace. |
| name      | string                                                         | The name of the modifier.                         |
| value     | double                                                         | The value of the modifier.                        |
| operation | [AttributeOperation](/vanilla/api/entity/AttributeOperation)   | The operation of the modifier.                    |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | What slots the modifier is valid for.             |


:::

:::group{name=addShiftTooltip}

Return Type: void

```zenscript
IItemStack.addShiftTooltip(content as MCTextComponent, showMessage as MCTextComponent) as void
```

| Parameter   | Type                                                      | Description             | Optional | DefaultValue |
| ----------- | --------------------------------------------------------- | ----------------------- | -------- | ------------ |
| content     | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | false    |              |
| showMessage | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | true     |              |


:::

:::group{name=addTooltip}

Return Type: void

```zenscript
IItemStack.addTooltip(content as MCTextComponent) as void
```

| Parameter | Type                                                      | Description             |
| --------- | --------------------------------------------------------- | ----------------------- |
| content   | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


:::

:::group{name=anyDamage}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
// IItemStack.anyDamage() as MCIngredientConditioned<IIngredient>

<item:minecraft:dirt>.anyDamage();
```

:::

:::group{name=asIIngredientWithAmount}

Return Type: [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount)

```zenscript
// IItemStack.asIIngredientWithAmount() as IIngredientWithAmount

<item:minecraft:dirt>.asIIngredientWithAmount();
```

:::

:::group{name=asImmutable}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// IItemStack.asImmutable() as IItemStack

<item:minecraft:dirt>.asImmutable();
```

:::

:::group{name=asVanillaIngredient}

Create a Vanilla ingredient matching this one.

Return Type: [Ingredient](/vanilla/api/item/Ingredient)

```zenscript
// IItemStack.asVanillaIngredient() as Ingredient

<item:minecraft:dirt>.asVanillaIngredient();
```

:::

:::group{name=clearCustomName}

Clears any custom name set for this ItemStack

Return Type: void

```zenscript
// IItemStack.clearCustomName() as void

<item:minecraft:dirt>.clearCustomName();
```

:::

:::group{name=clearTooltip}

Return Type: void

```zenscript
// IItemStack.clearTooltip() as void

<item:minecraft:dirt>.clearTooltip();
```

:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
// IItemStack.contains(ingredient as IIngredient) as boolean

<item:minecraft:dirt>.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| Parameter  | Type                                          | Description             |
| ---------- | --------------------------------------------- | ----------------------- |
| ingredient | [IIngredient](/vanilla/api/items/IIngredient) | The ingredient to check |


:::

:::group{name=copy}

Creates a copy

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// IItemStack.copy() as IItemStack

<item:minecraft:dirt>.copy();
```

:::

:::group{name=getAttributes}

Gets the Attributes and the AttributeModifiers on this IItemStack for the given EquipmentSlotType

Returns: A Map of Attribute to a List of AttributeModifier for the given EquipmentSlotType.  
Return Type: stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/AttributeModifier)&gt;[[Attribute](/vanilla/api/entity/Attribute)]

```zenscript
// IItemStack.getAttributes(slotType as MCEquipmentSlotType) as stdlib.List<AttributeModifier>[Attribute]

<item:minecraft:dirt>.getAttributes(<equipmentslottype:chest>);
```

| Parameter | Type                                                         | Description                         |
| --------- | ------------------------------------------------------------ | ----------------------------------- |
| slotType  | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType) | The slot to get the Attributes for. |


:::

:::group{name=getDefinition}

Return Type: [MCItemDefinition](/vanilla/api/item/MCItemDefinition)

```zenscript
// IItemStack.getDefinition() as MCItemDefinition

<item:minecraft:dirt>.getDefinition();
```

:::

:::group{name=getEnchantmentLevel}

Gets the level of the given enchantment on the item. Returns 0 if the item doesn't have the given enchantment.

Return Type: int

```zenscript
IItemStack.getEnchantmentLevel(enchantment as MCEnchantment) as int
```

| Parameter   | Type                                                    | Description             |
| ----------- | ------------------------------------------------------- | ----------------------- |
| enchantment | [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) | No Description Provided |


:::

:::group{name=getEnchantments}

Return Type: Integer[[MCEnchantment](/vanilla/api/enchantment/MCEnchantment)]

```zenscript
// IItemStack.getEnchantments() as Integer[MCEnchantment]

<item:minecraft:dirt>.getEnchantments();
```

:::

:::group{name=getImmutableInternal}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// IItemStack.getImmutableInternal() as ItemStack

<item:minecraft:dirt>.getImmutableInternal();
```

:::

:::group{name=getInternal}

Gets the internal [ItemStack](/vanilla/api/item/ItemStack) for this IItemStack.

Returns: internal ItemStack  
Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// IItemStack.getInternal() as ItemStack

<item:minecraft:dirt>.getInternal();
```

:::

:::group{name=getMaxStackSize}

Returns the max stack size of the Item in the ItemStack

Returns: Max stack size of the Item.  
Return Type: int

```zenscript
// IItemStack.getMaxStackSize() as int

<item:minecraft:dirt>.getMaxStackSize();
```

:::

:::group{name=getRarity}

Returns the rarity of the Item in the ItemStack

Returns: Rarity of the Item.  
Return Type: [Rarity](/vanilla/api/item/Rarity)

```zenscript
// IItemStack.getRarity() as Rarity

<item:minecraft:dirt>.getRarity();
```

:::

:::group{name=getRemainingItem}

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// IItemStack.getRemainingItem(stack as IItemStack) as IItemStack

<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                        | Description                               |
| --------- | ------------------------------------------- | ----------------------------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


:::

:::group{name=isFood}

Return Type: boolean

```zenscript
// IItemStack.isFood() as boolean

<item:minecraft:dirt>.isFood();
```

:::

:::group{name=isImmuneToFire}

Checks if this IItemStack burns when thrown into fire / lava or damaged by fire.

Returns: True if this IItemStack is immune to fire. False otherwise.  
Return Type: boolean

```zenscript
// IItemStack.isImmuneToFire() as boolean

<item:minecraft:dirt>.isImmuneToFire();
```

:::

:::group{name=isImmutable}

Return Type: boolean

```zenscript
// IItemStack.isImmutable() as boolean

<item:minecraft:dirt>.isImmutable();
```

:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
// IItemStack.matches(stack as IItemStack) as boolean

<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                        | Description        |
| --------- | ------------------------------------------- | ------------------ |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


:::

:::group{name=modifyShiftTooltip}

Return Type: void

```zenscript
IItemStack.modifyShiftTooltip(shiftedFunction as ITooltipFunction, unshiftedFunction as ITooltipFunction) as void
```

| Parameter         | Type                                                    | Description             | Optional | DefaultValue |
| ----------------- | ------------------------------------------------------- | ----------------------- | -------- | ------------ |
| shiftedFunction   | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided | false    |              |
| unshiftedFunction | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided | true     |              |


:::

:::group{name=modifyTooltip}

Return Type: void

```zenscript
IItemStack.modifyTooltip(function as ITooltipFunction) as void
```

| Parameter | Type                                                    | Description             |
| --------- | ------------------------------------------------------- | ----------------------- |
| function  | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided |


:::

:::group{name=mutable}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// IItemStack.mutable() as IItemStack

<item:minecraft:dirt>.mutable();
```

:::

:::group{name=only}

Use this if you already have the condition from another ingredient

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IItemStack.only(condition as IIngredientCondition<IIngredient>) as MCIngredientConditioned<IIngredient>
```

| Parameter | Type                                                                                                                             | Description             |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| condition | [IIngredientCondition](/vanilla/api/items/IIngredientCondition)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | No Description Provided |


:::

:::group{name=onlyDamaged}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
// IItemStack.onlyDamaged() as MCIngredientConditioned<IIngredient>

<item:minecraft:dirt>.onlyDamaged();
```

:::

:::group{name=onlyIf}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IItemStack.onlyIf(uid as string, function as Predicate<IItemStack>) as MCIngredientConditioned<IIngredient>
```

| Parameter | Type                                                                     | Description             | Optional | DefaultValue |
| --------- | ------------------------------------------------------------------------ | ----------------------- | -------- | ------------ |
| uid       | string                                                                   | No Description Provided | false    |              |
| function  | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true     |              |


:::

:::group{name=removeEnchantment}

Removes the given enchantment from this IItemStack.

Returns: This itemStack if it is mutable, a new one with the enchantment removed otherwise  
Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// IItemStack.removeEnchantment(enchantment as MCEnchantment) as IItemStack

<item:minecraft:dirt>.removeEnchantment(<enchantment:minecraft:riptide>);
```

| Parameter   | Type                                                    | Description                |
| ----------- | ------------------------------------------------------- | -------------------------- |
| enchantment | [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) | The enchantment to remove. |


:::

:::group{name=removeGlobalAttribute}

Removes all AttributeModifiers that use the given Attribute from this IIngredient.

 Attributes removed with this method are removed from ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to remove the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withoutAttribute.

 This method can only remove default Attributes from an ItemStack, it is still possible that an ItemStack can override it.

Return Type: void

```zenscript
// IItemStack.removeGlobalAttribute(attribute as Attribute, slotTypes as MCEquipmentSlotType[]) as void

<item:minecraft:dirt>.removeGlobalAttribute(<attribute:minecraft:generic.attack_damage>, [<equipmentslottype:chest>]);
```

| Parameter | Type                                                           | Description                       |
| --------- | -------------------------------------------------------------- | --------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/Attribute)                     | The attribute to remove.          |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | The slot types to remove it from. |


:::

:::group{name=removeGlobalAttributeModifier}

Removes all AttributeModifiers who's ID is the same as the given uuid from this IIngredient.

Return Type: void

```zenscript
// IItemStack.removeGlobalAttributeModifier(uuid as string, slotTypes as MCEquipmentSlotType[]) as void

<item:minecraft:dirt>.removeGlobalAttributeModifier("8c1b5535-9f79-448b-87ae-52d81480aaa3", [<equipmentslottype:chest>]);
```

| Parameter | Type                                                           | Description                                       |
| --------- | -------------------------------------------------------------- | ------------------------------------------------- |
| uuid      | string                                                         | The unique id of the AttributeModifier to remove. |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | The slot types to remove it from.                 |


:::

:::group{name=removeTooltip}

Return Type: void

```zenscript
IItemStack.removeTooltip(regex as string) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| regex     | string | No Description Provided |


:::

:::group{name=setDisplayName}

Sets the display name of the ItemStack

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// IItemStack.setDisplayName(name as string) as IItemStack

<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| name      | string | New name of the stack. |


:::

:::group{name=setEnchantments}

Sets the enchantments on this IItemStack.

Returns: This itemStack if it is mutable, a new one with the enchantments otherwise  
Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.setEnchantments(enchantments as Integer[MCEnchantment]) as IItemStack
```

| Parameter    | Type                                                             | Description          |
| ------------ | ---------------------------------------------------------------- | -------------------- |
| enchantments | Integer[[MCEnchantment](/vanilla/api/enchantment/MCEnchantment)] | The new enchantments |


:::

:::group{name=setImmuneToFire}

Sets if this IItemStack is immune to fire / lava.

 If true, the item will not burn when thrown into fire or lava.

Return Type: void

```zenscript
// IItemStack.setImmuneToFire(immuneToFire as boolean) as void

<item:minecraft:dirt>.setImmuneToFire(true);
```

| Parameter    | Type    | Description                        |
| ------------ | ------- | ---------------------------------- |
| immuneToFire | boolean | Should the item be immune to fire. |


:::

:::group{name=setMaxStackSize}

Sets the max stacksize of the Item.

Return Type: void

```zenscript
// IItemStack.setMaxStackSize(newMaxStackSize as int) as void

<item:minecraft:dirt>.setMaxStackSize(16);
```

| Parameter       | Type | Description                         |
| --------------- | ---- | ----------------------------------- |
| newMaxStackSize | int  | The new max stack size of the Item. |


:::

:::group{name=setRarity}

Sets the rarity of the Item.

Return Type: void

```zenscript
// IItemStack.setRarity(newRarity as Rarity) as void

<item:minecraft:dirt>.setRarity(Rarity.UNCOMMON);
```

| Parameter | Type                               | Description                 |
| --------- | ---------------------------------- | --------------------------- |
| newRarity | [Rarity](/vanilla/api/item/Rarity) | The new rarity of the Item. |


:::

:::group{name=weight}

Return Type: [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
IItemStack.weight(weight as double) as MCWeightedItemStack
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| weight    | double | No Description Provided |


:::

:::group{name=withAttributeModifier}

Adds an AttributeModifier to this IItemStack.

 The UUID can be used to override an existing attribute on an ItemStack with this new modifier. You can use `/ct hand attributes` to get the UUID of the attributes on an ItemStack.

 Attributes added with this method will only appear on this specific IItemStack.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// IItemStack.withAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as MCEquipmentSlotType[]) as IItemStack

<item:minecraft:dirt>.withAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 10, AttributeOperation.ADDITION, [<equipmentslottype:chest>]);
```

| Parameter | Type                                                           | Description                           |
| --------- | -------------------------------------------------------------- | ------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/Attribute)                     | The Attribute of the modifier.        |
| name      | string                                                         | The name of the modifier.             |
| value     | double                                                         | The value of the modifier.            |
| operation | [AttributeOperation](/vanilla/api/entity/AttributeOperation)   | The operation of the modifier.        |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | What slots the modifier is valid for. |


:::

:::group{name=withAttributeModifier}

Adds an AttributeModifier to this IItemStack using a specific UUID.

 The UUID can be used to override an existing attribute on an ItemStack with this new modifier. You can use `/ct hand attributes` to get the UUID of the attributes on an ItemStack.

 Attributes added with this method will only appear on this specific IItemStack.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// IItemStack.withAttributeModifier(attribute as Attribute, uuid as string, name as string, value as double, operation as AttributeOperation, slotTypes as MCEquipmentSlotType[]) as IItemStack

<item:minecraft:dirt>.withAttributeModifier(<attribute:minecraft:generic.attack_damage>, "8c1b5535-9f79-448b-87ae-52d81480aaa3", "Extra Power", 10, AttributeOperation.ADDITION, [<equipmentslottype:chest>]);
```

| Parameter | Type                                                           | Description                                       |
| --------- | -------------------------------------------------------------- | ------------------------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/Attribute)                     | The Attribute of the modifier.                    |
| uuid      | string                                                         | The unique identifier of the modifier to replace. |
| name      | string                                                         | The name of the modifier.                         |
| value     | double                                                         | The value of the modifier.                        |
| operation | [AttributeOperation](/vanilla/api/entity/AttributeOperation)   | The operation of the modifier.                    |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | What slots the modifier is valid for.             |


:::

:::group{name=withDamage}

Sets the damage of the ItemStack

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// IItemStack.withDamage(damage as int) as IItemStack

<item:minecraft:dirt>.withDamage(10);
```

| Parameter | Type | Description          |
| --------- | ---- | -------------------- |
| damage    | int  | the new damage value |


:::

:::group{name=withDisplayName}

Sets the display name of the ItemStack

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IItemStack.withDisplayName(text as MCTextComponent) as IItemStack
```

| Parameter | Type                                                      | Description            |
| --------- | --------------------------------------------------------- | ---------------------- |
| text      | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | New name of the stack. |


:::

:::group{name=withEnchantment}

Enchants this IItemStack with the given Enchantment.

Returns: This itemStack if it is mutable, a new one with the enchantment added otherwise  
Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// IItemStack.withEnchantment(enchantment as MCEnchantment, level as int) as IItemStack

<item:minecraft:dirt>.withEnchantment(<enchantment:minecraft:riptide>, 2);
```

| Parameter   | Type                                                    | Description                  | Optional | DefaultValue |
| ----------- | ------------------------------------------------------- | ---------------------------- | -------- | ------------ |
| enchantment | [MCEnchantment](/vanilla/api/enchantment/MCEnchantment) | The enchantment to add.      | false    |              |
| level       | int                                                     | The level of the enchantment | true     | 1            |


:::

:::group{name=withTag}

Sets the tag for the ItemStack.

Returns: This itemStack if it is mutable, a new one with the changed property otherwise  
Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// IItemStack.withTag(tag as IData) as IItemStack

<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| Parameter | Type                             | Description     |
| --------- | -------------------------------- | --------------- |
| tag       | [IData](/vanilla/api/data/IData) | The tag to set. |


:::

:::group{name=withoutTag}

Removes the tag from this ItemStack.

Returns: This itemStack if it is mutable, a new one with the changed property otherwise  
Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// IItemStack.withoutTag() as IItemStack

<item:minecraft:dirt>.withoutTag();
```

:::


## Operators

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


## Properties

| Name           | Type                                                             | Has Getter | Has Setter | Description                                                                                                                                  |
| -------------- | ---------------------------------------------------------------- | ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| amount         | int                                                              | true       | false      | Gets the amount of Items in the ItemStack                                                                                                    |
| burnTime       | int                                                              | true       | true       | No Description Provided                                                                                                                      |
| commandString  | string                                                           | true       | false      | Returns the BEP to get this stack                                                                                                            |
| damage         | int                                                              | true       | false      | No Description Provided                                                                                                                      |
| damageable     | boolean                                                          | true       | false      | Returns if the ItemStack is damageable <br />  I.E Swords and tools are damageable, sticks are not.                                    |
| damaged        | boolean                                                          | true       | false      | Returns if the ItemStack is damaged <br />  I.E a Swords that is no at full durability is damaged.                                     |
| definition     | [MCItemDefinition](/vanilla/api/item/MCItemDefinition)           | true       | false      | No Description Provided                                                                                                                      |
| displayName    | string                                                           | true       | false      | Gets the display name of the ItemStack                                                                                                       |
| empty          | boolean                                                          | true       | false      | Returns if the ItemStack is empty                                                                                                            |
| enchantments   | Integer[[MCEnchantment](/vanilla/api/enchantment/MCEnchantment)] | true       | true       | No Description Provided                                                                                                                      |
| food           | [MCFood](/vanilla/api/food/MCFood)?                              | true       | true       | No Description Provided                                                                                                                      |
| getOrCreate    | [IData](/vanilla/api/data/IData)                                 | true       | false      | Returns the NBT tag attached to this ItemStack or makes a new tag.                                                                           |
| getRepairCost  | int                                                              | true       | false      | Gets the repair cost of the ItemStack, or 0 if no repair is defined.                                                                         |
| hasDisplayName | boolean                                                          | true       | false      | Returns true if the ItemStack has a display name.                                                                                            |
| hasEffect      | boolean                                                          | true       | false      | Returns true if this ItemStack has an effect.                                                                                                |
| hasTag         | boolean                                                          | true       | false      | Returns true if this ItemStack has a Tag                                                                                                     |
| immuneToFire   | void                                                             | true       | true       | Sets if this IItemStack is immune to fire / lava. <br />  <br />  If true, the item will not burn when thrown into fire or lava. |
| isCrossbow     | boolean                                                          | true       | false      | Returns true if this stack is considered a crossbow item                                                                                     |
| isEnchantable  | boolean                                                          | true       | false      | Can this ItemStack be enchanted?                                                                                                             |
| isEnchanted    | boolean                                                          | true       | false      | Is this ItemStack enchanted?                                                                                                                 |
| isImmutable    | boolean                                                          | true       | false      | No Description Provided                                                                                                                      |
| items          | [IItemStack](/vanilla/api/items/IItemStack)[]                    | true       | false      | No Description Provided                                                                                                                      |
| maxDamage      | int                                                              | true       | true       | Returns the max damage of the ItemStack <br />  This is the max durability of the ItemStack.                                           |
| maxStackSize   | int                                                              | true       | true       | Returns the max stack size of the Item in the ItemStack                                                                                      |
| owner          | string                                                           | true       | false      | Gets owning mod for the Item in this IItemStack                                                                                              |
| rarity         | [Rarity](/vanilla/api/item/Rarity)                               | true       | true       | Returns the rarity of the Item in the ItemStack                                                                                              |
| registryName   | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)       | true       | false      | Gets the registry name for the Item in this IItemStack                                                                                       |
| stackable      | boolean                                                          | true       | false      | Returns if the ItemStack can have an amount greater than 1 <br />  I.E Swords and tools are not stackable, sticks are.                 |
| tag            | [IData](/vanilla/api/data/IData)                                 | true       | false      | Returns the NBT tag attached to this ItemStack.                                                                                              |
| toolTypes      | [ToolType](/vanilla/api/tool/ToolType)[]                         | true       | false      | No Description Provided                                                                                                                      |
| translationKey | string                                                           | true       | false      | Returns the unlocalized Name of the Item in the ItemStack                                                                                    |
| useDuration    | int                                                              | true       | false      | Gets the use duration of the ItemStack                                                                                                       |

