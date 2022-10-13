# PlayerChangedDimension

The PlayerChangedDimension Event is fired whenever a [player's](/Vanilla/Players/IPlayer/) [dimension/world](/Vanilla/World/IWorld/) changes, for example upon entering/leaving the nether.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerChangedDimensionEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.


## Наследование от интерфейсов событий
PlayerChandedDimension Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)



## ZenGetters
Следующая информация может быть получена от события:

| ZenGetter   | Возвращаемый тип                     |
| ----------- | ------------------------------------ |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer/) |
| `from`      | int                                  |
| `fromWorld` | [IWorld](/Vanilla/World/IWorld/)     |
| `to`        | int                                  |
| `toWorld`   | [IWorld](/Vanilla/World/IWorld/)     |