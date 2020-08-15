# PlayerLeftClickBlock

The PlayerLeftClickBlock Event is fired whenever a player left clicks a block.  
It can be canceled to prevent any other events from taking place. If the player holds down the left click, the event will fire again even if it has been canceled. Canceling this event will prevent the left click from being registered, preventing block breaking (although not in creative mode). Если событие отменено, может быть предоставлен конкретный результат успеха, неудачи или прохождения. По умолчанию, результат выгружается.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerLeftClickBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
PlayerLeftClickBlock Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Взаимодействие игрока](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters & ZenSetters
Следующая информация может быть получена от события:

| ZenGetter           | ZenSetter           | type                                   |
| ------------------- | ------------------- | -------------------------------------- |
| `hitvector`         |                     | [ivector3d](/vanilla/world/ivector3d/) |
| `использовать блок` | `использовать блок` | строка ("allow" / "deny" / "default")  |
| `useitem`           | `useitem`           | строка ("allow" / "deny" / "default")  |
| `Результат отмены`  | `Результат отмены`  | строка ("успеха" / "pass" / "fail")    |

## Методы

- `event.cancel()` устанавливает событие как отменено.
