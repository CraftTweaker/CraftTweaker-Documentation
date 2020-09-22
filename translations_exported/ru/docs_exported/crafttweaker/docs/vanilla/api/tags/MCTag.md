# MCTag

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.tag.MCTag
```

## Реализованные интерфейсы
MCTag реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Методы
### addBlocks

```zenscript
myMCTag.addBlocks(блоки как crafttweaker.api.block.MCBlock[]);
```

| Параметр | Тип                                                             | Описание             |
| -------- | --------------------------------------------------------------- | -------------------- |
| blocks   | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | Описание отсутствует |


### addEntityTypes

```zenscript
myMCTag.addEntityTypes(сущности как crafttweaker.api.entity.MCEntityType[]);
```

| Параметр | Тип                                                                          | Описание             |
| -------- | ---------------------------------------------------------------------------- | -------------------- |
| entities | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | Описание отсутствует |


### addFluids

```zenscript
myMCTag.addFluids(жидкости как crafttweaker.api.fluid.MCFluid[]);
```

| Параметр | Тип                                                            | Описание             |
| -------- | -------------------------------------------------------------- | -------------------- |
| жидкости | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | Описание отсутствует |


### добавить элементы

Добавляет элементы в этот тег, будет провалиться, если это не тег, который может содержать элементы

```zenscript
myMCTag.addItems(предметы как crafttweaker.api.item.IItemStack[]);
myMCTag.addItems(<item:minecraft:dirt>);
```

| Параметр | Тип                                                                 | Описание                      |
| -------- | ------------------------------------------------------------------- | ----------------------------- |
| элементы | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Элементы для добавления в тег |


### любой урон

Тип возврата: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.anyDamage();
```

### createBlockTag

Тип возврата: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

Тип возврата: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createFluidTag

Тип возврата: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createFluidTag();
```

### createItemTag

Тип возврата: [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
```

### получить оставшиеся предметы

Когда создан этот ингредиент, что останется в сетке? Не проверяет, совпадает ли стек! Используется например, в net.minecraft.item.crafting.ICraftingRecipe

Возвратный тип: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
null.getRemainingItem(стек как crafttweaker.api.item.IItemStack);
null.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Описание                    |
| -------- | ----------------------------------------------------------------- | --------------------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Стак для этого ингредиента. |


### matches

Соответствует ли данный стек ингредиенту?

Тип возврата: логическое значение

```zenscript
null.matches(стек как crafttweaker.api.item.IItemStack);
null.matches(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Описание          |
| -------- | ----------------------------------------------------------------- | ----------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Стек для проверки |



Соответствует ли данный стек ингредиенту?

Тип возврата: логическое значение

```zenscript
null.matches(stack as crafttweaker.api.item.IItemStack, ignoreDamage as boolean);
```

| Параметр      | Тип                                                               | Описание                  |
| ------------- | ----------------------------------------------------------------- | ------------------------- |
| stack         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Стек для проверки         |
| Игнорирование | boolean                                                           | Проверять ли повреждение? |


### только поврежден

Тип возврата: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyDamaged();
```

### onlyIf

Тип возврата: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyIf(uid как строка, функционировать как функция.Predicate<crafttweaker.api.item.IItemStack>);
```

| Параметр | Тип                                                                                                     | Описание             | Необязательный | Значение по умолчанию |
| -------- | ------------------------------------------------------------------------------------------------------- | -------------------- | -------------- | --------------------- |
| uid      | String                                                                                                  | Описание отсутствует | false          | `null`                |
| function | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | Описание отсутствует | true           | `null`                |


### убрать Блоки

```zenscript
myMCTag.removeBlocks(блоки как crafttweaker.api.block.MCBlock[]);
```

| Параметр | Тип                                                             | Описание             |
| -------- | --------------------------------------------------------------- | -------------------- |
| blocks   | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | Описание отсутствует |


### удалить типы сущностей

```zenscript
myMCTag.removeEntityTypes(сущности как crafttweaker.api.entity.MCEntityType[]);
```

| Параметр | Тип                                                                          | Описание             |
| -------- | ---------------------------------------------------------------------------- | -------------------- |
| entities | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | Описание отсутствует |


### удалить флюиды

```zenscript
myMCTag.removeFluids(жидкости как crafttweaker.api.fluid.MCFluid[]);
```

| Параметр | Тип                                                            | Описание             |
| -------- | -------------------------------------------------------------- | -------------------- |
| жидкости | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | Описание отсутствует |


### удалить элементы

удаляет элементы из этого тега, если это не тег, который может содержать элементы

```zenscript
myMCTag.removeItems(предметы как crafttweaker.api.item.IItemStack[]);
myMCTag.removeItems(<item:minecraft:dirt>);
```

| Параметр | Тип                                                                 | Описание                      |
| -------- | ------------------------------------------------------------------- | ----------------------------- |
| элементы | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Элементы для удаления из тега |



## Свойства

| Название            | Тип                                                                              | Имеет Getter | Имеет Setter |
| ------------------- | -------------------------------------------------------------------------------- | ------------ | ------------ |
| blocks              | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]                  | true         | false        |
| командная строка    | String                                                                           | true         | false        |
| типы сущностей      | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[]     | true         | false        |
| первый блок         | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)                    | true         | false        |
| первый тип сущности | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)       | true         | false        |
| первая жидкость     | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)                     | true         | false        |
| первый пункт        | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                | true         | false        |
| жидкости            | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[]                   | true         | false        |
| id                  | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true         | false        |
| isBlockTag          | boolean                                                                          | true         | false        |
| isEntityTypeTag     | boolean                                                                          | true         | false        |
| isFluidTag          | boolean                                                                          | true         | false        |
| isItemTag           | boolean                                                                          | true         | false        |
| элементы            | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]              | true         | false        |

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

