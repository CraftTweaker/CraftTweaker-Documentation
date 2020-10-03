# MCTag

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.tag.MCTag
```

## Implemented Interfaces
MCTag implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Methods
### addBlocks

```zenscript
myMCTag.addBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| Параметр | Тип                                                             | Description          |
| -------- | --------------------------------------------------------------- | -------------------- |
| blocks   | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | Описание отсутствует |


### addEntityTypes

```zenscript
myMCTag.addEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Параметр | Тип                                                                          | Description          |
| -------- | ---------------------------------------------------------------------------- | -------------------- |
| entities | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | Описание отсутствует |


### addFluids

```zenscript
myMCTag.addFluids(жидкости как crafttweaker.api.fluid.MCFluid[]);
```

| Параметр | Тип                                                            | Description          |
| -------- | -------------------------------------------------------------- | -------------------- |
| fluids   | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | Описание отсутствует |


### addItems

Добавляет элементы в этот тег, будет провалиться, если это не тег, который может содержать элементы

```zenscript
myMCTag.addItems(предметы как crafttweaker.api.item.IItemStack[]);
myMCTag.addItems(<item:minecraft:dirt>);
```

| Параметр | Тип                                                                 | Description                   |
| -------- | ------------------------------------------------------------------- | ----------------------------- |
| items    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Элементы для добавления в тег |


### anyDamage

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

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
null.getRemainingItem(стек как crafttweaker.api.item.IItemStack);
null.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Description                               |
| -------- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return type: boolean

```zenscript
null.matches(стек как crafttweaker.api.item.IItemStack);
null.matches(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Description        |
| -------- | ----------------------------------------------------------------- | ------------------ |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |



Does the given stack match the ingredient?

Return type: boolean

```zenscript
null.matches(stack as crafttweaker.api.item.IItemStack, ignoreDamage as boolean);
```

| Параметр      | Тип                                                               | Description               |
| ------------- | ----------------------------------------------------------------- | ------------------------- |
| stack         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check        |
| Игнорирование | boolean                                                           | Проверять ли повреждение? |


### onlyDamaged

Тип возврата: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyDamaged();
```

### onlyIf

Тип возврата: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyIf(uid как строка, функционировать как функция.Predicate<crafttweaker.api.item.IItemStack>);
```

| Параметр | Тип                                                                                                     | Description          | IsOptional | Default Value |
| -------- | ------------------------------------------------------------------------------------------------------- | -------------------- | ---------- | ------------- |
| uid      | String                                                                                                  | Описание отсутствует | false      | `null`        |
| function | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | Описание отсутствует | true       | `null`        |


### removeBlocks

```zenscript
myMCTag.removeBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| Параметр | Тип                                                             | Description          |
| -------- | --------------------------------------------------------------- | -------------------- |
| blocks   | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | Описание отсутствует |


### removeEntityTypes

```zenscript
myMCTag.removeEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Параметр | Тип                                                                          | Description          |
| -------- | ---------------------------------------------------------------------------- | -------------------- |
| entities | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | Описание отсутствует |


### удалить флюиды

```zenscript
myMCTag.removeFluids(жидкости как crafttweaker.api.fluid.MCFluid[]);
```

| Параметр | Тип                                                            | Description          |
| -------- | -------------------------------------------------------------- | -------------------- |
| fluids   | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | Описание отсутствует |


### removeItems

удаляет элементы из этого тега, если это не тег, который может содержать элементы

```zenscript
myMCTag.removeItems(предметы как crafttweaker.api.item.IItemStack[]);
myMCTag.removeItems(<item:minecraft:dirt>);
```

| Параметр | Тип                                                                 | Description                   |
| -------- | ------------------------------------------------------------------- | ----------------------------- |
| items    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Элементы для удаления из тега |



## Свойства

| Название            | Тип                                                                              | Имеет Getter | Имеет Setter |
| ------------------- | -------------------------------------------------------------------------------- | ------------ | ------------ |
| blocks              | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]                  | true         | false        |
| commandString       | String                                                                           | true         | false        |
| entityTypes         | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[]     | true         | false        |
| первый блок         | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)                    | true         | false        |
| первый тип сущности | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)       | true         | false        |
| первая жидкость     | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)                     | true         | false        |
| firstItem           | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                | true         | false        |
| fluids              | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[]                   | true         | false        |
| id                  | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true         | false        |
| isBlockTag          | boolean                                                                          | true         | false        |
| isEntityTypeTag     | boolean                                                                          | true         | false        |
| isFluidTag          | boolean                                                                          | true         | false        |
| isItemTag           | boolean                                                                          | true         | false        |
| items               | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]              | true         | false        |

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

