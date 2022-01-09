# PlayerPickupItem

The PlayerPickupItem Event is fired whenever a player interacts with an Entity.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerPickupItemEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
PlayerPickupItem Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable)


## ZenGetters
Следующая информация может быть получена от события:

| ZenGetter | Возвращаемый тип                              |
| --------- | --------------------------------------------- |
| `item`    | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/)          |
