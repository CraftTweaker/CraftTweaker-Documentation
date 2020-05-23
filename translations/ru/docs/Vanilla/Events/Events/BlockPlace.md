
# BlockPlaceEvent

The BlockBreak Event is fired whenever a block is being placed. You can cancel the event to prevent the block from being placed.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.BlockPlaceEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
BlockPlace Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)


## Геттеры
Следующая информация может быть получена от события:

| ZenGetter       | ZenSetter | Тип                                         |
| --------------- | --------- | ------------------------------------------- |
| `player`        |           | [IPlayer](/Vanilla/Players/IPlayer/)        |
| `isPlayer`      |           | bool                                        |
| `current`       |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `placedAgainst` |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `hand`          |           | String                                      |
