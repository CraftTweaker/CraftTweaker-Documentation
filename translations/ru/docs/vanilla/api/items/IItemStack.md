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
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Методы
### очистить Имя Пользователя

Очищает любое пользовательское имя, установленное для этого ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### получить оставшиеся предметы

Когда создан этот ингредиент, что останется в сетке? Не проверяет, совпадает ли стек! Используется например, в net.minecraft.item.crafting.ICraftingRecipe

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(стек как crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Описание                    |
| -------- | ----------------------------------------------------------------- | --------------------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Стак для этого ингредиента. |


### matches

Соответствует ли данный стек ингредиенту?

Возвращает boolean

```zenscript
<item:minecraft:dirt>.matches(стек как crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Описание          |
| -------- | ----------------------------------------------------------------- | ----------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Стек для проверки |


### setDisplayName

Устанавливает отображаемое имя ItemStack

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(имя как строка);
<item:minecraft:dirt>.setDisplayName("совершенно не грязь");
```

| Параметр | Тип    | Описание         |
| -------- | ------ | ---------------- |
| имя      | String | Новое имя стека. |


### наносимый урон

Задает урон от предмета

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| damage   | int | новая величина урона |


### с меткой

Устанавливает тег для ItemStack.

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

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

## Утилиты

| Тип результата                                                    | Является неявным |
| ----------------------------------------------------------------- | ---------------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)            | true             |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)        | true             |
| [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | false            |

