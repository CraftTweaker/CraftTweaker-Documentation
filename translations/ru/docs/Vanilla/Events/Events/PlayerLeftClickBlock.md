# Игрок оставил КликБлок

Событие PlayerLeftClickBlock запускается, когда игрок нажимает на блок.  
Это может быть отменено, чтобы предотвратить любые другие события. Если игрок удерживает левый клик, то событие снова огонет даже если оно было отменено. Отмена этого события предотвратит регистрацию левой кнопкой мыши, предотвращая блокировку (хотя и не в творческом режиме). Если событие отменено, может быть предоставлен конкретный результат успеха, неудачи или прохождения. По умолчанию, результат выгружается.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerLeftClickBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
События PlayerLeftClickBlock реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

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
