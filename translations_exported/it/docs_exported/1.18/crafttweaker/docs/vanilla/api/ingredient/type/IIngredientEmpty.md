# IIngredientEmpty

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.ingredient.type.IIngredientEmpty;
```


## Interfacce Implementate
IIngredientEmpty implements the following interfaces. That means all methods defined in these interfaces are also available in IIngredientEmpty

- [IIngredient](/vanilla/api/ingredient/IIngredient)

## Enum Constants

IIngredientEmpty is an enum. It has 1 enum constants. They are accessible using the code below.

```zenscript
IIngredientEmpty.INSTANCE
```
## Static Methods

:::group{name=getInstance}

Return Type: [IIngredientEmpty](/vanilla/api/ingredient/type/IIngredientEmpty)

```zenscript
// IIngredientEmpty.getInstance() as IIngredientEmpty

IIngredientEmpty.getInstance();
```

:::

## Caster

| Tipo Risultato                                                         | Implicito |
| ---------------------------------------------------------------------- | --------- |
| [IData](/vanilla/api/data/IData)                                       | sì        |
| [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | sì        |
| [MapData](/vanilla/api/data/MapData)                                   | sì        |

## Metodi

:::group{name=addGlobalAttributeModifier}

Adds an AttributeModifier to this IIngredient.

 Attributes added with this method appear on all ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to have the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withAttributeModifier

Return Type: void

```zenscript
// IIngredientEmpty.addGlobalAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[]) as void

myIIngredientEmpty.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 10, AttributeOperation.ADDITION, [<equipmentslot:chest>]);
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

Return Type: void

```zenscript
// IIngredientEmpty.addGlobalAttributeModifier(attribute as Attribute, uuid as string, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[]) as void

myIIngredientEmpty.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "8c1b5535-9f79-448b-87ae-52d81480aaa3", "Extra Power", 10, AttributeOperation.ADDITION, [<equipmentslot:chest>]);
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

Return Type: void

```zenscript
IIngredientEmpty.addShiftTooltip(content as Component, showMessage as Component) as void
```

| Parametro   | Tipo                                     | Descrizione             | Optional | DefaultValue |
| ----------- | ---------------------------------------- | ----------------------- | -------- | ------------ |
| contenuto   | [Component](/vanilla/api/text/Component) | No Description Provided | no       |              |
| showMessage | [Component](/vanilla/api/text/Component) | No Description Provided | sì       |              |


:::

:::group{name=addTooltip}

Return Type: void

```zenscript
IIngredientEmpty.addTooltip(content as Component) as void
```

| Parametro | Tipo                                     | Descrizione             |
| --------- | ---------------------------------------- | ----------------------- |
| contenuto | [Component](/vanilla/api/text/Component) | No Description Provided |


:::

:::group{name=anyDamage}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
// IIngredientEmpty.anyDamage() as IngredientConditioned<IIngredient>

myIIngredientEmpty.anyDamage();
```

:::

:::group{name=asIIngredientWithAmount}

Used implicitly when a machine can accept more than one item but you only provide one.

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
// IIngredientEmpty.asIIngredientWithAmount() as IIngredientWithAmount

myIIngredientEmpty.asIIngredientWithAmount();
```

:::

:::group{name=clearTooltip}

Return Type: void

```zenscript
// IIngredientEmpty.clearTooltip() as void

myIIngredientEmpty.clearTooltip();
```

:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
// IIngredientEmpty.contains(ingredient as IIngredient) as boolean

myIIngredientEmpty.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| Parametro  | Tipo                                               | Descrizione             |
| ---------- | -------------------------------------------------- | ----------------------- |
| ingredient | [IIngredient](/vanilla/api/ingredient/IIngredient) | The ingredient to check |


:::

:::group{name=getRemainingItem}

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// IIngredientEmpty.getRemainingItem(stack as IItemStack) as IItemStack

myIIngredientEmpty.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                       | Descrizione                               |
| --------- | ------------------------------------------ | ----------------------------------------- |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | The stack to provide for this ingredient. |


:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
// IIngredientEmpty.matches(stack as IItemStack) as boolean

myIIngredientEmpty.matches(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                       | Descrizione        |
| --------- | ------------------------------------------ | ------------------ |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | The stack to check |


:::

:::group{name=modifyShiftTooltip}

Return Type: void

```zenscript
IIngredientEmpty.modifyShiftTooltip(shiftedFunction as ITooltipFunction, unshiftedFunction as ITooltipFunction) as void
```

| Parametro         | Tipo                                                           | Descrizione             | Optional | DefaultValue |
| ----------------- | -------------------------------------------------------------- | ----------------------- | -------- | ------------ |
| shiftedFunction   | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | No Description Provided | no       |              |
| unshiftedFunction | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | No Description Provided | sì       |              |


:::

:::group{name=modifyTooltip}

Return Type: void

```zenscript
IIngredientEmpty.modifyTooltip(function as ITooltipFunction) as void
```

| Parametro | Tipo                                                           | Descrizione             |
| --------- | -------------------------------------------------------------- | ----------------------- |
| function  | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | No Description Provided |


:::

:::group{name=mul}

Use this in contexts where machines accept more than one item to state that fact.

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
IIngredientEmpty.mul(amount as int) as IIngredientWithAmount
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| amount    | int  | No Description Provided |


:::

:::group{name=only}

Use this if you already have the condition from another ingredient

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
IIngredientEmpty.only(condition as IIngredientCondition<IIngredient>) as IngredientConditioned<IIngredient>
```

