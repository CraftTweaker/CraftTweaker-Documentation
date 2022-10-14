# IIngredient

The CraftTweaker Ingredient class which is used to power our recipes and ItemStack matching.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.ingredient.IIngredient;
```


## Interfacce Implementate
IIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in IIngredient

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)

## Caster

| Result Type                                                            | Implicito |
| ---------------------------------------------------------------------- | --------- |
| [IData](/vanilla/api/data/IData)                                       | sì        |
| [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | sì        |
| [Ingredient](/vanilla/api/item/Ingredient)                             | sì        |
| [MapData](/vanilla/api/data/MapData)                                   | sì        |

## Metodi

:::group{name=addGlobalAttributeModifier}

Adds an AttributeModifier to this IIngredient.

 Attributes added with this method appear on all ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to have the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withAttributeModifier

```zenscript
// IIngredient.addGlobalAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[])

<tag:items:minecraft:wool>.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
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
// IIngredient.addGlobalAttributeModifier(attribute as Attribute, uuid as invalid, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[])

<tag:items:minecraft:wool>.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, IItemStack.BASE_ATTACK_DAMAGE_UUID, "Extra Power", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
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
// IIngredient.addGlobalAttributeModifier(attribute as Attribute, uuid as string, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[])

<tag:items:minecraft:wool>.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "8c1b5535-9f79-448b-87ae-52d81480aaa3", "Extra Power", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
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
IIngredient.addShiftTooltip(content as Component, showMessage as Component)
```

| Parametro   | Tipo                                     | Optional |
| ----------- | ---------------------------------------- | -------- |
| contenuto   | [Component](/vanilla/api/text/Component) | no       |
| showMessage | [Component](/vanilla/api/text/Component) | sì       |


:::

:::group{name=addTooltip}

```zenscript
IIngredient.addTooltip(content as Component)
```

| Parametro | Tipo                                     |
| --------- | ---------------------------------------- |
| contenuto | [Component](/vanilla/api/text/Component) |


:::

:::group{name=anyDamage}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
// IIngredient.anyDamage() as IngredientConditioned<IIngredient>

<tag:items:minecraft:wool>.anyDamage();
```

:::

:::group{name=asIIngredientWithAmount}

Used implicitly when a machine can accept more than one item but you only provide one.

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
// IIngredient.asIIngredientWithAmount() as IIngredientWithAmount

<tag:items:minecraft:wool>.asIIngredientWithAmount();
```

:::

:::group{name=asVanillaIngredient}

Create a Vanilla ingredient matching this one.

Return Type: [Ingredient](/vanilla/api/item/Ingredient)

```zenscript
// IIngredient.asVanillaIngredient() as Ingredient

<tag:items:minecraft:wool>.asVanillaIngredient();
```

:::

:::group{name=clearTooltip}

```zenscript
IIngredient.clearTooltip(leaveName as boolean)
```

| Parametro | Tipo    | Optional | Default Value |
| --------- | ------- | -------- | ------------- |
| leaveName | boolean | sì       | no            |


:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
// IIngredient.contains(ingredient as IIngredient) as boolean

<tag:items:minecraft:wool>.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| Parametro  | Tipo                                               | Descrizione             |
| ---------- | -------------------------------------------------- | ----------------------- |
| ingredient | [IIngredient](/vanilla/api/ingredient/IIngredient) | The ingredient to check |


:::

:::group{name=getRemainingItem}

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// IIngredient.getRemainingItem(stack as IItemStack) as IItemStack

<tag:items:minecraft:wool>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                       | Descrizione                               |
| --------- | ------------------------------------------ | ----------------------------------------- |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | The stack to provide for this ingredient. |


:::

:::group{name=isEmpty}

Checks if this ingredient is empty.

Returns: true if empty, false otherwise  
Return Type: boolean

```zenscript
// IIngredient.isEmpty() as boolean

<tag:items:minecraft:wool>.isEmpty();
```

:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
// IIngredient.matches(stack as IItemStack) as boolean

<tag:items:minecraft:wool>.matches(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                       | Descrizione        |
| --------- | ------------------------------------------ | ------------------ |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | The stack to check |


:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
IIngredient.matches(stack as IItemStack, ignoreDamage as boolean) as boolean
```

