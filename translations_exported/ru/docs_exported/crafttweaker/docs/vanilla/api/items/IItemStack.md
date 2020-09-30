# IItemStack

This represents an item. It can be retrieved using an Item BEP. Is an [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.item.IItemStack
```

## Implemented Interfaces
IItemStack implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Methods
### addShiftTooltip

```zenscript
<item:minecraft:dirt>.addShiftTooltip(контент как crafttweaker.api.util.text.MCTextComponent, показать сообщение как crafttweaker.api.util.text.MCTextComponent);
```

| Параметр           | Тип                                                                                  | Description          | IsOptional | Default Value |
| ------------------ | ------------------------------------------------------------------------------------ | -------------------- | ---------- | ------------- |
| контент            | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Описание отсутствует | false      | `null`        |
| показать сообщение | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Описание отсутствует | true       | `null`        |


### addTooltip

```zenscript
<item:minecraft:dirt>.addTooltip(контент как crafttweaker.api.util.text.MCTextComponent);
```

| Параметр | Тип                                                                                  | Description          |
| -------- | ------------------------------------------------------------------------------------ | -------------------- |
| контент  | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Описание отсутствует |


### anyDamage

Тип возврата: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.anyDamage();
```

### clearCustomName

Clears any custom name set for this ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### clearTooltip

```zenscript
<item:minecraft:dirt>.clearTooltip();
```

### copy

Создает копию

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.copy();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Description                               |
| -------- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return type: boolean

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Description        |
| -------- | ----------------------------------------------------------------- | ------------------ |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |



Does the given stack match the ingredient?

Return type: boolean

```zenscript
<item:minecraft:dirt>.matches(стек как crafttweaker.api.item.IItemStack, игнорировать как boolean);
```

| Параметр      | Тип                                                               | Description               |
| ------------- | ----------------------------------------------------------------- | ------------------------- |
| stack         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check        |
| Игнорирование | boolean                                                           | Проверять ли повреждение? |


### modifyTooltip

```zenscript
<item:minecraft:dirt>.modifyTooltip(функция как crafttweaker.api.item.tooltip.ITooltipFunction);
```

| Параметр | Тип                                                                                               | Description          |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- |
| function | [crafttweaker.api.item.tooltip.ITooltipFunction](/crafttweaker/api/item/tooltip/ITooltipFunction) | Описание отсутствует |


### изменяемый

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.mutable();
```

### onlyDamaged

Тип возврата: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyDamaged();
```

### onlyIf

Тип возврата: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyIf(uid как строка, функция как функция.Predicate<crafttweaker.api.item.IItemStack>);
```

| Параметр | Тип                                                                                                     | Description          | IsOptional | Default Value |
| -------- | ------------------------------------------------------------------------------------------------------- | -------------------- | ---------- | ------------- |
| uid      | String                                                                                                  | Описание отсутствует | false      | `null`        |
| function | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | Описание отсутствует | true       | `null`        |


### removeTooltip

```zenscript
<item:minecraft:dirt>.removeTooltip(регулярные как строка);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| regex    | String | Описание отсутствует |


### setDisplayName

Sets the display name of the ItemStack

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(name as String);
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| Параметр | Тип    | Description            |
| -------- | ------ | ---------------------- |
| name     | String | New name of the stack. |


### weight

Тип возврата: [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:dirt>.вес (вес в два раза);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| weight   | double | Описание отсутствует |


### withDamage

Sets the damage of the ItemStack

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| Параметр | Тип | Description          |
| -------- | --- | -------------------- |
| damage   | int | the new damage value |


### withTag

Sets the tag for the ItemStack.

 Возвращается: `Этот itemStack, если он мультиплексирован, новый с измененным свойством`

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| Параметр | Тип                                                    | Description     |
| -------- | ------------------------------------------------------ | --------------- |
| tag      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The tag to set. |



## Свойства

| Название       | Тип                                                                 | Имеет Getter | Имеет Setter |
| -------------- | ------------------------------------------------------------------- | ------------ | ------------ |
| amount         | int                                                                 | true         | false        |
| burnTime       | int                                                                 | true         | true         |
| commandString  | String                                                              | true         | false        |
| damage         | int                                                                 | true         | false        |
| damageable     | boolean                                                             | true         | false        |
| damaged        | boolean                                                             | true         | false        |
| displayName    | String                                                              | true         | false        |
| empty          | boolean                                                             | true         | false        |
| food           | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | true         | true         |
| getOrCreate    | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true         | false        |
| getRepairCost  | int                                                                 | true         | false        |
| hasDisplayName | boolean                                                             | true         | false        |
| hasEffect      | boolean                                                             | true         | false        |
| hasTag         | boolean                                                             | true         | false        |
| isCrossbow     | boolean                                                             | true         | false        |
| isEnchantable  | boolean                                                             | true         | false        |
| isEnchanted    | boolean                                                             | true         | false        |
| items          | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true         | false        |
| maxDamage      | int                                                                 | true         | false        |
| maxStackSize   | int                                                                 | true         | false        |
| owner          | String                                                              | true         | false        |
| registryName   | String                                                              | true         | false        |
| stackable      | boolean                                                             | true         | false        |
| tag            | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true         | false        |
| translationKey | String                                                              | true         | false        |
| useDuration    | int                                                                 | true         | false        |

## Операторы
### MUL

Sets the amount of the ItemStack

```zenscript
<item:minecraft:dirt> * amount as int
<item:minecraft:dirt> * 3
```

| Параметр | Тип | Description |
| -------- | --- | ----------- |
| amount   | int | new amount  |
### MOD

```zenscript
<item:minecraft:dirt> % в процентах как int
```

| Параметр | Тип | Description          |
| -------- | --- | -------------------- |
| процент  | int | Описание отсутствует |
### ИЛИ

```zenscript
<tag:ingotIron> | Другое как crafttweaker.api.item.IIngredient
```

| Параметр | Тип                                                                 | Description          |
| -------- | ------------------------------------------------------------------- | -------------------- |
| other    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Описание отсутствует |

## Утилиты

| Тип результата                                             | Является неявным |
| ---------------------------------------------------------- | ---------------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | true             |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | true             |

