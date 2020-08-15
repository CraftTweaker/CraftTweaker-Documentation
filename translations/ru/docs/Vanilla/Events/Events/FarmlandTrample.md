# Событие фермыTrampleEvent

Событие Фермерский трамвай запускается всякий раз, когда земля собирается пробиться. Отмена события предотвратит остановку блока.

## Примечания

`event.fallDistance` содержит расстояние, упавшее до попадания на ферму.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.FarmlandTrampleEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
FarmlandTrample События реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters
Следующая информация может быть получена от события:

| ZenGetter          | ZenSetter | Тип                                   |
| ------------------ | --------- | ------------------------------------- |
| `сущность`         |           | [IEntity](/Vanilla/Entities/IEntity/) |
| `Дальность взлёта` |           | float                                 |