| Parametro   | Tipo                                       | Descrizione               |
| ----------- | ------------------------------------------ | ------------------------- |
| stack       | [IItemStack](/vanilla/api/item/IItemStack) | The stack to check        |
| ignoreDanno | boolean                                    | Should damage be checked? |


:::

:::group{name=modifyShiftTooltip}

```zenscript
IIngredient.modifyShiftTooltip(shiftedFunction as ITooltipFunction, unshiftedFunction as ITooltipFunction)
```

| Parametro         | Tipo                                                           | Optional |
| ----------------- | -------------------------------------------------------------- | -------- |
| shiftedFunction   | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | no       |
| unshiftedFunction | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | sì       |


:::

:::group{name=modifyTooltip}

```zenscript
IIngredient.modifyTooltip(function as ITooltipFunction)
```

| Parametro | Tipo                                                           |
| --------- | -------------------------------------------------------------- |
| function  | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) |


:::

:::group{name=mul}

Use this in contexts where machines accept more than one item to state that fact.

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
IIngredient.mul(amount as int) as IIngredientWithAmount
```

| Parametro | Tipo |
| --------- | ---- |
| amount    | int  |


:::

:::group{name=only}

Use this if you already have the condition from another ingredient

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
IIngredient.only(condition as IIngredientCondition<IIngredient>) as IngredientConditioned<IIngredient>
```

| Parametro | Tipo                                                                                                                                                 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| condition | [IIngredientCondition](/vanilla/api/ingredient/condition/IIngredientCondition)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt; |


:::

:::group{name=onlyDamaged}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
// IIngredient.onlyDamaged() as IngredientConditioned<IIngredient>

<tag:items:minecraft:wool>.onlyDamaged();
```

:::

:::group{name=onlyDamagedAtLeast}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
IIngredient.onlyDamagedAtLeast(minDamage as int) as IngredientConditioned<IIngredient>
```

| Parametro | Tipo |
| --------- | ---- |
| minDamage | int  |


:::

:::group{name=onlyDamagedAtMost}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
IIngredient.onlyDamagedAtMost(maxDamage as int) as IngredientConditioned<IIngredient>
```

| Parametro | Tipo |
| --------- | ---- |
| maxDamage | int  |


:::

:::group{name=onlyIf}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
IIngredient.onlyIf(uid as string, function as Predicate<IItemStack>) as IngredientConditioned<IIngredient>
```

| Parametro | Tipo                                                                    | Optional |
| --------- | ----------------------------------------------------------------------- | -------- |
| uid       | string                                                                  | no       |
| function  | Predicate&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | sì       |


:::

:::group{name=removeGlobalAttribute}

Removes all AttributeModifiers that use the given Attribute from this IIngredient.

 Attributes removed with this method are removed from ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to remove the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withoutAttribute.

 This method can only remove default Attributes from an ItemStack, it is still possible that an ItemStack can override it.

```zenscript
// IIngredient.removeGlobalAttribute(attribute as Attribute, slotTypes as EquipmentSlot[])

<tag:items:minecraft:wool>.removeGlobalAttribute(<attribute:minecraft:generic.attack_damage>, [<constant:minecraft:equipmentslot:chest>]);
```

| Parametro | Tipo                                                           | Descrizione                       |
| --------- | -------------------------------------------------------------- | --------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)           | The attribute to remove.          |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from. |


:::

:::group{name=removeGlobalAttributeModifier}

Removes all AttributeModifiers who's ID is the same as the given uuid from this IIngredient.

```zenscript
// IIngredient.removeGlobalAttributeModifier(uuid as invalid, slotTypes as EquipmentSlot[])

<tag:items:minecraft:wool>.removeGlobalAttributeModifier(IItemStack.BASE_ATTACK_DAMAGE_UUID, [<constant:minecraft:equipmentslot:chest>]);
```

