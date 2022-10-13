# BlockHarvestDropsEvent

The BlockHarvestDrops Event is fired whenever a block is about to drop its items.  
You can modify the block list as well as the overall drop chance. Установите его на 1, если вы уже сделали все обработки заранее.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.BlockHarvestDropsEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
BlockHarvestDropsEvent реализует следующие интерфейсы и способно вызвать все их методы/геттеры/сеттеры:

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
Следующая информация может быть получена от события:

| ZenGetter      | ZenSetter    | Тип                                                            |
| -------------- | ------------ | -------------------------------------------------------------- |
| `player`       |              | [IPlayer](/Vanilla/Players/IPlayer/)                           |
| `isPlayer`     |              | bool                                                           |
| `silkTouch`    |              | bool                                                           |
| `fortuneLevel` |              | int                                                            |
| `drops`        | `drops`      | List<[WeightedItemStack](/Vanilla/Items/WeightedItemStack/)\> |
| `dropChance`   | `dropChance` | float                                                          |


## Добавление предмета в список
Вы можете либо использовать оператор `+=`, либо использовать метод, чтобы добавить предмет в список:
```zenscript
event.drops += <minecraft:coal>;
event.addItem(<minecraft:coal>);
```
