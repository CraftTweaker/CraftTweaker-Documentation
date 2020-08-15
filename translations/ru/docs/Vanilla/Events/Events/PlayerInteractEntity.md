# PlayerInteractEntity

Событие "Игрок InteractEntity" запускается, когда игрок взаимодействует с сущностью. Это может быть отменено, чтобы предотвратить взаимодействие происходящего. Если событие отменено, может быть предоставлен конкретный результат успеха, неудачи или прохождения. По умолчанию, результат выгружается.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractEntityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerInteractEntity Events реализуют следующие интерфейсы и также могут вызвать все методы/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Взаимодействие игрока](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters & ZenSetters

Следующая информация может быть получена от события:

| ZenGetter          | ZenSetters         | Возвращаемый тип                      |
| ------------------ | ------------------ | ------------------------------------- |
| `player`           |                    | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `target`           |                    | [IEntity](/Vanilla/Entities/IEntity/) |
| `Результат отмены` | `Результат отмены` | строка ("успеха" / "pass" / "fail")   |

## Методы

- `event.cancel()` устанавливает событие как отменено.