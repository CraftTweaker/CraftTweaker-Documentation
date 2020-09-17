# Иингредиент

Это IIngredient!!!

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.item.IIngredient
```

## Реализованные интерфейсы
IIngredient реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Методы
### любой урон

Тип возврата: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.anyDamage();
```

### получить оставшиеся предметы

Когда создан этот ингредиент, что останется в сетке? Не проверяет, совпадает ли стек! Используется например, в net.minecraft.item.crafting.ICraftingRecipe

Возвратный тип: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<tag:ingotIron>.getRemainingItem(стек как crafttweaker.api.item.IItemStack);
<tag:ingotIron>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Описание                    |
| -------- | ----------------------------------------------------------------- | --------------------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Стак для этого ингредиента. |


### matches

Соответствует ли данный стек ингредиенту?

Тип возврата: логическое значение

```zenscript
<tag:ingotIron>.matches(стек как crafttweaker.api.item.IItemStack);
<tag:ingotIron>.matches(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Описание          |
| -------- | ----------------------------------------------------------------- | ----------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Стек для проверки |



Соответствует ли данный стек ингредиенту?

Тип возврата: логическое значение

```zenscript
<tag:ingotIron>.matches(стек как crafttweaker.api.item.IItemStack, игнорировать как boolean);
```

| Параметр      | Тип                                                               | Описание                  |
| ------------- | ----------------------------------------------------------------- | ------------------------- |
| stack         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Стек для проверки         |
| Игнорирование | boolean                                                           | Проверять ли повреждение? |


### только поврежден

Тип возврата: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.onlyDamaged();
```

### onlyIf

Тип возврата: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<tag:ingotIron>.onlyIf(uid как строка, функция как функция.Predicate<crafttweaker.api.item.IItemStack>);
```

| Параметр | Тип                                                                                                     | Описание             | Необязательный | Значение по умолчанию |
| -------- | ------------------------------------------------------------------------------------------------------- | -------------------- | -------------- | --------------------- |
| uid      | String                                                                                                  | Описание отсутствует | false          | `null`                |
| function | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | Описание отсутствует | true           | `null`                |



## Свойства

| Название         | Тип                                                                 | Имеет Getter | Имеет Setter |
| ---------------- | ------------------------------------------------------------------- | ------------ | ------------ |
| командная строка | String                                                              | true         | false        |
| элементы         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true         | false        |

## Операторы
### ИЛИ

```zenscript
<tag:ingotIron> | Другое как crafttweaker.api.item.IIngredient
```

| Параметр | Тип                                                                 | Описание             |
| -------- | ------------------------------------------------------------------- | -------------------- |
| другой   | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Описание отсутствует |

## Утилиты

| Тип результата                                             | Является неявным |
| ---------------------------------------------------------- | ---------------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | true             |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | true             |

