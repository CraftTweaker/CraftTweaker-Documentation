# BlockBreakEvent

The BlockBreak Event is fired whenever a block is being broken.  
You can cancel the event to prevent the block from being broken.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.BlockBreakEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
BlockBreakEvent реализует следующие интерфейсы и способно вызвать все их методы/геттеры/сеттеры:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
Следующая информация может быть получена от события:

| ZenGetter    | ZenSetter    | Тип                                  |
| ------------ | ------------ | ------------------------------------ |
| `player`     |              | [IPlayer](/Vanilla/Players/IPlayer/) |
| `isPlayer`   |              | bool                                 |
| `experience` | `experience` | int                                  |