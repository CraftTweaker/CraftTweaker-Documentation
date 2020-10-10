# Интерактивный Игрок

Событие PlayerInteractBlock запускается, когда игрок нажимает правой кнопкой мыши на блоке.  
Это может быть отменено, чтобы предотвратить любые другие события. Если событие отменено, может быть предоставлен конкретный результат успеха, неудачи или прохождения. По умолчанию, результат выгружается.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

События PlayerInteractBlock реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## Геттеры

Следующая информация может быть получена от события:

| zengetter           | зенсетер            | type                                   |
| ------------------- | ------------------- | -------------------------------------- |
| `hitvector`         |                     | [IVector3d](/Vanilla/World/IVector3d/) |
| `использовать блок` | `использовать блок` | строка ("allow" / "deny" / "default")  |
| `useitem`           | `useitem`           | строка ("allow" / "deny" / "default")  |
| `Результат отмены`  | `Результат отмены`  | строка ("успеха" / "pass" / "fail")    |

## Методы

- `event.cancel()` sets the event as cancelled.