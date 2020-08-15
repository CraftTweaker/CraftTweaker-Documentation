
# BlockPlaceEvent

Событие BlockBreak запускается при размещении блока. Вы можете отменить событие, чтобы предотвратить размещение блока.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.BlockPlaceEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
BlockPlace Events реализуют следующие интерфейсы и могут также вызвать все их методы/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)


## Геттеры
Следующая информация может быть получена от события:

| ZenGetter           | ZenSetter | Тип                                         |
| ------------------- | --------- | ------------------------------------------- |
| `player`            |           | [IPlayer](/Vanilla/Players/IPlayer/)        |
| `текущий`           |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `поставлено против` |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `рука`              |           | String                                      |
