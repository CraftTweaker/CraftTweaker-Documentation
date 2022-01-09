# MCIngredientTransformed&LT;T : IIngredient&GT;

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCIngredientTransformed;
```


## Implemented Interfaces
MCIngredientTransformed implements the following interfaces. That means all methods defined in these interfaces are also available in MCIngredientTransformed

- [IIngredient](/vanilla/api/items/IIngredient)

## Утилиты

| Тип результата                       | Является неявным |
| ------------------------------------ | ---------------- |
| [IData](/vanilla/api/data/IData)     | true             |
| [MapData](/vanilla/api/data/MapData) | true             |

## Методы

:::group{name=addGlobalAttributeModifier}

Adds an AttributeModifier to this IIngredient.

 Attributes added with this method appear on all ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to have the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withAttributeModifier

Return Type: void

```zenscript
// MCIngredientTransformed.addGlobalAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as MCEquipmentSlotType[]) as void

myMCIngredientTransformed.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 10, AttributeOperation.ADDITION, [<equipmentslottype:chest>]);
```

| Параметр  | Тип                                                            | Описание                              |
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
// MCIngredientTransformed.addGlobalAttributeModifier(attribute as Attribute, uuid as string, name as string, value as double, operation as AttributeOperation, slotTypes as MCEquipmentSlotType[]) as void

myMCIngredientTransformed.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "8c1b5535-9f79-448b-87ae-52d81480aaa3", "Extra Power", 10, AttributeOperation.ADDITION, [<equipmentslottype:chest>]);
```

| Параметр  | Тип                                                            | Описание                                          |
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
MCIngredientTransformed.addShiftTooltip(content as MCTextComponent, showMessage as MCTextComponent) as void
```

| Параметр    | Тип                                                                 | Описание                | Optional | DefaultValue |
| ----------- | ------------------------------------------------------------------- | ----------------------- | -------- | ------------ |
| контент     | [Компонент MCTextcomponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | false    |              |
| showMessage | [Компонент MCTextcomponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | true     |              |


:::

:::group{name=addTooltip}

Return Type: void

```zenscript
MCIngredientTransformed.addTooltip(content as MCTextComponent) as void
```

| Параметр | Тип                                                                 | Описание                |
| -------- | ------------------------------------------------------------------- | ----------------------- |
| контент  | [Компонент MCTextcomponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


:::

:::group{name=anyDamage}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
// MCIngredientTransformed.anyDamage() as MCIngredientConditioned<IIngredient>

myMCIngredientTransformed.anyDamage();
```

:::

:::group{name=clearTooltip}

Return Type: void

```zenscript
// MCIngredientTransformed.clearTooltip() as void

myMCIngredientTransformed.clearTooltip();
```

:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
// MCIngredientTransformed.contains(ingredient as IIngredient) as boolean

myMCIngredientTransformed.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| Параметр   | Тип                                           | Описание                |
| ---------- | --------------------------------------------- | ----------------------- |
| ingredient | [IIngredient](/vanilla/api/items/IIngredient) | The ingredient to check |


:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
// MCIngredientTransformed.matches(stack as IItemStack) as boolean

