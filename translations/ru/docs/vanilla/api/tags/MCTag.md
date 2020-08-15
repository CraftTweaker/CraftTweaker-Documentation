# MCTag

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.tag.MCTag
```

## Реализованные интерфейсы
MCTag реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
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


### добавить элементы

```zenscript
myMCTag.addItems(предметы как crafttweaker.api.item.IItemStack[]);
```

| Параметр | Тип                                                                 | Описание             |
| -------- | ------------------------------------------------------------------- | -------------------- |
| элементы | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Описание отсутствует |


### createBlockTag

Возвращает [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

Возвращает [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createItemTag

Возвращает [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
```

### получить оставшиеся предметы

Когда создан этот ингредиент, что останется в сетке? Не проверяет, совпадает ли стек! Используется например, в net.minecraft.item.crafting.ICraftingRecipe

Возвращает [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCTag.getRemainingItem(стек как crafttweaker.api.item.IItemStack);
myMCTag.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Описание                    |
| -------- | ----------------------------------------------------------------- | --------------------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Стак для этого ингредиента. |


### matches

Соответствует ли данный стек ингредиенту?

Возвращает boolean

```zenscript
myMCTag.matches(стек как crafttweaker.api.item.IItemStack);
myMCTag.matches(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Описание          |
| -------- | ----------------------------------------------------------------- | ----------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Стек для проверки |


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


### удалить элементы

```zenscript
myMCTag.removeItems(предметы как crafttweaker.api.item.IItemStack[]);
```

| Параметр | Тип                                                                 | Описание             |
| -------- | ------------------------------------------------------------------- | -------------------- |
| элементы | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Описание отсутствует |



## Свойства

| Название         | Тип                                                                          | Имеет Getter | Имеет Setter |
| ---------------- | ---------------------------------------------------------------------------- | ------------ | ------------ |
| blocks           | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]              | true         | false        |
| командная строка | String                                                                       | true         | false        |
| типы сущностей   | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | true         | false        |
| элементы         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]          | true         | false        |

## Утилиты

| Тип результата                                             | Является неявным |
| ---------------------------------------------------------- | ---------------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | true             |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | true             |