| Parametro | Tipo                                                           | Descrizione                                       |
| --------- | -------------------------------------------------------------- | ------------------------------------------------- |
| uuid      | **invalid**                                                    | The unique id of the AttributeModifier to remove. |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from.                 |


:::

:::group{name=removeGlobalAttributeModifier}

Removes all AttributeModifiers who's ID is the same as the given uuid from this IIngredient.

```zenscript
// IIngredient.removeGlobalAttributeModifier(uuid as string, slotTypes as EquipmentSlot[])

<tag:items:minecraft:wool>.removeGlobalAttributeModifier("8c1b5535-9f79-448b-87ae-52d81480aaa3", [<constant:minecraft:equipmentslot:chest>]);
```

| Parametro | Tipo                                                           | Descrizione                                       |
| --------- | -------------------------------------------------------------- | ------------------------------------------------- |
| uuid      | string                                                         | The unique id of the AttributeModifier to remove. |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from.                 |


:::

:::group{name=removeTooltip}

```zenscript
IIngredient.removeTooltip(regex as string)
```

| Parametro | Tipo   |
| --------- | ------ |
| regex     | string |


:::

:::group{name=reuse}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
// IIngredient.reuse() as IIngredientTransformed<IIngredient>

<tag:items:minecraft:wool>.reuse();
```

:::

:::group{name=setBurnTime}

Sets the burn time of this ingredient, for use in the furnace and other machines

```zenscript
// IIngredient.setBurnTime(time as int)

<tag:items:minecraft:wool>.setBurnTime(500);
```

| Parametro | Tipo | Descrizione       |
| --------- | ---- | ----------------- |
| time      | int  | the new burn time |


:::

:::group{name=transform}

Use this if you already have the transformer from another ingredient

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
IIngredient.transform(transformer as IIngredientTransformer<IIngredient>) as IIngredientTransformed<IIngredient>
```

| Parametro     | Tipo                                                                                                                                                     |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| trasformatore | [IIngredientTransformer](/vanilla/api/ingredient/transform/IIngredientTransformer)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt; |


:::

:::group{name=transformCustom}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
IIngredient.transformCustom(uid as string, function as Function<IItemStack,IItemStack>) as IIngredientTransformed<IIngredient>
```

| Parametro | Tipo                                                                                                              | Optional |
| --------- | ----------------------------------------------------------------------------------------------------------------- | -------- |
| uid       | string                                                                                                            | no       |
| function  | Function&lt;[IItemStack](/vanilla/api/item/IItemStack),[IItemStack](/vanilla/api/item/IItemStack)&gt; | sì       |


:::

:::group{name=transformDamage}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
IIngredient.transformDamage(amount as int) as IIngredientTransformed<IIngredient>
```

| Parametro | Tipo | Optional | Default Value |
| --------- | ---- | -------- | ------------- |
| amount    | int  | sì       | 1             |


:::

:::group{name=transformReplace}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
IIngredient.transformReplace(replaceWith as IItemStack) as IIngredientTransformed<IIngredient>
```

| Parametro   | Tipo                                       |
| ----------- | ------------------------------------------ |
| replaceWith | [IItemStack](/vanilla/api/item/IItemStack) |


:::


## Operators

:::group{name=CONTAINS}

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myIIngredient
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in <tag:items:minecraft:wool>
```

:::

:::group{name=MUL}

Use this in contexts where machines accept more than one item to state that fact.

```zenscript
myIIngredient * amount as int
```

:::

:::group{name=OR}

```zenscript
myIIngredient | other as IIngredient
```

:::


## Proprietà

| Nome          | Tipo                                         | Ha Getter | Ha Setter | Descrizione                                                                      |
| ------------- | -------------------------------------------- | --------- | --------- | -------------------------------------------------------------------------------- |
| burnTime      | void                                         | no        | sì        | Sets the burn time of this ingredient, for use in the furnace and other machines |
| commandString | string                                       | sì        | no        | Returns the BEP to get this stack                                                |
| empty         | boolean                                      | sì        | no        | Checks if this ingredient is empty.                                              |
| items         | [IItemStack](/vanilla/api/item/IItemStack)[] | sì        | no        |                                                                                  |

