# PlayerInteractEntity

The PlayerInteractEntity Event is fired whenever a player interacts with an Entity. It can be canceled to prevent the interaction from taking place. If the event is canceled, a specific result of success, fail or pass can be provided. By default, the result is pass.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractEntityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerInteractEntity Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters & ZenSetters

Следующая информация может быть получена от события:

| ZenGetter            | ZenSetters           | Возвращаемый тип                      |
| -------------------- | -------------------- | ------------------------------------- |
| `player`             |                      | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `target`             |                      | [IEntity](/Vanilla/Entities/IEntity/) |
| `cancellationResult` | `cancellationResult` | string ("success" / "pass" / "fail")  |

## Методы

- `event.cancel()` sets the event as cancelled.