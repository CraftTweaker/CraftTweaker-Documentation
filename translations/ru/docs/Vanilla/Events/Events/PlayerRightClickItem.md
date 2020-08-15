# Элемент правого клика игрока

Событие Элемент Игрока запускается незадолго до запуска предмета. Не увольняется, если игрок затухает блок или сущность. Это может быть отменено, чтобы предотвратить любые другие события. Если событие отменено, может быть предоставлен конкретный результат разрешения, запретить или пропустить событие. По умолчанию, результат выгружается.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerRightClickItemEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
События PlayerRightClickItem реализуют следующие интерфейсы и также могут вызвать все методы/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Взаимодействие игрока](/Vanilla/Events/Events/PlayerInteract/)

## ZenGetters & ZenSetters
На мероприятии можно скорректировать следующую информацию.

| ZenGetter          | ZenSetter          | type                                  |
| ------------------ | ------------------ | ------------------------------------- |
| `Результат отмены` | `Результат отмены` | строка ("allow" / "deny" / "default") |
