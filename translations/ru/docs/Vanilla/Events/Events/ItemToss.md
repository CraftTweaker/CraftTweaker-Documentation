# Тос

Событие Предметы запущено, когда из инвентаря игрока разбрасываются предметы.  
Отмена этого события не позволит предмету попасть в мир, таким образом он будет удален.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.ItemTossEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerDeathDrops реализует следующие интерфейсы и способно вызвать все их методы/геттеры/сеттеры:

- [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| Геттеры | Тип                                           |
| ------- | --------------------------------------------- |
| элемент | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| player  | [IPlayer](/Vanilla/Players/IPlayer/)          |