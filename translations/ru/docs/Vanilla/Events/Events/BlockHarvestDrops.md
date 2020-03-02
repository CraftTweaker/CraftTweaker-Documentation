# BlockHarvestDropsEvent

Событие BlockHarvestDropsEvent вызывается, когда блок собирается выбросить свои предметы.  
Вы можете поменять список блоков или поменять шансы дропа. Установите его на 1, если вы уже сделали все обработки заранее.

## Класс события

Вам потребуется привести тип события в заголовке функции к этому классу  
`crafttweaker.event.BlockHarvestDropsEvent`  
И, конечно, вы можете [импортировать](/AdvancedFunctions/Import/) класс перед использованием.

## Наследование от интерфейсов событий

BlockHarvestDropsEvent реализует следующие интерфейсы и способно вызвать все их методы/геттеры/сеттеры:

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## Геттеры

Следующая информация может быть получена от события:

| Геттер         | Сеттер       | Тип                                              |
| -------------- | ------------ | ------------------------------------------------ |
| `player`       |              | [IPlayer](/Vanilla/Players/IPlayer/)             |
| `isPlayer`     |              | bool                                             |
| `silkTouch`    |              | bool                                             |
| `fortuneLevel` |              | int                                              |
| `drops`        | `drops`      | List<[IItemStack](/Vanilla/Items/IItemStack/)\> |
| `dropChance`   | `dropChance` | float                                            |

## Добавление предмета в список

Вы можете либо использовать оператор `+=`, либо использовать метод, чтобы добавить предмет в список:

```zenscript
event.drops += <minecraft:coal>;
event.addItem(<minecraft:coal>);
```