# IIngredient

This is IIngredient!!!

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.item.IIngredient
```

## Implemented Interfaces
IIngredient implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### anyDamage

Тип возврата: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.anyDamage();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<tag:ingotIron>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Description                               |
| -------- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return type: boolean

```zenscript
<tag:ingotIron>.matches(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.matches(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Description        |
| -------- | ----------------------------------------------------------------- | ------------------ |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |



Does the given stack match the ingredient?

Return type: boolean

```zenscript
<tag:ingotIron>.matches(стек как crafttweaker.api.item.IItemStack, игнорировать как boolean);
```

| Параметр      | Тип                                                               | Description               |
| ------------- | ----------------------------------------------------------------- | ------------------------- |
| stack         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check        |
| Игнорирование | boolean                                                           | Проверять ли повреждение? |


### onlyDamaged

Тип возврата: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.onlyDamaged();
```

### onlyIf

Тип возврата: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.onlyIf(uid как строка, функция как функция.Predicate<crafttweaker.api.item.IItemStack>);
```

| Параметр | Тип                                                                                                     | Description          | IsOptional | Default Value |
| -------- | ------------------------------------------------------------------------------------------------------- | -------------------- | ---------- | ------------- |
| uid      | String                                                                                                  | Описание отсутствует | false      | `null`        |
| function | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | Описание отсутствует | true       | `null`        |



## Свойства

| Название      | Тип                                                                 | Имеет Getter | Имеет Setter |
| ------------- | ------------------------------------------------------------------- | ------------ | ------------ |
| commandString | String                                                              | true         | false        |
| items         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true         | false        |

## Операторы
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

