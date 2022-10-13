# PlayerSetSpawn

The PlayerSetSpawn Event is fired whenever a player's spawn location changes.  
It can be canceled to prevent further processing.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSetSpawnEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
PlayerSetSpawn Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters
Следующая информация может быть получена от события:

| ZenGetter  | Возвращаемый тип                       |
| ---------- | -------------------------------------- |
| `player`   | [IPlayer](/Vanilla/Players/IPlayer/)   |
| `isForced` | bool                                   |
| `newSpawn` | [IBlockPos](/Vanilla/World/IBlockPos/) |