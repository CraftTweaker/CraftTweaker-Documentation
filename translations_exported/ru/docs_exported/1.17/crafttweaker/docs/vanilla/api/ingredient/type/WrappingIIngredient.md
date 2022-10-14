# WrappingIIngredient

An IIngredient that wraps a vanilla Ingredient.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.ingredient.type.WrappingIIngredient;
```


## Implemented Interfaces
WrappingIIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in WrappingIIngredient

- [IIngredient](/vanilla/api/ingredient/IIngredient)

## Утилиты

| Тип результата                                                         | Является неявным |
| ---------------------------------------------------------------------- | ---------------- |
| [IData](/vanilla/api/data/IData)                                       | true             |
| [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | true             |
| [MapData](/vanilla/api/data/MapData)                                   | true             |

## Методы

:::group{name=addGlobalAttributeModifier}

Adds an AttributeModifier to this IIngredient.

 Attributes added with this method appear on all ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to have the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withAttributeModifier

Return Type: void

```zenscript
// WrappingIIngredient.addGlobalAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[]) as void

<tag:items:minecraft:wool>.asIIngredient();.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 10, AttributeOperation.ADDITION, [<equipmentslot:chest>]);
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
// WrappingIIngredient.addGlobalAttributeModifier(attribute as Attribute, uuid as string, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[]) as void

<tag:items:minecraft:wool>.asIIngredient();.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "8c1b5535-9f79-448b-87ae-52d81480aaa3", "Extra Power", 10, AttributeOperation.ADDITION, [<equipmentslot:chest>]);
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
WrappingIIngredient.addShiftTooltip(content as Component, showMessage as Component) as void
```

| Параметр    | Тип                                      | Описание                | Optional | DefaultValue |
| ----------- | ---------------------------------------- | ----------------------- | -------- | ------------ |
| контент     | [Component](/vanilla/api/text/Component) | No Description Provided | false    |              |
| showMessage | [Component](/vanilla/api/text/Component) | No Description Provided | true     |              |


:::

:::group{name=addTooltip}

Return Type: void

```zenscript
WrappingIIngredient.addTooltip(content as Component) as void
```

| Параметр | Тип                                      | Описание                |
| -------- | ---------------------------------------- | ----------------------- |
| контент  | [Component](/vanilla/api/text/Component) | No Description Provided |


:::

:::group{name=anyDamage}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
// WrappingIIngredient.anyDamage() as IngredientConditioned<IIngredient>

<tag:items:minecraft:wool>.asIIngredient();.anyDamage();
```

:::

:::group{name=asIIngredientWithAmount}

Used implicitly when a machine can accept more than one item but you only provide one.

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
// WrappingIIngredient.asIIngredientWithAmount() as IIngredientWithAmount

<tag:items:minecraft:wool>.asIIngredient();.asIIngredientWithAmount();
```

:::

:::group{name=clearTooltip}

Return Type: void

```zenscript
// WrappingIIngredient.clearTooltip() as void

<tag:items:minecraft:wool>.asIIngredient();.clearTooltip();
```

:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
// WrappingIIngredient.contains(ingredient as IIngredient) as boolean

<tag:items:minecraft:wool>.asIIngredient();.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| Параметр   | Тип                                                | Описание                |
| ---------- | -------------------------------------------------- | ----------------------- |
| ingredient | [IIngredient](/vanilla/api/ingredient/IIngredient) | The ingredient to check |


:::

:::group{name=getRemainingItem}

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// WrappingIIngredient.getRemainingItem(stack as IItemStack) as IItemStack

<tag:items:minecraft:wool>.asIIngredient();.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                        | Описание                                  |
| -------- | ------------------------------------------ | ----------------------------------------- |
| stack    | [IItemStack](/vanilla/api/item/IItemStack) | The stack to provide for this ingredient. |


:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
// WrappingIIngredient.matches(stack as IItemStack) as boolean

<tag:items:minecraft:wool>.asIIngredient();.matches(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                        | Описание           |
| -------- | ------------------------------------------ | ------------------ |
| stack    | [IItemStack](/vanilla/api/item/IItemStack) | The stack to check |


:::

:::group{name=modifyShiftTooltip}

Return Type: void

```zenscript
WrappingIIngredient.modifyShiftTooltip(shiftedFunction as ITooltipFunction, unshiftedFunction as ITooltipFunction) as void
```

| Параметр          | Тип                                                            | Описание                | Optional | DefaultValue |
| ----------------- | -------------------------------------------------------------- | ----------------------- | -------- | ------------ |
| shiftedFunction   | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | No Description Provided | false    |              |
| unshiftedFunction | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | No Description Provided | true     |              |


:::

:::group{name=modifyTooltip}

Return Type: void

```zenscript
WrappingIIngredient.modifyTooltip(function as ITooltipFunction) as void
```

| Параметр | Тип                                                            | Описание                |
| -------- | -------------------------------------------------------------- | ----------------------- |
| function | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | No Description Provided |


:::

:::group{name=mul}

Use this in contexts where machines accept more than one item to state that fact.

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
WrappingIIngredient.mul(amount as int) as IIngredientWithAmount
```

| Параметр | Тип | Описание                |
| -------- | --- | ----------------------- |
| amount   | int | No Description Provided |


:::

:::group{name=only}

