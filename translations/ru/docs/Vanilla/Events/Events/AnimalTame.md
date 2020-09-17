# AnimalTame

Это событие запущено, чтобы определить, будет ли приручено животное. Если отмена, **приручение не удаётся**. В противном случае он просто служит уведомлением о привязанности к нему.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.AnimalTameEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
AnimalTame Events реализует следующие интерфейсы и могут также вызвать все методы/getters/setters:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## Геттеры/сеттеры
Во время события можно извлечь/задать следующую информацию:

| ZenGetter  | ZenSetter | Тип                                               |
| ---------- | --------- | ------------------------------------------------- |
| `животное` |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `животное` |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `player`   |           | [IPlayer](/Vanilla/Players/IPlayer/)              |
