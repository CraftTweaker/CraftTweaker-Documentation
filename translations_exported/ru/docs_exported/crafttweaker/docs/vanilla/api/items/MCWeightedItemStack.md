# MCWeightedItemStack

ItemStack с шансом, обычно используется для вывода рецептов. <p> Будьте осторожны, если стек был использован для создания WeightedStack, то набор размеров будет мутировать оригинальную стеку!

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCWeightedItemStack;
```


## Implemented Interfaces
MCWeightedItemStack реализует следующие интерфейсы. That means all methods defined in these interfaces are also available in MCWeightedItemStack

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
## Constructors

Вручную создает взвешенный ItemStack. Обычно вы можете использовать оператор или `.weight(вес)` метод IItemStack, хотя
```zenscript
new MCWeightedItemStack(itemStack as IItemStack, weight as double) as MCWeightedItemStack
new MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Параметр     | Тип                                         | Description                   |
| ------------ | ------------------------------------------- | ----------------------------- |
| элемент Стек | [IItemStack](/vanilla/api/items/IItemStack) | Стек                          |
| weight       | double                                      | Шанс, между 0 (0%) и 1 (100%) |


## Methods

### weight

Создает новый взвешенный стек с заданным весом

Return Type: [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
MCWeightedItemStack.weight(newWeight as double) as MCWeightedItemStack
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```
| Параметр  | Тип    | Description |
| --------- | ------ | ----------- |
| новый вес | double | Процент     |


## Операторы

### MOD

Creates a new Weighted Stack with the given percentage

```zenscript
myMCWeightedItemStack % newWeight as int
<item:minecraft:bedrock>.weight(0.5D) % 75
```


### MUL

Устанавливает кол-во предметов Stack. <p> Если оригинальный стек был мутирован, также мутирует размер оригинала.

```zenscript
myMCWeightedItemStack * newAmount as int
<item:minecraft:bedrock>.weight(0.5D) * 5
```



## Свойства

| Название | Тип                                         | Имеет Getter | Имеет Setter |
| -------- | ------------------------------------------- | ------------ | ------------ |
| stack    | [IItemStack](/vanilla/api/items/IItemStack) | true         | false        |
| weight   | double                                      | true         | false        |

