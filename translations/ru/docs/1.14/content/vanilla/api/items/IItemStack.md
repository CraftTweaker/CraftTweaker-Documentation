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
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Методы
### clearCustomName

Clears any custom name set for this ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Описание                                  |
| -------- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Возвращает boolean

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                                               | Описание           |
| -------- | ----------------------------------------------------------------- | ------------------ |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


### setDisplayName

Sets the display name of the ItemStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(name as String);
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| Параметр | Тип    | Описание               |
| -------- | ------ | ---------------------- |
| name     | String | New name of the stack. |


### withDamage

Sets the damage of the ItemStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| damage   | int | the new damage value |


### withTag

Sets the tag for the ItemStack.

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| Параметр | Тип                                                    | Описание        |
| -------- | ------------------------------------------------------ | --------------- |
| tag      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The tag to set. |



## Свойства

| Название       | Тип                                                                 | Имеет Getter | Имеет Setter |
| -------------- | ------------------------------------------------------------------- | ------------ | ------------ |
| amount         | int                                                                 | true         | false        |
| burnTime       | int                                                                 | true         | true         |
| commandString  | String                                                              | true         | false        |
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

| Параметр | Тип | Описание   |
| -------- | --- | ---------- |
| amount   | int | new amount |

## Утилиты

| Тип результата                                                    | Является неявным |
| ----------------------------------------------------------------- | ---------------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)            | true             |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)        | true             |
| [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | false            |

