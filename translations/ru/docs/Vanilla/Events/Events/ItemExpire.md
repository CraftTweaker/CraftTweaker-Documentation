# Срок действия предмета

Время жизни предмета истекает каждый раз после окончания предмета  
Это может быть отменено, чтобы предотвратить помеченные предмет как мертвый.  
Если отменено, он добавит `дополнительные` в срок жизни предмета.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.ItemExpireEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerDeathDrops реализует следующие интерфейсы и способно вызвать все их методы/геттеры/сеттеры:

- [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| Геттеры   | ZenSetter | Тип                                           |
| --------- | --------- | --------------------------------------------- |
| элемент   |           | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| extraLife | extraLife | int                                           |