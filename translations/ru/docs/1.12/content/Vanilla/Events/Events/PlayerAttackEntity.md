# PlayerAttackEntity

The PlayerAttackEntity Event is fired whenever a player attacks an Entity.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAttackEntityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.


## Наследование от интерфейсов событий
PlayerAttackEntity Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
Следующая информация может быть получена от события:

| ZenGetter  | Возвращаемый тип                      |
| ---------- | ------------------------------------- |
| `canceled` | boolean                               |
| `player`   | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `target`   | [IEntity](/Vanilla/Entities/IEntity/) |

## ZenMethods

- `event.cancel()` sets the event as cancelled.
