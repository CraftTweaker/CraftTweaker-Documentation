# ItemToss

The ItemToss Event is fired whenever an Item is being tossed from a player's inventory.  
Canceling this event will prevent the item from entering the world, thus causing the item to be deleted.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ItemTossEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
PlayerDeathDrops реализует следующие интерфейсы и способно вызвать все их методы/геттеры/сеттеры:

- [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter | Тип                                           |
| --------- | --------------------------------------------- |
| item      | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| player    | [IPlayer](/Vanilla/Players/IPlayer/)          |