Use this if you already have the condition from another ingredient

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
WrappingIIngredient.only(condition as IIngredientCondition<IIngredient>) as IngredientConditioned<IIngredient>
```

| Параметр  | Тип                                                                                                                                                  | Описание                |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| condition | [IIngredientCondition](/vanilla/api/ingredient/condition/IIngredientCondition)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt; | No Description Provided |


:::

:::group{name=onlyDamaged}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
// WrappingIIngredient.onlyDamaged() as IngredientConditioned<IIngredient>

<tag:items:minecraft:wool>.asIIngredient();.onlyDamaged();
```

:::

:::group{name=onlyDamagedAtLeast}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
WrappingIIngredient.onlyDamagedAtLeast(minDamage as int) as IngredientConditioned<IIngredient>
```

| Параметр  | Тип | Описание                |
| --------- | --- | ----------------------- |
| minDamage | int | No Description Provided |


:::

:::group{name=onlyDamagedAtMost}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
WrappingIIngredient.onlyDamagedAtMost(maxDamage as int) as IngredientConditioned<IIngredient>
```

| Параметр  | Тип | Описание                |
| --------- | --- | ----------------------- |
| maxDamage | int | No Description Provided |


:::

:::group{name=onlyIf}

Return Type: [IngredientConditioned](/vanilla/api/ingredient/type/IngredientConditioned)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
WrappingIIngredient.onlyIf(uid as string, function as Predicate<IItemStack>) as IngredientConditioned<IIngredient>
```

| Параметр | Тип                                                                     | Описание                | Optional | DefaultValue |
| -------- | ----------------------------------------------------------------------- | ----------------------- | -------- | ------------ |
| uid      | string                                                                  | No Description Provided | false    |              |
| function | Predicate&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | No Description Provided | true     |              |


:::

:::group{name=removeGlobalAttribute}

Removes all AttributeModifiers that use the given Attribute from this IIngredient.

 Attributes removed with this method are removed from ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to remove the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withoutAttribute.

 This method can only remove default Attributes from an ItemStack, it is still possible that an ItemStack can override it.

Return Type: void

```zenscript
// WrappingIIngredient.removeGlobalAttribute(attribute as Attribute, slotTypes as EquipmentSlot[]) as void

<tag:items:minecraft:wool>.asIIngredient();.removeGlobalAttribute(<attribute:minecraft:generic.attack_damage>, [<equipmentslot:chest>]);
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
// WrappingIIngredient.removeGlobalAttributeModifier(uuid as string, slotTypes as EquipmentSlot[]) as void

<tag:items:minecraft:wool>.asIIngredient();.removeGlobalAttributeModifier("8c1b5535-9f79-448b-87ae-52d81480aaa3", [<equipmentslot:chest>]);
```

| Параметр  | Тип                                                            | Описание                                          |
| --------- | -------------------------------------------------------------- | ------------------------------------------------- |
| uuid      | string                                                         | The unique id of the AttributeModifier to remove. |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from.                 |


:::

:::group{name=removeTooltip}

Return Type: void

```zenscript
WrappingIIngredient.removeTooltip(regex as string) as void
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| regex    | string | No Description Provided |


:::

:::group{name=reuse}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
// WrappingIIngredient.reuse() as IIngredientTransformed<IIngredient>

<tag:items:minecraft:wool>.asIIngredient();.reuse();
```

:::

:::group{name=transform}

Use this if you already have the transformer from another ingredient

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
WrappingIIngredient.transform(transformer as IIngredientTransformer<IIngredient>) as IIngredientTransformed<IIngredient>
```

| Параметр      | Тип                                                                                                                                                      | Описание                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| трансформатор | [IIngredientTransformer](/vanilla/api/ingredient/transform/IIngredientTransformer)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt; | No Description Provided |


:::

:::group{name=transformCustom}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
WrappingIIngredient.transformCustom(uid as string, function as Function<IItemStack,IItemStack>) as IIngredientTransformed<IIngredient>
```

| Параметр | Тип                                                                                                               | Описание                | Optional | DefaultValue |
| -------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------- | -------- | ------------ |
| uid      | string                                                                                                            | No Description Provided | false    |              |
| function | Function&lt;[IItemStack](/vanilla/api/item/IItemStack),[IItemStack](/vanilla/api/item/IItemStack)&gt; | No Description Provided | true     |              |


:::

:::group{name=transformDamage}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
WrappingIIngredient.transformDamage(amount as int) as IIngredientTransformed<IIngredient>
```

| Параметр | Тип | Описание                | Optional | DefaultValue |
| -------- | --- | ----------------------- | -------- | ------------ |
| amount   | int | No Description Provided | true     | 1            |


:::

:::group{name=transformReplace}

Return Type: [IIngredientTransformed](/vanilla/api/ingredient/type/IIngredientTransformed)&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
WrappingIIngredient.transformReplace(replaceWith as IItemStack) as IIngredientTransformed<IIngredient>
```

| Параметр    | Тип                                        | Описание                |
| ----------- | ------------------------------------------ | ----------------------- |
| replaceWith | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::


## Операторы

:::group{name=CONTAINS}

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myWrappingIIngredient
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in <tag:items:minecraft:wool>.asIIngredient();
```

:::

:::group{name=MUL}

Use this in contexts where machines accept more than one item to state that fact.

```zenscript
myWrappingIIngredient * amount as int
```

:::

:::group{name=OR}

```zenscript
myWrappingIIngredient | other as IIngredient
```

:::


## Свойства

| Название | Тип  | Имеет Getter | Имеет Setter | Описание                                                                         |
| -------- | ---- | ------------ | ------------ | -------------------------------------------------------------------------------- |
| burnTime | void | false        | true         | Sets the burn time of this ingredient, for use in the furnace and other machines |

