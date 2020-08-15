# EntityLivingFall

Событие EntityLivingFall запускается всякий раз, когда сущность падает.  
Событие может быть отменено, чтобы вывести сущность из падения.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingFallEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerDeathDrops реализует следующие интерфейсы и способно вызвать все их методы/геттеры/сеттеры:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| Геттеры         | ZenSetter       | Тип   |
| --------------- | --------------- | ----- |
| негодование     | негодование     | float |
| Множитель урона | Множитель урона | float |