# IItemStack

Это представляет собой элемент. Его можно получить с помощью предмета BEP. [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.item.IItemStack
```

## Реализованные интерфейсы
IItemStack реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Методы
### addShiftTooltip

```zenscript
<item:minecraft:dirt>.addShiftTooltip(контент как crafttweaker.api.util.text.MCTextComponent, показать сообщение как crafttweaker.api.util.text.MCTextComponent);
```

| Параметр           | Тип                                                                                  | Описание             | Необязательный | Значение по умолчанию |
| ------------------ | ------------------------------------------------------------------------------------ | -------------------- | -------------- | --------------------- |
| контент            | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Описание отсутствует | false          | `null`                |
| показать сообщение | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Описание отсутствует | true           | `null`                |


### addTooltip

```zenscript
<item:minecraft:dirt>.addTooltip(контент как crafttweaker.api.util.text.MCTextComponent);
```

| Параметр | Тип                                                                                  | Описание             |
| -------- | ------------------------------------------------------------------------------------ | -------------------- |
| контент  | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Описание отсутствует |


### любой урон

Тип возврата: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.anyDamage();
```

### очистить Имя Пользователя

Очищает любое пользовательское имя, установленное для этого ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### clearTooltip

```zenscript
<item:minecraft:dirt>.clearTooltip();
```

### copy

Создает копию

Возвратный тип: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.copy();
```

### получить оставшиеся предметы

Когда создан этот ингредиент, что останется в сетке? Не проверяет, совпадает ли стек! Используется например, в net.minecraft.item.crafting.ICraftingRecipe

Возвратный тип: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(стек как crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Описание                    |
| -------- | ----------------------------------------------------------------- | --------------------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Стак для этого ингредиента. |


### matches

Соответствует ли данный стек ингредиенту?

Тип возврата: логическое значение

```zenscript
<item:minecraft:dirt>.matches(стек как crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Описание          |
| -------- | ----------------------------------------------------------------- | ----------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Стек для проверки |



Соответствует ли данный стек ингредиенту?

Тип возврата: логическое значение

```zenscript
<item:minecraft:dirt>.matches(стек как crafttweaker.api.item.IItemStack, игнорировать как boolean);
```

| Параметр      | Тип                                                               | Описание                  |
| ------------- | ----------------------------------------------------------------- | ------------------------- |
| stack         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Стек для проверки         |
| Игнорирование | boolean                                                           | Проверять ли повреждение? |


### modifyTooltip

```zenscript
<item:minecraft:dirt>.modifyTooltip(функция как crafttweaker.api.item.tooltip.ITooltipFunction);
```

| Параметр | Тип                                                                                               | Описание             |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- |
| function | [crafttweaker.api.item.tooltip.ITooltipFunction](/crafttweaker/api/item/tooltip/ITooltipFunction) | Описание отсутствует |


### изменяемый

Возвратный тип: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.mutable();
```

### только поврежден

Тип возврата: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyDamaged();
```

### onlyIf

Тип возврата: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyIf(uid как строка, функция как функция.Predicate<crafttweaker.api.item.IItemStack>);
```

| Параметр | Тип                                                                                                     | Описание             | Необязательный | Значение по умолчанию |
| -------- | ------------------------------------------------------------------------------------------------------- | -------------------- | -------------- | --------------------- |
| uid      | String                                                                                                  | Описание отсутствует | false          | `null`                |
| function | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | Описание отсутствует | true           | `null`                |


### removeTooltip

```zenscript
<item:minecraft:dirt>.removeTooltip(регулярные как строка);
```

| Параметр   | Тип    | Описание             |
| ---------- | ------ | -------------------- |
| регулярные | String | Описание отсутствует |


### setDisplayName

Устанавливает отображаемое имя ItemStack

Возвратный тип: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(имя как строка);
<item:minecraft:dirt>.setDisplayName("совершенно не грязь");
```

| Параметр | Тип    | Описание         |
| -------- | ------ | ---------------- |
| имя      | String | Новое имя стека. |


### наносимый урон

Задает урон от предмета

Возвратный тип: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| damage   | int | новая величина урона |


### с меткой

Устанавливает тег для ItemStack.

 Возвращается: `Этот itemStack, если он мультиплексирован, новый с измененным свойством`

Возвратный тип: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(тег как crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Привет"]});
```

| Параметр | Тип                                                    | Описание           |
| -------- | ------------------------------------------------------ | ------------------ |
| tag      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Тег для установки. |



## Свойства

| Название         | Тип                                                                 | Имеет Getter | Имеет Setter |
| ---------------- | ------------------------------------------------------------------- | ------------ | ------------ |
| сумма            | int                                                                 | true         | false        |
| время сгорания   | int                                                                 | true         | true         |
| командная строка | String                                                              | true         | false        |
| damage           | int                                                                 | true         | false        |
| повреждаемый     | boolean                                                             | true         | false        |
| поврежден        | boolean                                                             | true         | false        |
| displayName      | String                                                              | true         | false        |
| пустой           | boolean                                                             | true         | false        |
| еда              | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | true         | true         |
| getOrCreate      | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true         | false        |
| getRepairCost    | int                                                                 | true         | false        |
| hasDisplayName   | boolean                                                             | true         | false        |
| имеет эффект     | boolean                                                             | true         | false        |
| hasTag           | boolean                                                             | true         | false        |
| isCrossbow       | boolean                                                             | true         | false        |
| isEnchantable    | boolean                                                             | true         | false        |
| isEnchanted      | boolean                                                             | true         | false        |
| элементы         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | true         | false        |
| maxDamage        | int                                                                 | true         | false        |
| maxStackSize     | int                                                                 | true         | false        |
| владелец         | String                                                              | true         | false        |
| registryName     | String                                                              | true         | false        |
| укладываемое     | boolean                                                             | true         | false        |
| tag              | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | true         | false        |
| translationKey   | String                                                              | true         | false        |
| useDuration      | int                                                                 | true         | false        |

## Операторы
### MUL

Устанавливает количество ItemStack

```zenscript
<item:minecraft:dirt> * сумма как int
<item:minecraft:dirt> * 3
```

| Параметр | Тип | Описание    |
| -------- | --- | ----------- |
| сумма    | int | новая сумма |
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

