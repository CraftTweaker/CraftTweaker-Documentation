# EntityMountEvent

Событие EntityMount запускается всякий раз, когда сущность монтируется или размонтируется. В случае отмены сущности запрещается монтировать (или демонтировать).

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityMountEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
События EntityMountEvent реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## Геттеры/сеттеры
Во время события можно извлечь/задать следующую информацию:

| ZenGetter               | Возвращаемый тип                      |
| ----------------------- | ------------------------------------- |
| `world`                 | [IWorld](/Vanilla/World/IWorld/)      |
| `монтирование`          | [IEntity](/Vanilla/Entities/IEntity/) |
| `смонтированный объект` | [IEntity](/Vanilla/Entities/IEntity/) |
| `isMounting`            | boolean                               |
| `Размонтирование`       | boolean                               |