myMCIngredientTransformed.matches(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                         | Описание           |
| -------- | ------------------------------------------- | ------------------ |
| stack    | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


:::

:::group{name=matches}

Return Type: boolean

```zenscript
MCIngredientTransformed.matches(stack as IItemStack, ignoreDamage as boolean) as boolean
```

| Параметр      | Тип                                         | Описание                |
| ------------- | ------------------------------------------- | ----------------------- |
| stack         | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |
| Игнорирование | boolean                                     | No Description Provided |


:::

:::group{name=modifyShiftTooltip}

Return Type: void

```zenscript
MCIngredientTransformed.modifyShiftTooltip(shiftedFunction as ITooltipFunction, unshiftedFunction as ITooltipFunction) as void
```

| Параметр          | Тип                                                     | Описание                | Optional | DefaultValue |
| ----------------- | ------------------------------------------------------- | ----------------------- | -------- | ------------ |
| shiftedFunction   | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided | false    |              |
| unshiftedFunction | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided | true     |              |


:::

:::group{name=modifyTooltip}

Return Type: void

```zenscript
MCIngredientTransformed.modifyTooltip(function as ITooltipFunction) as void
```

| Параметр | Тип                                                     | Описание                |
| -------- | ------------------------------------------------------- | ----------------------- |
| function | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided |


:::

:::group{name=only}

Use this if you already have the condition from another ingredient

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientTransformed.only(condition as IIngredientCondition<IIngredient>) as MCIngredientConditioned<IIngredient>
```

| Параметр  | Тип                                                                                                                              | Описание                |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| condition | [IIngredientCondition](/vanilla/api/items/IIngredientCondition)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | No Description Provided |


:::

:::group{name=onlyDamaged}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
// MCIngredientTransformed.onlyDamaged() as MCIngredientConditioned<IIngredient>

myMCIngredientTransformed.onlyDamaged();
```

:::

:::group{name=onlyDamagedAtLeast}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientTransformed.onlyDamagedAtLeast(minDamage as int) as MCIngredientConditioned<IIngredient>
```

| Параметр  | Тип | Описание                |
| --------- | --- | ----------------------- |
| minDamage | int | No Description Provided |


:::

:::group{name=onlyDamagedAtMost}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientTransformed.onlyDamagedAtMost(maxDamage as int) as MCIngredientConditioned<IIngredient>
```

| Параметр  | Тип | Описание                |
| --------- | --- | ----------------------- |
| maxDamage | int | No Description Provided |


:::

:::group{name=onlyIf}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientTransformed.onlyIf(uid as string, function as Predicate<IItemStack>) as MCIngredientConditioned<IIngredient>
```

| Параметр | Тип                                                                      | Описание                | Optional | DefaultValue |
| -------- | ------------------------------------------------------------------------ | ----------------------- | -------- | ------------ |
| uid      | string                                                                   | No Description Provided | false    |              |
| function | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true     |              |


:::

:::group{name=removeGlobalAttribute}

Removes all AttributeModifiers that use the given Attribute from this IIngredient.

 Attributes removed with this method are removed from ItemStacks that match this IIngredient, regardless of how or when the ItemStack was made, if you want to remove the attribute on a single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use IItemStack#withoutAttribute.

 This method can only remove default Attributes from an ItemStack, it is still possible that an ItemStack can override it.

Return Type: void

```zenscript
// MCIngredientTransformed.removeGlobalAttribute(attribute as Attribute, slotTypes as MCEquipmentSlotType[]) as void

myMCIngredientTransformed.removeGlobalAttribute(<attribute:minecraft:generic.attack_damage>, [<equipmentslottype:chest>]);
```

| Параметр  | Тип                                                            | Описание                          |
| --------- | -------------------------------------------------------------- | --------------------------------- |
| attribute | [Attribute](/vanilla/api/entity/Attribute)                     | The attribute to remove.          |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | The slot types to remove it from. |


:::

:::group{name=removeGlobalAttributeModifier}

Removes all AttributeModifiers who's ID is the same as the given uuid from this IIngredient.

Return Type: void

```zenscript
// MCIngredientTransformed.removeGlobalAttributeModifier(uuid as string, slotTypes as MCEquipmentSlotType[]) as void

myMCIngredientTransformed.removeGlobalAttributeModifier("8c1b5535-9f79-448b-87ae-52d81480aaa3", [<equipmentslottype:chest>]);
```

| Параметр  | Тип                                                            | Описание                                          |
| --------- | -------------------------------------------------------------- | ------------------------------------------------- |
| uuid      | string                                                         | The unique id of the AttributeModifier to remove. |
| slotTypes | [MCEquipmentSlotType](/vanilla/api/util/MCEquipmentSlotType)[] | The slot types to remove it from.                 |


:::

:::group{name=removeTooltip}

Return Type: void

```zenscript
MCIngredientTransformed.removeTooltip(regex as string) as void
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| regex    | string | No Description Provided |


:::


## Операторы

:::group{name=CONTAINS}

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myMCIngredientTransformed
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in myMCIngredientTransformed
```

:::

:::group{name=OR}

```zenscript
myMCIngredientTransformed | other as IIngredient
```

:::


## Свойства

| Название       | Тип                                                                                      | Имеет Getter | Имеет Setter | Описание                                                                         |
| -------------- | ---------------------------------------------------------------------------------------- | ------------ | ------------ | -------------------------------------------------------------------------------- |
| baseIngredient | T                                                                                        | true         | false        | No Description Provided                                                          |
| burnTime       | void                                                                                     | false        | true         | Sets the burn time of this ingredient, for use in the furnace and other machines |
| items          | [IItemStack](/vanilla/api/items/IItemStack)[]                                            | true         | false        | No Description Provided                                                          |
| трансформатор  | [IIngredientTransformer](/vanilla/api/items/IIngredientTransformer)&lt;T&gt; | true         | false        | No Description Provided                                                          |

