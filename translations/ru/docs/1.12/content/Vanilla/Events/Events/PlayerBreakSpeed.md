# PlayerBreakSpeed

The PlayerBreakSpeed Event is fired whenever a player tries to break a block.  
It can be canceled to stop theplayer from being able to break that block.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerBreakSpeedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
PlayerBreakSpeed Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## Геттеры/сеттеры

| ZenGetter     | ZenSetter | Тип                                         |
| ------------- | --------- | ------------------------------------------- |
| blockState    |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| block         |           | [IBlock](/Vanilla/Blocks/IBlock/)           |
| originalSpeed |           | float                                       |
| newSpeed      | newSpeed  | float                                       |