| Parametro | Tipo                                                                                                                                                 | Descrizione             |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| condition | [IIngredientCondition](/vanilla/api/ingredient/condition/IIngredientCondition)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt; | No Description Provided |


:::

:::group{name=onlyDamaged}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
// IIngredientEmpty.onlyDamaged() as IngredientConditioned<IIngredient>

myIIngredientEmpty.onlyDamaged();
```

:::

:::group{name=onlyDamagedAtLeast}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
IIngredientEmpty.onlyDamagedAtLeast(minDamage as int) as IngredientConditioned<IIngredient>
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| minDamage | int  | No Description Provided |


:::

:::group{name=onlyDamagedAtMost}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
IIngredientEmpty.onlyDamagedAtMost(maxDamage as int) as IngredientConditioned<IIngredient>
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| maxDamage | int  | No Description Provided |


:::

:::group{name=onlyIf}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
IIngredientEmpty.onlyIf(uid as string, function as Predicate<IItemStack>) as IngredientConditioned<IIngredient>
```

| Parametro | Tipo                                                                    | Descrizione             | Optional | DefaultValue |
| --------- | ----------------------------------------------------------------------- | ----------------------- | -------- | ------------ |
| uid       | string                                                                  | No Description Provided | no       |              |
| function  | Predicate&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | No Description Provided | sì       |              |


:::

:::group{name=removeGlobalAttribute}

Removes all AttributeModifiers that use the given Attribute from this IIngredient.

 Attributes removed with this method are removed from ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to remove the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withoutAttribute.

 This method can only remove default Attributes from an ItemStack, it is still possible that an ItemStack can override it.

Return Type: void

```zenscript
// IIngredientEmpty.removeGlobalAttribute(attribute as Attribute, slotTypes as EquipmentSlot[]) as void

myIIngredientEmpty.removeGlobalAttribute(<attribute:minecraft:generic.attack_damage>, [<equipmentslot:chest>]);
```

| Parametro | Tipo                                                           | Descrizione                       |
| --------- | -------------------------------------------------------------- | --------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)           | The attribute to remove.          |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from. |


:::

:::group{name=removeGlobalAttributeModifier}

Removes all AttributeModifiers who's ID is the same as the given uuid from this IIngredient.

Return Type: void

```zenscript
// IIngredientEmpty.removeGlobalAttributeModifier(uuid as string, slotTypes as EquipmentSlot[]) as void

myIIngredientEmpty.removeGlobalAttributeModifier("8c1b5535-9f79-448b-87ae-52d81480aaa3", [<equipmentslot:chest>]);
```

| Parametro | Tipo                                                           | Descrizione                                       |
| --------- | -------------------------------------------------------------- | ------------------------------------------------- |
| uuid      | string                                                         | The unique id of the AttributeModifier to remove. |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from.                 |


:::

:::group{name=removeTooltip}

Return Type: void

```zenscript
IIngredientEmpty.removeTooltip(regex as string) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| regex     | string | No Description Provided |


:::

:::group{name=reuse}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
// IIngredientEmpty.reuse() as IIngredientTransformed<IIngredient>

myIIngredientEmpty.reuse();
```

:::

:::group{name=transform}

Use this if you already have the transformer from another ingredient

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
IIngredientEmpty.transform(transformer as IIngredientTransformer<IIngredient>) as IIngredientTransformed<IIngredient>
```

| Parametro     | Tipo                                                                                                                                                     | Descrizione             |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| trasformatore | [IIngredientTransformer](/vanilla/api/ingredient/transform/IIngredientTransformer)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt; | No Description Provided |


:::

:::group{name=transformCustom}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
IIngredientEmpty.transformCustom(uid as string, function as Function<IItemStack,IItemStack>) as IIngredientTransformed<IIngredient>
```

| Parametro | Tipo                                                                                                              | Descrizione             | Optional | DefaultValue |
| --------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------- | -------- | ------------ |
| uid       | string                                                                                                            | No Description Provided | no       |              |
| function  | Function&lt;[IItemStack](/vanilla/api/item/IItemStack),[IItemStack](/vanilla/api/item/IItemStack)&gt; | No Description Provided | sì       |              |


:::

:::group{name=transformDamage}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
IIngredientEmpty.transformDamage(amount as int) as IIngredientTransformed<IIngredient>
```

| Parametro | Tipo | Descrizione             | Optional | DefaultValue |
| --------- | ---- | ----------------------- | -------- | ------------ |
| amount    | int  | No Description Provided | sì       | 1            |


:::

:::group{name=transformReplace}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
IIngredientEmpty.transformReplace(replaceWith as IItemStack) as IIngredientTransformed<IIngredient>
```

| Parametro   | Tipo                                       | Descrizione             |
| ----------- | ------------------------------------------ | ----------------------- |
| replaceWith | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::


## Operators

:::group{name=CONTAINS}

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myIIngredientEmpty
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in myIIngredientEmpty
```

:::

:::group{name=MUL}

Use this in contexts where machines accept more than one item to state that fact.

```zenscript
myIIngredientEmpty * amount as int
```

:::

:::group{name=OR}

```zenscript
myIIngredientEmpty | other as IIngredient
```

:::


## Proprietà

| Nome     | Tipo | Ha Getter | Ha Setter | Descrizione                                                                      |
| -------- | ---- | --------- | --------- | -------------------------------------------------------------------------------- |
| burnTime | void | no        | sì        | Sets the burn time of this ingredient, for use in the furnace and other machines |

